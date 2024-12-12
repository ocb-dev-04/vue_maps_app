import { defineComponent, onMounted, ref, watch } from "vue";
import mapboxgl from "mapbox-gl";

import { usePlacesStore, useMapStore } from "@/composables";

export default defineComponent({
    name: 'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>();
        
        const { location, isLocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async () => {
            if (!mapElement.value) throw new Error('DivElement not found');
            if (!location.value) throw new Error('Location not found');

            await Promise.resolve();

            const map = new mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: location.value,
                zoom: 16,
            });

            const locationPopup = new mapboxgl.Popup()
                .setLngLat(location.value)
                .setHTML(`
                    <h4>I'm here</h4>`);

            new mapboxgl.Marker()
                .setLngLat(location.value)
                .setPopup(locationPopup)
                .addTo(map);

            setMap(map);
        }

        watch(isLocationReady, (newValue) => {
            if (newValue) initMap();
        });

        return {
            isLocationReady,
            mapElement
        }
    }
})