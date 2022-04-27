import React,{Component} from 'react';
/**************************************************************** */
class About extends Component{
    render(){
        return(
            <div className="aboutHeaderBox">
                <h3 className="aboutHeader">
                    this section contains the documentation of the site
                </h3>

                <div class="aboutPageParagraph">
                    <p> 
                        this section of the site provides exhaustive information about the engineering 
                        behind this site !! , 
                    </p>
                </div>
            </div>
        );
    }
}

/******************************************************************* */
export default About;