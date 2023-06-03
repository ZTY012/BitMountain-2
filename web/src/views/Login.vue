<script setup lang="ts">
import version from '@/common/version'
</script>

<template>
  <div
    class="bg-slate-800 w-full h-full text-white flex justify-center items-center"
  >
    <div
      class="bg-slate-700 hover:bg-slate-600 transition-all w-1/4 h-1/2 mb-4 rounded-2xl p-5"
    >
      <p class="font-bold text-3xl text-center">Login</p>
    </div>
    <span class="fixed bottom-5 left-7 text-lg">{{ version }}</span>
  </div>
</template>
