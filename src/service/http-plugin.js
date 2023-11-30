// http-plugin.js
import api  from './api.js'; // Adjust the path based on your project structure
import { provide } from 'vue';

export default {
  install(app) {
    provide('api', api);
  },
};
