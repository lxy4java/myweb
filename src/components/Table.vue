<template>
  <div class="xyTable">
      <table>
            <tr>
            <th v-for="tt in title">{{tt}}</th><th>Delete</th><th>Edit</th>
            </tr>
            <tr v-for="dt in data">
               <td v-for="d in dt">{{d}}</td><td><button v-on:click="mydel(dt[0])" >{{dt[0]}} Delete</button></td>
               <td><button v-on:click="myedit(dt[0])" >{{dt[0]}} Edit</button></td>
            </tr>
      </table>
        <router-link to="/service/add" tag="button">Create</router-link>
  </div>
</template>

<script>


export default {
  name: 'xyTable',
  props: ['url'],
  data () {
    return {
     title:[],
     data:[]
    }
  },
  created: function () {
      this.initTabel();
      console.log(this.url)
 },
  methods: {
    initTabel:function(){
       this.$http.get(this.url)
            .then((response) => {
            var data =response.data;
            //console.log(data['data'])
            this.$set(this,'title', data['title']);
            this.$set(this,'data', data['data'])
          })
            .catch(function (error) {
             console.log(error);
          });
    },
    mydel:function(name){
       this.$http.get("/rest/delete?name="+name)
            .then((response) => {
            var data =response.data;
            //console.log(data['data'])
            this.$set(this,'data', data['data'])
          })
            .catch(function (error) {
             console.log(error);
          });

    },
    myedit:function(name){
      this.$router.push("/service/edit/"+name);
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width:100%
}
td {
  text-align: center
}
</style>
