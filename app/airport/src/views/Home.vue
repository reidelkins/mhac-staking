<template>
  <div class="nes-container mb-10 firstBox buttonBorder">
    <h1 class="mt-5 px-2 mainWords">Welcome to Mile High Airlines</h1>    
    <p class="mt-10 px-5 titleWords">How do I put my apes on the plane?</p>
    <p class="mt-2 px-10 words">1. Click on the "Boarding Apes" button above</p>
    <p class="mt-2 px-10 words">2. Click on each ape in the terminal that you would like to board</p>
    <p class="mt-2 px-10 words">3. Click on the arrow pointing to the right</p>
    <p class="mt-2 px-10 words">4. Click on move gems</p>
    <p class="mt-2 px-10 words">5. You have to sign a transaction for each ape that you are moving onto the plane</p>
    <p class="mt-5 px-5 titleWords">How do I begin earning milez?</p>
    <p class="mt-2 px-10 words">1. If you have apes on the plane, then you can takeoff</p>
    <p class="mt-2 px-10 words">2. As soon as the plane is in the air, you will begin earning milez</p>
    <p class="mt-2 px-10 words">3. The base rate is 10 milez per ape that is boarded at the time of takeoff</p>
    <p class="mt-2 px-10 words">4. To see the milez you have earned so far, click on refresh account</p>
    <p class="mt-2 px-10 words">5. You can claim the milez you have earned at any point by pressing Claim Milez</p>
    <p class="mt-2 px-10 words">6. In order to board or deboard apes, the plane must be landed</p>
    <p class="mt-5 px-5 titleWords">Rarity Bonus - Based on rank from MoonRank (Subject to Change)</p>
    <p class="mt-2 px-10 words">1. All common apes earn 10 milez per day --- 2501-6000</p>
    <p class="mt-2 px-10 words">2. Rare apes earn 15 milez per day --- 501-2500</p>
    <p class="mt-2 px-10 words">3. Epic apes earn 25 milez per day --- 11-500</p>
    <p class="mt-2 px-10 words">4. All 1/1 apes earn 50 milez per day --- 1-10</p>
    <p class="mt-5 px-5 titleWords">Tier Bonus</p>
    <p class="mt-2 px-10 words">1. If 1-2 apes are boarded, there is no bonus in the base rate</p>
    <p class="mt-2 px-10 words">2. If 3-4 apes are boarded, there is a 5% bonus in milez earned</p>
    <p class="mt-2 px-10 words">3. If 5-9 apes are boarded, there is a 10% bonus in milez earned</p>
    <p class="mt-2 px-10 words">4. If 10-19 apes are boarded, there is a 20% bonus in milez earned</p>
    <p class="mt-2 px-10 words">5. If 20 or more apes are boarded, there is a 25% bonus in milez earned</p>
    <p class="mt-5 px-5 titleWords">FAQs and Information</p>
    <p class="mt-5 px-10 words">This is not guarunteed to work on mobile</p>
    <p class="mt-5 px-10 words">Milez earned can be claimed at any point.</p>
    <p class="mt-5 px-10 words">Yes, right now it shows all of your NFTs in the terminal, if you try to move non MHAC Apes onto the plane you will get an error</p>
    <p class="mt-5 px-10 words">If you found a bug or have an issue, please open a ticket on the MHAC discord. Include your wallet address and the console logs error messages</p>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GEM_FARM_PROG_ID } from '@reidelkins/mhac-staking';
export default defineComponent({
  setup() {
    return {
      GEM_FARM_PROG_ID,
    };
  },
});
</script>
<style scoped></style>
