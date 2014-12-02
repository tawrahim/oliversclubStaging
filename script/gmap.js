// JavaScript Document
		jQuery(function($) {
			// Asynchronously Load the map API 
			var script = document.createElement('script');
			script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
			document.body.appendChild(script);
		});
		
		function initialize() {		
			var map;
			var bounds = new google.maps.LatLngBounds();
			var mapOptions = {
				mapTypeId: 'roadmap',
				scrollwheel: false
			};
							
			// Display a map on the page
			map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
			map.setTilt(45);
				
			// Multiple Markers
			var markers = [
				['Brookline, MA 02445', 42.330973,-71.1228218,'../images/h2.png'],
				['Dallas, TX 75254', 32.9415539,-96.808363, '../images/h2.png'],
			];				
								
			// Info Window Content
			var infoWindowContent = [
				['<div class="info_content">' +
				'<h3>Brookline</h3>' +
				'<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' +        '</div>'],
				['<div class="info_content">' +
				'<h3>Dallas, Texas</h3>' +
				'<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
				'</div>']
			];
				
			// Display multiple markers on a map
			var infoWindow = new google.maps.InfoWindow(), marker, i;
			
			// Loop through our array of markers & place each one on the map  
			for( i = 0; i < markers.length; i++ ) {
				var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
				bounds.extend(position);
				marker = new google.maps.Marker({
					position: position,
					map: map,
					title: markers[i][0]
				});
				
				// Allow each marker to have an info window    
				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					return function() {
						infoWindow.setContent(infoWindowContent[i][0]);
						infoWindow.open(map, marker);
					}
				})(marker, i));
		
				// Automatically center the map fitting all markers on the screen
				map.fitBounds(bounds);
			}
			// Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
			var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
				this.setZoom(2);
				google.maps.event.removeListener(boundsListener);
			});
			var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
			var marker = new google.maps.Marker({
			  position: myLatLng,
			  map: map,
			  icon: iconBase + 'schools_maps.png'
			});
			
			var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
			var icons = {
			  parking: {
				icon: iconBase + 'parking_lot_maps.png'
			  },
			  library: {
				icon: iconBase + 'library_maps.png'
			  },
			  info: {
				icon: iconBase + 'info-i_maps.png'
			  }
			};
			
			function addMarker(feature) {
			  var marker = new google.maps.Marker({
				position: feature.position,
				icon: icons[feature.type].icon,
				map: map
			  });
			}
			
			
		}
