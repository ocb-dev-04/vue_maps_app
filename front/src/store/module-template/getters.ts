import { GetterTree } from 'vuex';

import { ExampleState } from './state';
import { RootState } from '../index';

const getters: GetterTree<ExampleState, RootState> = {
    someGetter( /* state */ ) {
        // return true;
    }
}

export default getters;