import axios from "axios";

const baseURL = 'https://api.mapbox.com/directions/v5/mapbox/driving';
const mapboxToken = 'PASTE_TOKEN_HERE';


const directionsApi = axios.create({
    baseURL,
    params: {
        alternatives: false,
        language: 'en',
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: mapboxToken
    }
});

export default directionsApi;