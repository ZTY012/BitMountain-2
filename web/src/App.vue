<script setup lang="ts"></script>

<template>
  <div class="w-screen h-screen overflow-hidden bg-slate-800">
    <RouterView v-slot="{ Component }">
      <transition>
        <component :is="Component" class="relative transition-all top-0" />
      </transition>
    </RouterView>
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
