import { Feature } from "@/interfaces/places";
import { modulesPath } from "@/store";
import { LngLat, mapActionNames } from "@/store/map/actions";
import { mapsGetterNames } from "@/store/map/getters";
import { mapsMutationNames } from "@/store/map/mutations";
import { computed } from "vue";
import { useStore } from "vuex"

export const useMapStore = () => {
    const store = useStore();

    return {
        //  state
        map: computed<mapboxgl.Map>(() => store.state.mapModule.map),
        distance: computed<number|undefined>(() => store.state.mapModule.distance),
        duration: computed<number|undefined>(() => store.state.mapModule.duration),

        // getters
        isMapReady: computed<boolean>(() => store.getters[modulesPath.maps(mapsGetterNames.isMapReady)]),

        // mutations
        setMap: (map: mapboxgl.Map) => store.commit(modulesPath.maps(mapsMutationNames.setMap), map),
        setPlaceMarkers: (places: Feature[]) => store.commit(modulesPath.maps(mapsMutationNames.setPlaceMarkets), places),
        
        // actions
        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch(modulesPath.maps(mapActionNames.getRouteBetweenPoints), {start, end}),
    }
}