<template>
   <div id="xyNavi">
          <input type="text" v-model="searchKey">  
          <ul>
            <!-- 此处从后台获取导航列表，方便权限控制
            <li>
              <router-link to="/"><button>home</button></router-link>
            </li>
            <li>
              <router-link to="/hello"><button>hello</button></router-link>
            </li>
            -->
             <li v-for="item in  navis(searchKey) ">
                  <router-link :to="item.url"><button>{{item.name}}</button></router-link>
             </li>
             <li>{{searchKey | upcase(searchKey) }}</li>
          </ul>
        </div>
</template>

<script>
export default {
  name: 'xyNavi',
  data () {
    return {
      items: [{"url":"/hello","name":"hello"},{"url":"/","name":"home"}],
      searchKey:""
    }
  },
  methods:{
    navis : function(key){
       console.log(key);
       var myitems = this.items;
       var result=[];
       if(key!=""){
         for(var i=0,len=myitems.length;i<len;i++){
          if(myitems[i].name == key){
            result.push(myitems[i]);
          }
         }
       }else{
         return myitems;
       }
       return result;
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

  input{
    height: 36px;
    width: 100%;
  }
</style>
