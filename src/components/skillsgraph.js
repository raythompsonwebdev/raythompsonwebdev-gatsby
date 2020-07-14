import React from "react"
import PropTypes from "prop-types"

function SkillsGraph (props) {
  
  const { bars, responsiveGraph } = props;

  responsiveGraph() 
                    
    return (  
                    
          <ul id="bars">
            
            {bars.map(( bar ) => (

                <li key={bar.barId} >

                  <div className={bar.classnam} data-percentage={bar.percentage} ></div>

                  <span>{bar.code}</span>

                </li>

            ))}
           
          </ul>
       
    )
  
}

SkillsGraph.propTypes = {
  bars: PropTypes.any,
  responsiveGraph: PropTypes.func
};

export default SkillsGraph
