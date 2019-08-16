import React from "react"
import $ from 'jquery';

const mapGoogle = () => {

    
    function initMap() {
        var uluru = {lat: 51.55583507664607, lng: -0.06814956665039062};
        var map = new google.maps.Map(document.getElementById('map_container'), {
            zoom: 12,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    } 
             
  
    return (
        
        <div id="map_container"></div>
        
    )
}


export default mapGoogle