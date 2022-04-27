import React , {Component} from 'react';
import './careerportal.css' ;
/*********************************************** */
class CareerPortal extends Component{
    render(){
        return(
            <div className="headerCareerPortalBox">
                <h3 className="headerCareerPortal">CAREER-PORTAL</h3>
            </div>
        );
    }
}
/************************************************* */
export default CareerPortal;
/************************************************** */
/**
 * FOOTNOTE: 
 * implement forms , validation , http , img file upload from device, pdf resume file upload from device , 
 * display vacancies in form of huge rectangular tiles , portraying some sample info , 
 * once the tile is clicked full description of requirements should be displayed 
 * 
 * -> apply button at the bottom 
 * 
 * -> verify phone number by sending otp , verify email by sending verification link 
 * 
 * -> D.O.B-> display calendar in the drop down -> crucial 
 * 
 * user MUST login to access the career portal 
 */