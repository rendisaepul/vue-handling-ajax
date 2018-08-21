<template>
  <div id="ajax">
    <header>
      <span>Handling Ajax Request with Axiosin Vue</span>
    </header>
    <main>
      <h2>Click the button to get Data</h2>
      <button id="btn" v-on:click="getData">Get Data</button>
      <div v-if="loading">
        Loading......
      </div>
      <div class="wrapper">
        <div class="row">
          <div v-for="data in datas" :key="data.id">
            <li>
              {{ data.name }}
            </li>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Ajax',
  data () {
    return {
      datas: [],
      loading: false
    }
  },
  methods: {
    getData: function () {
      this.loading = true
      axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then((response) => {
          this.loading = false
          this.datas = response.data
          console.log('response json, ', response.data)
        }, (error) => {
          this.loading = false
          console.log('error caught>>>', error)
        })
    }
  }
}
</script>

<style>
#ajax {
  /* text-align: left; */
}
</style>
