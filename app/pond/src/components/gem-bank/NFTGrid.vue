<template>
  <div class="nes-container with-title rounded-lg">

    <div v-if="title === 'vault'">
      <p class="cardTitle">Dry Ducks</p>
    </div>
    <div v-else>
      <p class="cardTitle">Swimming Ducks</p>
    </div>
    <slot />
    <div class="nftGrid">
      <NFTCard
        v-for="nft in nfts"
        :key="nft"
        :nft="nft"
        @selected="handleSelected"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NFTCard from '@/components/gem-bank/NFTCard.vue';

export default defineComponent({
  components: { NFTCard },
  emits: ['selected'],
  props: {
    title: String,
    nfts: Array,
  },
  setup(props, ctx) {
    const handleSelected = (e: any) => {
      ctx.emit('selected', e);
    };
    return {
      handleSelected,
    };
  },
});
</script>

<style scoped></style>
