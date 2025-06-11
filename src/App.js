import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Minting from './pages/Minting';


function App(){
    return(
      <Router >
      <div >
      
          <Routes >
          <Route exact path = "/" element={<Home/>}/> 
          <Route exact path = "/mint" element={<Minting/>}/>
          </Routes> 
  
  
          </div>
        </Router> 
    );
}

export default App;