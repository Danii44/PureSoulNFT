// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

// log
import { fetchData } from "../data/dataActions";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: "https://bsc-dataseed.binance.org/", // ✅ BSC RPC
      },
      network: "binance",
    },
  },
  walletlink: {
    package: WalletLink,
    options: {
      appName: "Nftips",
      rpc: "https://bsc-dataseed.binance.org/", // ✅ BSC RPC
      chainId: 56,
      appLogoUrl: null,
      darkMode: false,
    },
  },
};

const connectRequest = () => ({ type: "CONNECTION_REQUEST" });
const connectSuccess = (payload) => ({ type: "CONNECTION_SUCCESS", payload });
const connectFailed = (payload) => ({ type: "CONNECTION_FAILED", payload });
const updateAccountRequest = (payload) => ({ type: "UPDATE_ACCOUNT", payload });

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());

    try {
      const abiResponse = await fetch("/config/abi.json", {
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      const abi = await abiResponse.json();

      const configResponse = await fetch("/config/config.json", {
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      const CONFIG = await configResponse.json();

      // Clear previous wallet sessions
      localStorage.removeItem("walletconnect");
      localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");

      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
        theme: "dark",
      });

      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      Web3EthContract.setProvider(provider);

      const accounts = await web3.eth.getAccounts();
      const networkId = await provider.request({ method: "net_version" });

      // Switch/add network if needed (for MetaMask)
      if (parseInt(networkId) !== CONFIG.NETWORK.ID) {
        try {
          await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: Web3.utils.toHex(CONFIG.NETWORK.ID) }],
          });
        } catch (switchError) {
          // If BSC is not added to wallet
          if (switchError.code === 4902) {
            try {
              await provider.request({
                method: "wallet_addEthereumChain",
                params: [{
                  chainId: Web3.utils.toHex(CONFIG.NETWORK.ID),
                  chainName: "Binance Smart Chain",
                  nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
                  rpcUrls: ["https://bsc-dataseed.binance.org/"],
                  blockExplorerUrls: ["https://bscscan.com"],
                }],
              });
            } catch (addError) {
              dispatch(connectFailed("Please add BSC manually in your wallet."));
              return;
            }
          } else {
            dispatch(connectFailed(`Switch to ${CONFIG.NETWORK.NAME}`));
            return;
          }
        }
      }

      const SmartContractObj = new Web3EthContract(abi, CONFIG.CONTRACT_ADDRESS);

      dispatch(connectSuccess({
        account: accounts[0],
        smartContract: SmartContractObj,
        web3,
      }));

      // Wallet event listeners
      provider.on("accountsChanged", (accounts) => {
        dispatch(updateAccount(accounts[0]));
      });

      provider.on("chainChanged", () => {
        window.location.reload();
      });

    } catch (err) {
      console.error("Connection error:", err);

      if (
        typeof err !== "undefined" &&
        typeof err.message !== "undefined" &&
        err.message.includes("User Rejected")
      ) {
        dispatch(connectFailed("User rejected the request"));
      } else if (
        (typeof err === "string" || err instanceof String) &&
        err.includes("Modal closed by user")
      ) {
        dispatch(connectFailed("Modal closed by user"));
      } else {
        dispatch(connectFailed("Something went wrong."));
      }
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account }));
    dispatch(fetchData(account));
  };
};
