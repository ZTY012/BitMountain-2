<script setup lang="ts">
import version from '@/common/version'
</script>

<template>
  <div class="bg-slate-800 w-full h-full text-white flex justify-center items-center">
    <p class="text-red-500">Hello world</p>
    <p>Version: {{ version }}</p>
  </div>
</template>
