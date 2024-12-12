import { Module } from 'vuex';

import { RootState } from '../index';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { PlacesState } from './state';

const placesModule: Module<PlacesState, RootState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default placesModule;