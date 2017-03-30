<template>
  <div class="home">
    <xyTable url="/rest/table"></xyTable>
  </div>
</template>

<script>
import XyTable  from './Table'


export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to my home App'
    }
  },
 components: {
      XyTable
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
