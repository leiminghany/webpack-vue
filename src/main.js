import say from './util.js';
import Vue from 'vue';

say();
var app = new Vue({
  el: '#app',
  data: {
    message: 'hello Vue!'
  }
})
