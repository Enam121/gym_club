import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import { Container } from 'react-bootstrap';
import './MapDirection.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZW5hbTk5IiwiYSI6ImNrenUwOWtncTAzejkyb3BsN252eGZuN28ifQ.64kIjLCX7VRSbh2w4hO9Cw';

const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [91.389687, 22.991859],
            zoom: 12
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <Container>

            <div className="overflow-hidden my-5 map">
                <div id="map"></div>
            </div>
        </Container>
    );
};

export default MapDirection;