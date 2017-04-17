<template>
  <div class="xyCreatedit">
     
     <label>name:</label> <input type='text'v-model="usr.name"/>
     <label>age:</label> <input type='text'v-model="usr.age"/>
     <label>gender:</label> <input type='text'v-model="usr.gender"/>

    <button v-on:click="xyback()">Back</button><button v-on:click="xysubmit()">submit</button>
  </div>
</template>

<script>


export default {
  name: 'xyCreatedit',
  data () {
    return {
      usr:{},
      createidt:"/rest/add"
    }
  },
  created: function (){
    var that=this;
    var name= this.$route.params.name;
    if(typeof(name)!='undefined'){
      that.$set(that,'createidt', "/rest/edit")
      this.xygetByName(name);
      console.log(name);
    }else{
      console.log("add");
    }
  },
  methods: {
    xyback:function(){

        console.log("back");
        this.$router.go(-1)
    },
    xysubmit:function(){
        this.$http.post(this.createidt,this.usr)
          .then(function (response) {
             console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
        this.$router.push("/");
    },
    xygetByName:function(name){
      var that= this;
        this.$http.post('/rest/getByName',{"name":name})
          .then(function (response) {
            var data =response.data;
           // console.log(data);
            that.$set(that,'usr', {"name":data[0],"age":data[1],"gender":data[2]})
          })
          .catch(function (response) {
            console.log(response);
          });
    }   
    },
    watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      //console.log(from);
      //console.log(this.$route.path);
      //console.log(this.$route.params);

    }
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
