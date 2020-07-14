//Import necessary dependencies 

import React from "react"
import posed, { PoseGroup } from "react-pose"
import PropTypes from "prop-types"

const timeout = 0

class Transition extends React.PureComponent {

  render() {

    const { children, location } = this.props
    
    const RoutesContainer = posed.div({
      
      enter: {
        opacity: 1,
        x: 0,
        delay: timeout,
        delayChildren: timeout
      },
      exit: {
        opacity: 0,
        transition: `opacity ${timeout}ms ease-in-out`,
        x: 30
      }
    });

    return (
           
      <PoseGroup>
          <RoutesContainer key={location.pathname}>
              {children}
          </RoutesContainer>
       </PoseGroup>
       
    )
  }
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired
};

export default Transition