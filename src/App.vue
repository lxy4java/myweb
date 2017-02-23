<template>
  <div id="app">
    <div  v-if="logined">
       <div id="xyheader">
        <xyHeader></xyHeader>
      </div>
      <div id="xybody">
       <xyNavi></xyNavi>
        <div id="xycontent">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div v-else>
      <xyLogin></xyLogin>
    </div>
  </div>
</template>


<script>
  import XyHeader from './components/Header'
  import XyLogin  from './components/Login'
  import XyNavi   from './components/Navi'
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    data() {
      return { 
        
        }
    },
    computed:
       /***每个属性对应属性名所代表的方法，当dispatch发生时会调用computed方法**/
      mapGetters({
          logined: "getLogined"
    }),
    components: {
      XyHeader,XyLogin,XyNavi
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  #xycontent {
    top: 47px;
    width: 83%;
    position: absolute;
    right: 2px;
    background-color: green;
    margin-top: 0px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  
  
  #xyheader {
    left: 0px;
    margin: auto;
    position: fixed;
    top: 0;
    width: 100%;
    height: 47px;
    background: gold;
    z-index: 999;
  }
</style>