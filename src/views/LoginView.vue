<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <el-card class="login-box p-5" shadow="always">
      <h2 class="text-white text-center">LOGIN</h2>
      <p class="text-secondary text-center">會員登入</p>

      <el-form :model="form" label-position="left" class="mt-2">
        <el-form-item label="帳號:">
          <el-input v-model="form.email" placeholder="請輸入帳號" />
        </el-form-item>
        <el-form-item label="密碼:">
          <el-input v-model="form.password" type="password" show-password placeholder="請輸入密碼" />
        </el-form-item>
        <el-button type="primary" class="w-100 dark-gradient-btn" @click="handleLogin">登入</el-button>
        <div class="d-flex justify-content-between mt-3">
          <el-button type="" @click="handleForgotPassword">忘記密碼？</el-button>
          <el-button type="primary" @click="handleRegister">快速註冊</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  email: '',
  password: ''
})

function handleLogin() {
  console.log('登入資料', form.value)
  // TODO: 呼叫登入 API
}
function handleForgotPassword() {
  console.log('忘記密碼', form.value)
  // TODO: 呼叫忘記密碼 API
}
function handleRegister() {
  console.log('快速註冊', form.value)
  // TODO: 呼叫快速註冊 API
}
</script>

<style scoped>

.login-box {
  background-color: #1e1e1e;
  color: white;
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}
:deep(.el-input__wrapper) {
  background-color: #2c2c2c;
  border: 1px solid #444;
  color: #fff;
}

:deep(.el-input__inner) {
  color: #fff;
}

:deep(.el-form-item__label) {
  color: #fff;
}
.dark-gradient-btn {
  background: linear-gradient(to right, #4f77ff, #00c6ff);
  color: white;
  border: none;
}
</style>
