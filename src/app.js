import { render } from '@testing-library/react';
import React ,{Component} from 'react';
//import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import './app.css';
//importing all the component files 
import Home from './home-page/home.js';
import About from './about/about.js';
import Blogs from './blogs/blogs.js';
import LoginPortal from './login-portal/loginportal.js';
import CareerPortal from './career-portal/careerportal';
/************************************************************************* */
function App() {   //penultimate parent component that will be rendered in index.js
        return(
             <div>
                <Home/>
             </div>   
        );
}
/************************************************************************ */
export default App;