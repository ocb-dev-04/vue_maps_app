import { Module } from 'vuex';

import { RootState } from '../index';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { MapState } from './state';

const mapsModule: Module<MapState, RootState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default mapsModule;
