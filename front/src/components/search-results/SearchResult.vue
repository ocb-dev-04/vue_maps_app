<script lang="ts" src="./SearchResult.ts"></script>

<template>
  <div 
    v-if="isLoadingPlaces" 
    class="alert alert-primary text-center">
      <h5>Loading...</h5>
  </div>

  <ul v-else-if="places.length > 0" class="list-group mt-3">
    <li 
      v-for="place in places"
      @click="onPlaceClicked(place)"
      :key="place.id"
      :class="{'active': place.id === activePlaceId}"
      class="list-group-item list-group-item-action"
      >
        <h6>{{place.text}}</h6>
        <p>{{place.place_name}}</p>
        <div align="right">
          <button 
            class="btn btn-outline-primary btn-sm"
            :class="(place.id === activePlaceId) ? 'btn-outline-light' : 'btn-outline-primary'"
            @click.self="getRouteDirections(place)"
            >How to get there?</button>
        </div>
    </li>
  </ul>
</template>

<style scoped>
li {
  cursor: pointer;
}

h6 {
  font-size: 15px;
}

p {
  font-size: 10px;
}

.list-group {
  overflow: scroll;
  height: auto;
  max-height: 60vh;
}
</style>
