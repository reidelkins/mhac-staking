<template>
  <div class="relative h-full min-h-screen">
    
    <div class="pt-10 px-10 flex justify-center align-middle">
      <p class="text-4xl pt-3 px-1 mt-1 underline header">Mile High</p>
      <a href="https://www.milehighapeclub.com" target="_blank" rel="noopener noreferrer"><img :width="120" :height="120" src="./assets/logo.png" /></a>
      <p class="text-4xl pt-3 px-2 mt-1 underline header">Airlines</p>
    </div>
    <br>
    <TheNavBar />

    <div class="p-10">
      <router-view />
    </div>

    <div class="pt-10"></div>
    <TheFooter /> 
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar';
import TheFooter from '@/components/gem-farm/TheFooter';

export default {
  components: {TheFooter, TheNavBar },
};
</script>

<style>
* {
  font-family: 'Press Start 2P', monospace;
}
input[type='radio']:checked + span {
  @apply text-black;
}
</style>
