import { defineComponent, ref, watch } from "vue";

import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { LngLat } from "@/store/map/actions";

export default defineComponent({
    name: 'SearchResult',
    setup() {
        const { places, isLoadingPlaces, location } = usePlacesStore();
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();
        const activePlaceId = ref('');

        watch(places, (newPlaces: Feature[]) => {
            activePlaceId.value = '';
            setPlaceMarkers(newPlaces);
        });

        return {
            places,
            isLoadingPlaces,
            activePlaceId,
            onPlaceClicked: (place: Feature) => {
                activePlaceId.value = place.id;
                const [lng, lat] = place.geometry.coordinates;

                map.value?.flyTo({
                    zoom: 16,
                    center: [lng, lat]
                });
            },
            getRouteDirections: (place: Feature) => {
                const [lng, lat] = place.geometry.coordinates;
                if(!location.value) return;

                const start: LngLat = location.value!;
                const end: LngLat = [lng, lat];
                
                getRouteBetweenPoints(start, end);
            }
        }
    }
})