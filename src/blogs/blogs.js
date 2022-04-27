import React , {Component} from 'react';
import './blogs.css';
/*********************************** */
class Blogs extends Component{
    render(){
        return(
            <div className="blogHeaderBox">
                <h3 className="blogHeader">BLOGS-SECTION</h3>
            </div>
        );
    }
}
/*********************************** */
export default Blogs;
/**************************************** */
/**
 * FOOT NOTES:
 * need to implement scroll bar, multiple components , like button , comments section , search box 
 * nested folders may be needed to implement multiple components  , bookmarks for reading 
 * later 
 * 
 * -> structurally the site is similar to mdn docs or w3schools.com etc 
 * 
 * STYLE:
 * coherent with the rest of the site especially home-page
 */