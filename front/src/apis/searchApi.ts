import axios from "axios";

const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places';
const mapboxToken = 'PASTE_TOKEN_HERE';


const searchApi = axios.create({
    baseURL,
    params: {
        limit: 5,
        language: 'en',
        access_token: mapboxToken
    }
});

export default searchApi;