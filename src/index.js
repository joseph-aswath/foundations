import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import './home-page/home.css';   //css is loaded properly
/******************************************* */
//NOTE: component names should start with upper case !! or else they don't render !!
class NavBar extends React.Component{ //nav bar items about|blogs|career|portal|login-signup 
    render(){
        return(
            <div className="horizontalNavBarBox">
                <ul className="horizontalNavBar">
                    <div className="navItems">
                        <li>ABOUT</li>
                        <li>BLOGS</li>
                        <li>CAREER</li>   
                        <li>PORTAL</li>
                        <li className="signIn">
                            |SIGN-IN|
                        </li>
                    </div>
                </ul>
            </div>
        );     
    }
}

/********************************************** */
ReactDOM.render(
    <NavBar />,
    //<Square />,
    document.getElementById('root')
);