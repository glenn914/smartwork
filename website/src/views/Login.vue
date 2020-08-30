<template>
  <div>
    <el-card class="login-card">
      <div slot="header">
        <span>LOGIN</span>
      </div>
      <el-form @submit.native.prevent="login">
        <el-form-item label='USERNAME'>
          <el-input v-model='model.username'></el-input>
        </el-form-item>
        <el-form-item label='PASSWORD'>
          <el-input type='password' v-model='model.password'></el-input>
        </el-form-item>
        <el-button type='primary' native-type='submit'>LOGIN</el-button>
      </el-form>
      <!-- card body -->
    </el-card>
    
  </div>
</template>

<script lang='ts'>
import {Vue, Component} from "vue-property-decorator";

@Component({})
export default class Login extends Vue{
  data={}
  model={}
  async login(){
    const res = await this.$http.post('auth/login',this.model)
    // console.log(res.data)   //打印token 
    sessionStorage.token = res.data.token
    this.$router.push('/')
    this.$message.success('Login success')
  }
}
</script>

<style>
.login-card{
  width: 25rem;
  margin: 5rem auto;
}
</style>