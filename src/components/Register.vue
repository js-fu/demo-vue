<template>
  <div class="register">
    <p>{{ msg }}</p>
    <p><router-link to="/login">login</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Register'
    }
  }
}
</script>
