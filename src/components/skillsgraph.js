import React, {useEffect} from "react"
import PropTypes from "prop-types"


const responsiveGraph = () => {
  var chartBar = document.querySelectorAll(".bar")

  chartBar.forEach(function(key) {
    var percentage = 0

    var percentageMaxWidth = key.dataset.percentage

    var id = setInterval(frame, 1000)

    function frame() {
      if (percentage === percentageMaxWidth) {
        clearInterval(id)
      } else {
        percentage++

        //key.style.width = `${percentageMaxWidth}%`;
        key.style.width = "".concat(percentageMaxWidth, "%")
      }
    }
  })
}
function SkillsGraph(props) {

  console.log(props)

  const {bars} = props
  
  useEffect(() => {    // Update the document title using the browser API
    responsiveGraph()  
  });

  return (
    <ul id="bars">
      {bars.map(bar => (
        <li key={bar.barId}>
          <div className={bar.classnam} data-percentage={bar.percentage}></div>

          <span>{bar.code}</span>
        </li>
      ))}
    </ul>
  )
}

SkillsGraph.propTypes = {
  bars: PropTypes.array,
  responsiveGraph: PropTypes.func,
}

export default SkillsGraph
