import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import { RootState, modulesPath } from "@/store";
import { placesActionNames } from "@/store/places/actions";
import { placesGettersNames } from "@/store/places/getters";
import { Feature } from "@/interfaces/places";

export const usePlacesStore = () => {
    const store = useStore<RootState>();

    onMounted(() => {
        if(!store.getters[modulesPath.places(placesGettersNames.isLocationReady)])
            store.dispatch(modulesPath.places(placesActionNames.getInitialLocation));
    })

    return {
        // state
        isLoading: computed<boolean>(() => store.state.placeModule.isLoading),
        location: computed<[number, number] | undefined>(() => store.state.placeModule.location),
        places: computed<Feature[]>(() => store.state.placeModule.places),
        isLoadingPlaces: computed<boolean>(() => store.state.placeModule.isLoading),
        
        // getters
        isLocationReady: computed<boolean>(() => store.getters[modulesPath.places(placesGettersNames.isLocationReady)]),
        
        // actions
        searchPlacesByTerm: (query = '') => store.dispatch(modulesPath.places(placesActionNames.searchPlacesByTerm), query),

        // mutations
    }
}
