//all the routes are declared in this file 
import { render } from '@testing-library/react';
import React,{Component} from 'react';
import { BrowserRouter as Router,Switch,Link,Route } from 'react-router-dom';
/************************************************************* */

function RoutingList() {  //in function component there is no need for render(){} remember this !!
        return(
            <div></div>
           /*
           <div className="routingLists">
                <Router>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/about" component={About}/>
                   <Route exact path="/blogs" component={Blogs}/>
                </Router>
            </div>
            */
        );
}
/******************************************************************* */
export default RoutingList;