import { GetterTree } from 'vuex';

import { RootState } from '../index';
import { PlacesState } from './state';

export const placesGettersNames = {
    isLocationReady: 'isLocationReady',
}

const getters: GetterTree<PlacesState, RootState> = {
    isLocationReady(state): boolean {
        return !!state.location;
    }
}

export default getters;