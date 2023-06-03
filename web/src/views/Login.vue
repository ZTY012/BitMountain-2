<script setup lang="ts">
import version from '@/common/version'
</script>

<template>
  <div
    class="bg-slate-800 w-full h-full text-white flex justify-center items-center"
  >
    <div class="my-panel">
      <p class="font-bold text-4xl text-center mb-4">Login</p>
      <input type="text" class="my-input w-full mb-3" placeholder="用户名" />
      <input type="password" class="my-input w-full mb-3" placeholder="密码" />
      <button class="my-button w-full mb-3">登录</button>
      <select class="my-select w-full">
        <option value="127.0.0.1">本地服务器</option>
      </select>
    </div>
    <span class="fixed bottom-5 left-7 text-lg">{{ version }}</span>
  </div>
</template>
