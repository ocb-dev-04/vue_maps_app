import { MutationTree } from 'vuex';
import { MapState } from './state';
import { Feature } from '@/interfaces/places';
import mapboxgl from 'mapbox-gl';

export const mapsMutationNames = {
    setMap: 'setMap',
    setPlaceMarkets: 'setPlaceMarkets',
    setRoutePolyline: 'setRoutePolyline',
    setDistanceDuration: 'setDistanceDuration',
};

const mutation: MutationTree<MapState> = {
    setMap(state, map: mapboxgl.Map) {
        state.map = map;
    },
    setPlaceMarkets(state, places: Feature[]) {
        if (!state.map) return;

        state.markers.forEach(marker => marker.remove());
        state.markers = [];

        for (const place of places) {
            const [lng, lat] = place.geometry.coordinates;
            const location: [number, number] = [lng, lat];

            const popup = new mapboxgl.Popup()
                .setLngLat(location)
                .setHTML(`<p>${place.text}</p>`);

            const newMarker = new mapboxgl.Marker()
                .setLngLat(location)
                .setPopup(popup)
                .addTo(state.map!);

            state.markers.push(newMarker);
        }

        // Clear polyline
        const routeName = 'RouteString';
        if(state.map?.getLayer(routeName)){
            state.map?.removeLayer(routeName);
            state.map?.removeSource(routeName);
            state.distance = undefined;
            state.duration = undefined;
        }
    },
    setRoutePolyline(state, coords: number[][]) {
        const start = coords[0];
        const end = coords[coords.length - 1];

        const bounds = new mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [end[0], end[1]]
        );

        for (const coord of coords) {
            const newCoord: [number, number] = [coord[0], coord[1]];
            bounds.extend(newCoord);
        }

        state.map?.fitBounds(bounds, { padding: 200 });

        const sourceData: mapboxgl.SourceSpecification = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords
                        }
                    }
                ]
            }
        };

        const routeName = 'RouteString';
        if(state.map?.getLayer(routeName)){
            state.map?.removeLayer(routeName);
            state.map?.removeSource(routeName);
        }

        state.map?.addSource(routeName, sourceData);
        state.map?.addLayer({
            id: routeName,
            type: 'line',
            source: routeName,
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                'line-color': 'black',
                'line-width': 3
            }
        });
    },
    setDistanceDuration(state, {distance, duration}: {distance: number, duration: number}) {
        let kms = distance / 1000;
        kms = Math.round(kms * 100);
        kms /= 100;

        state.distance = kms;
        state.duration = Math.floor(duration/ 60);
    },
}

export default mutation;