import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(

            <nav className="navbar bg-dark justify-content-center my-2 my-md-0 mr-md-3"> 
                <Link to="/" className="navbar-brand">Workout</Link>
                <div className="collpase navbar-collpase">

                    <ul className="navbar-nav mr-auto">

                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Workouts</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/create" className="nav-link btn btn-primary">Enter Workout</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">New profile</Link>
                        </li>

                    </ul>

                </div>
            </nav>

        );
    }
}

export default Navbar;