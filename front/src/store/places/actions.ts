import { ActionTree } from 'vuex';

import { RootState } from '../index';
import { PlacesState } from './state';
import { placesMutionNames } from './mutations';
import { searchApi } from '@/apis';
import { PlacesResponse } from '@/interfaces/places';

export const placesActionNames = {
    getInitialLocation: 'getInitialLocation',
    searchPlacesByTerm: 'searchPlacesByTerm'
};

const actions: ActionTree<PlacesState, RootState> = {
    getInitialLocation({ commit }) {
        navigator.geolocation.getCurrentPosition(
            ({ coords }): void => commit(
                placesMutionNames.setLngLat,
                { lng: coords.longitude, lat: coords.latitude }),
            (err): void => {
                console.error(err);
                throw new Error(`No Geolocation: (${err})`);
            }
        )
    },
    async searchPlacesByTerm({ commit, state }, query: string) {
        if (!state.location) return;

        if (query.length === 0) {
            commit(placesMutionNames.setPlaces, []);
            return [];
        }

        const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.location?.join(',')
            }
        });

        commit(placesMutionNames.setPlaces, response.data.features);
    }
}

export default actions;