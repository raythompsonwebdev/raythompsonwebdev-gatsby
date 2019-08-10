//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import $ from 'jquery';

const SkillsGraph = () => {

$(document).ready(function(){
    //Hero Slider
    $(" #chart #bars li .bar").each( function( key, bar ) {
           
        var percentage = $(this).data('percentage');
    
        $(this).animate({
            'width' : percentage + '%'
        }, 1000);

    });
});   
     
  
    return (
  
        <section id="prof_cont">

            <h1>Skill Level</h1>

            <article id="chart">
                
                <ul id="bars">

                    <li>
                        <div className="bar" data-percentage="85"></div>
                        <span>HTML5</span>
                    </li>

                    <li>
                        <div className="bar" data-percentage="85"></div>
                        <span>CSS3</span>
                    </li>

                    <li>
                        <div className="bar" data-percentage="70"></div>
                        <span>Javascript</span>
                    </li>

                    <li>
                        <div className="bar" data-percentage="65"></div>
                        <span>PHP</span>
                    </li>

                    <li>
                        <div className="bar" data-percentage="70"></div>
                        <span>SQL</span>
                    </li>


                </ul>

            </article>

        </section>
  
    )
}


export default SkillsGraph
