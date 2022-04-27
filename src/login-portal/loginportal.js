import React,{Component} from 'react';
import './loginportal.css'; 
/************************************************************ */
class LoginPortal extends Component {
    render(){
        return(  
            <div className="loginPortalHeaderBox">
                <h3 className="loginPortalHeader">LOGIN-PORTAL</h3>
            </div>
        );
    }
}
/********************************************************** */
export default LoginPortal;
/*********************************************************** */
/*
FOOT NOTES:
  need to implement forms, password masking , user profile svg , http post , encryption , db table , 
  linkedin developer console Oauth based, git hub developer console O

IMPORTANT: to look up the user profile from db use HASH MAP / HASH TABLE for O(1) lookup time 

LOGIC:
->after login is successful , display welcome message & if the user comes back for the 1+ith time 
  respond with "welcome back message", 
  upon login users, career portal details , comments on blogs & likes on posts & book marks for reading 
  later information should be retrieved and reflected on the website

->if new user is making an attempt to login for the first time , SIGN UP option should 
  be displayed instead 

STYLE:
  coherent with the rest of site , responsive so media query , flex box , center , 
  animation for loading , animation around login button 
*/
