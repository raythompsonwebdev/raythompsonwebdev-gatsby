
const initMap = () => {

    let uluru = {lat: 51.55583507664607, lng: -0.06814956665039062};

    let map = new google.maps.Map(document.getElementById('map_container'), {
        zoom: 12,
        center: uluru
    });

     // Listen for click on map
     google.maps.event.addListener(map, 'click', function (event) {

        // Add marker
        addMarker({
            coords: event.latLng
        });

    });

    /*
    // Add marker
    let marker = new google.maps.Marker({
      position:{lat:42.3601,lng:-71.0589},
      map:map,
      icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    let infoWindow = new google.maps.InfoWindow({
      content:'<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
    */


    let marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
  
    // Array of markers
    let markers = [
        {
            coords: {
                lat: 42.4668,
                lng: -70.9495
            },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1>Lynn MA</h1>'
            },
        {
            coords: {
                lat: 42.8584,
                lng: -70.9300
            },
            content: '<h1>Amesbury MA</h1>'
            },
        {
            coords: {
                lat: 42.7762,
                lng: -71.0773
            }
            }
          ];

    // Loop through markers
    for (let i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    // Add Marker Function
    const addMarker= function(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage
        });

        // Check for customicon
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content
        if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
    
}

export {initMap}



