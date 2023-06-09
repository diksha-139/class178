var latitude=9.961125781984036, longitude=76.31917074707142;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 20
});   

map.addControl(
	new mapboxgl.GeolocateControl(
		{
		positionOptions: {
			enableHighAccuracy: true
		},
		

		trackUserLocation: true
	}
	)
);

map.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	'bottom-left'
);

   