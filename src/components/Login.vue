<template>
  <div class="xyLogin">
      <div id="div_login">
        <h2>{{msg}}</h2>
        <div>
             <input placeholder="用户名" v-model="usr">
        </div>
        <div>
             <input placeholder="密码" type="password" v-model="pwd">
        </div>
        <div>
            <button v-on:click="login">登录</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'xyLogin',
  data () {
    return {
      usr:"",
      pwd:"",  
      msg: '欢迎光临'
    }
  },
  methods: {
    login:function(){
        if(this.usr=='lxy'&&this.pwd=='123456'){
            this.$store.dispatch('logined', true);
        }else{
            this.$store.dispatch('logined', false);
        }    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
}
.xyLogin {
    top: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("../assets/xcy.jpg")
}
#div_login {
    width: 400px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    border: 2px;
    background: snow;
}
#div_login  input {
    width: 200px;
    height: 25px;
}
#div_login  label {
    width: 50px;
    text-align: center;
}
#div_login button {
    width: 210px;
    height: 30px;
    background-color: green; 
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
#div_login div {
    margin-top: 10px; 
} 
</style>
