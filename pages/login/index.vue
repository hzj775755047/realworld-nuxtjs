<template>
  <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{isLogin ? "Sign in": "Sign up"}}</h1>
        <p class="text-xs-center">
            <nuxt-link v-if="!isLogin" to="/login">Have an account?</nuxt-link>
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>

        </p>

        <ul class="error-messages">
          <template v-for="(messages,field) in errors">
            <li v-for="(message,index) in messages" :key="index">{{field}}{{message}}</li>
          </template>
        
        </ul>

        <form @submit.prevent="onSubmit">
          <fieldset class="form-group" v-if="!isLogin">
            <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name" required>
          </fieldset>
          <fieldset class="form-group">
            <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email" required>
          </fieldset>
          <fieldset class="form-group">
            <input  v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" required minlength="5">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{isLogin ? "Sign in": "Sign up"}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { login,register } from '@/api/user'
//  process.client  表示代码运行在客户端还是服务端  
// 仅在客户端加载
const  Cookie = process.client ? require('js-cookie') : undefined
export default {
    middleware:'notAuthenticated',
    name:'LoginIndex',
    computed:{
        isLogin(){
            return this.$route.name == 'login'
        }
    },
    data() {
      return {
        user:{
          username:'',
          email:'',
          password:''
        },
        errors: {
          // email:['b','a'],
          // password:['baa','abb'],
        }
      }
    },
    methods:{
      async onSubmit(){

        try {
          const { data } = this.isLogin
          ? await login({       
            user:this.user
          })
          : await register({
            user:this.user
          })
          // TODO 保存用户的登陆状态
          this.$store.commit('setUser',data.user)
          //持久化
          Cookie.set('user',data.user)
          this.$router.push('/')

        } catch (err) {
          this.errors=err.response.data.errors      
        }

      }
    }

}
</script>

<style>

</style>