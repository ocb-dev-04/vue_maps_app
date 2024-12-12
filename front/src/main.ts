import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import i18n from './i18n'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoib2NiLTA0IiwiYSI6ImNtMTF5ZjdwcTB3a3Uya29yOWF5a2dxMTEifQ.Ozt5Iu7--LxcTeeyiIdnwQ';

if(!navigator.geolocation)
    throw new Error('Geolocation is required');

createApp(App)
    .use(i18n)
    .use(store)
    .use(router)
    .mount('#app')
