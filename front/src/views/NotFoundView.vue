<template>
    <div
      class="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4"
    >
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        {{ $t('notFound.title') }}
      </h1>
      <p class="text-lg text-gray-600 mb-6">{{ $t('notFound.message') }}</p>
      <router-link
        :to="isAuthenticated ? '/app' : '/login'"
        class="text-blue-500 hover:text-blue-700 text-lg font-medium"
      >
        {{ $t('notFound.linkText') }}
      </router-link>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'NotFoundView',
    computed: {
      isAuthenticated() {
        return localStorage.getItem('token') || sessionStorage.getItem('token');
      },
    },
  };
  </script>