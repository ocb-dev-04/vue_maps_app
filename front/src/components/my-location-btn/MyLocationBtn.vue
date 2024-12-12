<template>
  <button v-show="isLocationReady"
    class="btn btn-primary"
    @click="onMyLocationClicked">Go to my location</button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from "@/composables";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "MyLocationBtn",
  setup() {
    const { location, isLocationReady } = usePlacesStore();
    const { map, isMapReady } = useMapStore();

    return {
      isLocationReady: computed((): boolean => isLocationReady.value && isMapReady.value),
      onMyLocationClicked: (): void => {
        if(!isLocationReady) return;

        map.value?.flyTo({
          center: location.value,
          zoom: 14,
        });
      }
    };
  },
});
</script>

<style scoped>
button {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>
