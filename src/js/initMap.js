const initMap = () => {
  var uluru = { lat: 51.55583507664607, lng: -0.06814956665039062 }

  var map = new google.maps.Map(document.getElementById("map_container"), {
    zoom: 12,
    center: uluru,
  })
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  })
}

export { initMap }

/*

<script async defer
	src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap">
	</script>


*/
