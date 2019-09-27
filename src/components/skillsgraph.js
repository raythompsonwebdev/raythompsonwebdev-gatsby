import React from "react"

const SkillsGraph = (props) => {
  
    
    return (
          
          <ul id="bars">
            
            {props.bar.map(( bar ) => (

                <li key={bar.id} >

                  <div className={bar.classnam} data-percentage={bar.percentage} ></div>

                  <span>{bar.name}</span>

                </li>

            ))}
           
          </ul>
       
    )
  
}

export default SkillsGraph
