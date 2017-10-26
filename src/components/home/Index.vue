<template>
  <div class="home">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <NavMenu/>
        </div>
      </el-col>
    </el-row>
    <router-link to="/home/intro">intro</router-link>
    <router-link to="/home/count">count</router-link>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'

export default {
  components: {
    NavMenu
  },
  data () {
    return {
    }
  },
  created () {
    // console.log('created this.$route', this.$route)
  }
}
</script>

