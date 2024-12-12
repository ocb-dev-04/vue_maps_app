import { ActionTree } from 'vuex';

import { MapState } from './state';
import { RootState } from '../index';
import { directionsApi } from '@/apis';
import { DirectionsResponse } from '@/interfaces/directions';
import { mapsMutationNames } from './mutations';

export type LngLat = [number, number];

export const mapActionNames = {
    getRouteBetweenPoints: 'getRouteBetweenPoints'
}

const actions: ActionTree<MapState, RootState> = {
    async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat, end: LngLat }) {
        const response = await directionsApi.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`);
        
        if(response.data.routes.length === 0) 
            return alert(`Can't handle long trip's`);

        commit(mapsMutationNames.setDistanceDuration,
            {
                distance: response.data.routes[0].distance,
                duration: response.data.routes[0].duration
            });
        commit(mapsMutationNames.setRoutePolyline, response.data.routes[0].geometry.coordinates);
    }
}

export default actions;