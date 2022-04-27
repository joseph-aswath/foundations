import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import './home.css';   //css is loaded properly
import art from './vortex.webp';
import { BrowserRouter as Router,Switch,Link } from 'react-router-dom';
import RoutingList from '../routes.js';
/*************************************************************************************** */
//NOTE: component names should start with upper case !! or else they don't render !!
class Home extends React.Component{ //nav bar items about|blogs|career|portal|login-signup 
    render(){
        return(
            <div className="HomeParent">
                <div className="horizontalNavBarBox">
                    <ul className="horizontalNavBar">
                        <div className="navItems">
                            <li>HOME</li>
                            <li> <button>ABOUT</button> </li>
                            <li> <button>BLOGS</button> </li>
                            <li> <button>CAREER</button> </li>   
                            <li> <button>PORTAL</button> </li>
                            <li className="signIn">
                                <button>
                                    SIGN-IN
                                </button>
                            </li>
                        </div>
                    </ul>
                </div>

                <div className="art">
                    <img src={art} alt="art for website"></img>
                </div>

            </div>
        );     
    }
}
/********************************************************************************************* */

export default Home