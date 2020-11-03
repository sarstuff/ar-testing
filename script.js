window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Foot Team 1',
            location: {
                lat: 51.226055,
                lng: 0.89673259,
            }
        },
        {
            name: 'Foot Team 2',
            location: {
                lat: 51.229913,
                lng: 0.90344310,
            }
        }
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        let name = place.name;

        let model = document.createElement('a-text');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('material', 'color: yellow');
        // model.setAttribute('rotation', '0 180 0');
        model.setAttribute('value', `${name}`);
        model.setAttribute('scale', '50 50 50');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}