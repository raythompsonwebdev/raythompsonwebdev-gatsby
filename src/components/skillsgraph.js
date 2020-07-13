import React from "react"

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

export default SkillsGraph
