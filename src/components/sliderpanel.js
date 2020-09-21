import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaStar } from "react-icons/fa";


const SliderPanel = props => {
  const { panel } = props

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
            <li><span><FaStar className="fa fa-star" /></span>{panel.task1}</li>
            <li><FaStar className="fa fa-star" />{panel.task2}</li>
            <li><FaStar className="fa fa-star" />{panel.task3}</li>
            <li><FaStar className="fa fa-star" />{panel.task4}</li>
            <li><FaStar className="fa fa-star" />{panel.task5}</li>
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
