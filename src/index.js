import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import './home-page/home.css';   //css is loaded properly
import art from './vortex.webp';
/******************************************* */
//NOTE: component names should start with upper case !! or else they don't render !!
class NavBar extends React.Component{ //nav bar items about|blogs|career|portal|login-signup 
    render(){
        return(
            <div className="HomeParent">
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

                <div className="art">
                    <img src={art} alt="art for website"></img>
                </div>

            </div>
        );     
    }
}

/*
class Art extends React.Component {
    render(){
        return(
               <div className="svgArt">
                   <img src="./assets/foundationsart.png"></img>
               </div> 
        );
    }
}
*/

/********************************************** */
ReactDOM.render(
    <NavBar />,
    //<Art/>,
    document.getElementById('root')
);