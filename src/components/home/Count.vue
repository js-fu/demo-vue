<template>
  <div class="count">
    <div>
      {{ $store.state.count }}
    </div>
    <button @click="increase">increase</button>
    <button @click="$store.commit('decrease')">decrease</button>
    <button @click="$store.commit('setCount', 1)">setCount</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  created () {
    console.log('store', this.$store)
  },
  methods: {
    increase () {
      this.$store.commit('increment')
    }
  }
}
</script>
