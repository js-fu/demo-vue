<template>
  <div class="login">
    <p>{{ msg }}</p>
    <p><router-link to="/home">home</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login'
    }
  },
  created () {
    console.log('created', this)
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>