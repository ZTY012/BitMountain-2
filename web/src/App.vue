<script setup lang="ts"></script>

<template>
  <div class="w-screen h-screen overflow-hidden bg-slate-800">
    <Transition>
      <RouterView class="relative transition-all top-0"></RouterView>
    </Transition>
  </div>
</template>

<style>
.v-enter-to,
.v-leave-from {
  transform: scale(1);
  opacity: 1;
}
.v-enter-from,
.v-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style>
