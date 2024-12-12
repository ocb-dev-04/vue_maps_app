import { createStore } from 'vuex';

import { MapState } from './map/state';
import { PlacesState } from './places/state';

import mapsModule from './map';
import placesModule from './places';

export interface RootState {
  placeModule: PlacesState,
  mapModule: MapState
}

export const modulesPath = {
  places: (path: string): string => `placeModule/${path}`,
  maps: (path: string): string => `mapModule/${path}`,
}

export default createStore<RootState>({
  modules: {
    placeModule: placesModule,
    mapModule: mapsModule
  }
});