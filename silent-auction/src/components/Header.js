import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../css/index.css'

const Header = () => {
   return  (
       <Router>
   <div className="container-wrapper">
       <div className="container-navbar">
           <h1>SILENT AUCTION</h1>

           <nav className="navbar">
            <Route exact path="/"></Route>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/create">Create Auction</Link></button>
            <button>Login</button>
            <button>Sign Up</button>
           </nav>
       </div>
   </div>
   </Router>
    )
    }
    
    export default Header;