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
      usr:{}
    }
  },
  methods: {
    xyback:function(){

        console.log("back");
        this.$router.go(-1)
    },
    xysubmit:function(){
        console.log("submit");
        console.log(this.usr);
        this.$http.post('/rest/add',this.usr)
          .then(function (response) {
             console.log(response);
          })
          .catch(function (response) {
            console.log(response);
          });
        this.$router.push("/");
    }   
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
