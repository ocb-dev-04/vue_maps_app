<script lang="ts" src="./MapView.ts" />

<template>
  <div 
    v-if="!isLocationReady" 
    class="loading-map d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h3>Wait a minute</h3>
      <span>Loading location...</span>
    </div>
  </div>

  <div 
    v-show="isLocationReady" 
    class="map-container"
    ref="mapElement"></div>
</template>

<style scoped>
.loading-map {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 9999;
}

.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
</style>
