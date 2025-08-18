<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="login-title">登录</h2>
      <el-form :model="loginForm" ref="loginFormRef" label-width="100px">
        <el-form-item label="用户名" prop="username" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
          <el-input v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <el-input v-model="loginForm.password" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  setup() {
    const loginForm = ref({
      username: '',
      password: ''
    });

    const store = useCounterStore()

    const loginFormRef = ref();
    const router = useRouter();

    const submitLogin = () => {
         const { username, password } = loginForm.value

         if(username&&password){
          if(username === 'admin'){
            store.changeShow(true)
           }else{
             store.changeShow(false)
          }
          // 登录成功，重定向到 BarChart 组件
          setTimeout(() => {
             router.push({name: 'BarChart'})
          }, 1000)
        }
    };

    return {
      loginForm,
      loginFormRef,
      submitLogin
    };
  }
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  width: 400px;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
