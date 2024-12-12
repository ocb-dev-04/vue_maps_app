<template>
  <div v-show="distance" class="trip-container col">
    <div class="col">
      Distance: <strong>{{ distance }} kms</strong>
    </div>
    <div class="col">
      Duration: <strong>{{ duration }} minutes</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { useMapStore } from "@/composables";
import { defineComponent } from "vue";


export default defineComponent({
  name: "TripDetails",
  setup() {
    const { distance, duration } = useMapStore();
    
    return {
      distance: distance !== undefined ? distance : 0,
      duration: duration !== undefined ? duration : 0
    };
  },
});
</script>

<style scoped>
.trip-container {
  background-color: white;
  border-radius: 10px;
  left: 10px;
  bottom: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  padding: 20px;
  width: 200px;
  position: fixed;
}
</style>
