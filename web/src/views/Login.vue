<script setup lang="ts">
import version from '@/common/version'
import { ref } from 'vue';

const username = ref<HTMLInputElement>()
const password = ref<HTMLInputElement>()

function login() {
  
}
</script>

<template>
  <div
    class="bg-slate-800 w-full h-full text-white flex justify-center items-center"
  >
    <div class="my-panel">
      <!-- 登录弹窗 -->
      <p class="font-bold text-4xl text-center mb-4">Login</p>
      <input type="text" class="my-input w-full mb-3" placeholder="用户名" ref="username" />
      <input type="password" class="my-input w-full mb-3" placeholder="密码" ref="password" />
      <button class="my-button w-full mb-3" @click="login">➜</button>
      <select class="my-select w-full">
        <option value="ws://127.0.0.1:8765">本地服务器</option>
      </select>
    </div>
    <!-- 左下角版本 -->
    <span class="fixed bottom-5 left-7 text-lg">{{ version }}</span>
  </div>
</template>
