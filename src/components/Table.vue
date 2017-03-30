<template>
  <div class="xyTable">
      <table>
            <tr>
            <th v-for="tt in title">{{tt}}</th>
            </tr>
            <tr v-for="dt in data">
               <td v-for="d in dt">{{d}}</td>
            </tr>
      </table>
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
            console.log(data['title'])
            this.$set(this,'title', data['title']);
            this.$set(this,'data', data['data'])
          })
            .catch(function (error) {
             console.log(error);
          });
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
