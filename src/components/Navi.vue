<template>
  <div id="xyNavi">
    <ul>
      <!-- 此处从后台获取导航列表，方便权限控制
            <li>
              <router-link to="/"><button>home</button></router-link>
            </li>
            <li>
              <router-link to="/hello"><button>hello</button></router-link>
            </li>
        
      <li v-for="item in items">
        <router-link :to="item.url"><button>{{item.name}}</button></router-link>
      </li>
          -->

      <li v-for="item in items">
        <button v-for="(val,key) in item" v-on:click="hideshow($event)">{{key}}</button>
         <ul style="display:none;"  v-for="val in item" >
            <li  v-for="obj in val">
                  <router-link :to="obj.url"><button>{{obj.name}}</button></router-link>
            </li>
         </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'xyNavi',
    data() {
      return {
        items: [{
          'first': [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]
        }, {
          'second': [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]
        }, {
          'third': [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]
        }, {
          'fourth': []
        }]
      }
    },
    methods: {
        hideshow:function(event){
          /* 访问原生dom,vue不鼓励这么做,
          console.log(event.target.tagName);
          console.log(event.target);
          console.log(event.target.nextElementSibling); 
          */
          var styles= event.target.nextElementSibling.style.display;
          if(styles=='none'){
            event.target.nextElementSibling.style.display="inline";
          }else{
            event.target.nextElementSibling.style.display="none";
          }
        
        }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #xyNavi {
    top: 47px;
    position: fixed;
    left: 0px;
    padding-left: 0px;
    width: 17%;
  }
  
  #xyNavi li button {
    padding-left: 0px;
    height: 36px;
    width: 100%;
    background-color: blue;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  
  #xyNavi ul {
    padding-left: 0px;
    margin-top: 0px;
  }
  
  #xyNavi ul li {
    width: 100%;
    list-style: none;
  }
</style>