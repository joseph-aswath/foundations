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
/******************************************************************* */
/**
 * FOOT NOTE: 
 * include animations , svg art custom made from inkscape from hq , responsive ness , 
 * logo for tech stack , ERD for DB , flowcharts for logic (r1 practise) 
 * display source code from github just like in positronix site by digamber 
 * mention project structure in the very initial stages etc 
 * include your photo , contact information
 * -> come to this section at last , it is not that important , this whole section is static 
 */