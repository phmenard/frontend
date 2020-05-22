import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Header = () => {
   return  (
       <Router>
   <div className="container-wrapper">
       <div className="container-navbar">
           <h1>Silent Auction</h1>

           <nav className="navbar">
            <Route path="/"></Route>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/create">Create Auction</Link></button>
            <button>Sign Up</button>
            <button>Login</button>
           </nav>
       </div>
   </div>
   </Router>
    )
    }
    
    export default Header;