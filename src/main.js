import {say} from './util.js';
import Vue from 'vue';
import App from './App.vue';
import './style/common.scss';

say();

new Vue({
  el: '#app',
	template: '<App/>',
  components: { App }
})
