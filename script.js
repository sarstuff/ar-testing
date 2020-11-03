window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Foot Team 1',
            color: 'green',
            location: {
                lat: 51.226055,
                lng: 0.89673259,
            }
        },
        {
            name: 'Foot Team 2',
            color: 'blue',
            location: {
                lat: 51.229913,
                lng: 0.90344310,
            }
        },
        {
            name: 'Dog Team 2',
            color: 'purple',
            location: {
                lat: 51.230906,
                lng: 0.89944254,
            }
        }
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {


        let latitude = place.location.lat;
        let longitude = place.location.lng;
        let color = place.color;
        let name = place.name;

        let model = document.createElement('a-text');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        // let distanceMsg = model.getAttribute('distanceMsg');
        // console.log(distanceMsg);




        model.setAttribute('color', `${color}`);
        model.setAttribute('font', `roboto`);
        model.setAttribute('value', `${name} `);
        model.setAttribute('scale', '50 50 50');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });

}