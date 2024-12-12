<template>
  <MapView />
  <TripDetails />
  <MyLocationBtn />
  <SearchBar />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables/usePlacesStore';

import MapView from '@/components/mapview/MapView.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';

export default defineComponent({
  name: 'BrowserView',
  components: {
    MapView,
    MyLocationBtn,
    SearchBar,
    TripDetails
  },
  setup() {
    usePlacesStore();
  }
});
</script>
