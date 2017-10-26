<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <p><router-link to="/register">register</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: this.$t('hello')
    }
  }
}
</script>

<style scoped>

</style>
