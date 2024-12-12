import { Module } from 'vuex';

import { RootState } from '../index';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state, { ExampleState } from './state';

const exampleModule: Module<ExampleState, RootState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default exampleModule;