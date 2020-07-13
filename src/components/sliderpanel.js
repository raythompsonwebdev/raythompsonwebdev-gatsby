import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const SliderPanel = (props) => {  
  
  const {panel} = props
      
  return (

    <article          
      className="slidesPanel"
      key={panel.panelId}
      id={`panel-${panel.panelId}`}
    >
      <h2>{panel.title}</h2>

      <figure className="slider-panel">
        
        <Link to="/projects" className="fancybox">
          <span></span>
        </Link>

        <figcaption>
          <h3>{panel.header}</h3>
          <h4>{panel.subheader}</h4>

          <ul>
            <li>{panel.task1}</li>
            <li>{panel.task2}</li>
            <li>{panel.task3}</li>
            <li>{panel.task4}</li>
            <li>{panel.task5}</li>
          </ul>

          <div className="clearfix"></div>
        </figcaption>
      </figure>
    </article>
        
  )
}

SliderPanel.propTypes = {
  panel: PropTypes.object.isRequired,
}

export default SliderPanel
