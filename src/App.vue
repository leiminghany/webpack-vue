<template>
  <div>
    <h1> {{message}} </h1>
    <img src="./img/logo.jpg" />
    <input type="text" v-model="message" placeholder='我是谁?' />
  </div>
</template>

<script>
import { getData } from './util.js';

export default {
  name: 'app',
  data() {
    return {
      message: 'hello 我是皮特'
    }
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
}

</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}
</style>
