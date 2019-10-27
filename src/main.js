import {say, getData} from './util.js';
import Vue from 'vue';
import './style/common.scss';

say();

Vue.component('my-component',{
  template: '<img :src="url" />',
  data() {
    return {
      url: require('./img/logo.jpg')
    }
  }
})
var app = new Vue({
  el: '#app',
  data: {
    message: 'hello Vue!'
  },
  methods: {
    async fetchData(){
      const data = await getData();
      this.message = data;
    },
    /* fetchData() {
      let self = this;
      getData().then( function(data){
        self.message = data;
      })
    } */
  },
  created() {
    this.fetchData();
  }
})
