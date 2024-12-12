import { MutationTree } from 'vuex';
import { PlacesState } from './state';
import { Feature } from '@/interfaces/places';

export const placesMutionNames = {
    setLngLat: 'setLngLat',
    setIsLoadingPlaces: 'setIsLoadingPlaces',
    setPlaces: 'setPlaces'
};

const mutation: MutationTree<PlacesState> = {
    setLngLat(state: PlacesState, {lng, lat}: {lng: number, lat: number}): void {
        // console.log(`Longitude: ${lng} - Latitude: ${lat}`);
        state.location = [lng, lat];
        state.isLoading = false;
    },
    setIsLoadingPlaces(state) {
        state.isLoadingPlaces = true;
    },
    setPlaces(state: PlacesState, places: Feature[]): void {
        state.places = places;
        state.isLoadingPlaces = false;
    }
}

export default mutation;