import React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby"


const SliderPanel = ({property}) => {

    const {id,bgimage, title, header, subheader, task1, task2, task3, task4, task5} = property;

    return (
           
              
      <article
                  style={
                    {'backgroundImage': `url(${bgimage})`,
                      'backgroundSize': 'cover',
                      'backgroundRepeat': 'no-repeat'
                  }
                  }
                  className="slidesPanel"
                  key={id}
                  id={`panel-${id}`}
                >
                  <h2>{title}</h2>
  
                  <figure className="slider-panel">
                    <Link to="" className="fancybox">
                      <span></span>
                    </Link>
  
                    <figcaption>
                      <h3>{header}</h3>
                      <h4>{subheader}</h4>
  
                      <ul>
                        <li>{task1}</li>
                        <li>{task2}</li>
                        <li>{task3}</li>
                        <li>{task4}</li>
                        <li>{task5}</li>
                      </ul>
  
                      <div className="clearfix"></div>
                    </figcaption>
                  </figure>
                
                </article>
              
          
        
    )
  
}

SliderPanel.propTypes = {
  property: PropTypes.object.isRequired
}

export default SliderPanel
