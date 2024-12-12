<script lang="ts" src="./SearchBar.ts" />

<template>
  <div class="searchbar-container">
    <input 
      class="form-control" 
      type="text" 
      placeholder="Search..."
      v-model="searchTerm" />
    <SearchResult />
  </div>
</template>

<style scoped>
.searchbar-container {
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: white;
  z-index: 999;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  width: 30vw;
  border-radius: 5px !important;
  overflow: hidden;
  padding: 5px;
}

@media (max-width: 768px) {
  .searchbar-container {
    width: calc(100% - 20px); /* Para restar los 10px de margen de cada lado */
    left: 10px;
    right: 10px;
    top: 10px;
  }
}
</style>
