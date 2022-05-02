<template>
  <div class="relative h-full min-h-screen">
    <div class="flex flex-nowrap pt-10 px-10 flex justify-center align-middle">
      <a href="https://dapperducks.netlify.app/" target="_blank" rel="noopener noreferrer"><img :width="150" :height="150" src="./assets/ducks.png" /></a>
      <p class="text-2xl md:text-7xl sm:text-4xl pt-3 px-2 mt-1 underline header">The Pond </p>
    </div>
    <br>

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
