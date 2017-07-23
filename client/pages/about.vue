<template>
  <div style="padding-bottom: 1000px;">
    <h1>About Page</h1>
    <p>Hello, I am the about page :)</p>
    <v-waypoint @waypoint-in="inHandler" @waypoint-out="outHandler"></v-waypoint>
    <p style="margin-top: 100px;">{{text}}</p>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        text: 'not-trigger-yet'
      }
    },
    methods: {
      inHandler () {
        this.text = 'going in'
        console.log('going in')
      },
      outHandler () {
        this.text = 'going out'
        console.log('going out')
      }
    }
  }
</script>

