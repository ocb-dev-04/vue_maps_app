import { GetterTree } from 'vuex';

import { MapState } from './state';
import { RootState } from '../index';

export const mapsGetterNames = {
    isMapReady: 'isMapReady'
};

const getters: GetterTree<MapState, RootState> = {
    isMapReady(state): boolean {
        return !!state.map;
    }
}

export default getters;