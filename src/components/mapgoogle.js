import React from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"
import PropTypes from "prop-types"

const mapStyles = {
  width: "100%",
  height: "100%",
}

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      ></Map>
    )
  }
}

MapContainer.propTypes = {
  google: PropTypes.any,
}

export default GoogleApiWrapper({
  apiKey: "",
})(MapContainer)
