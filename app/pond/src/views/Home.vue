<template>
  <div>
    <div class="flex flex-row justify-center align-middle">
      <button
        class="refreshButton navText mb-10 nav-button text-2xl"
        v-on:click="setRules"
      >
        Swimming Rules
      </button>
      <button
        class="refreshButton navText mb-10 nav-button text-2xl"
        v-on:click="setSwimming"
      >
        Going Swimming
      </button>
    </div>
    <br>
    <br>
    <div v-if="page === 'home'" class="mb-10 box buttonBorder nav-button rounded-xl">
      <h1 class="mt-5 mainWords text-xl md:text-2xl">Welcome to The Pond</h1>    
      <p class="mt-10 titleWords text-lg md:text-xl">1. Connect your Solana wallet that holds your Ducks, Hunters and or Goose.</p>
      <p class="mt-2  words ">2. Click on the "Enter Pond" button above</p>
      <p class="mt-2  words">3. Within the Terminal, Click on Each Duck, Goose, or Hunter that you would like to take a dip in the pond</p>
      <p class="mt-2  words">4. Click on Go Swim</p>
      <p class="mt-2  words">5. Click on "Finalize ducks entering/exiting the pond! "</p>
      <p class="mt-2  words">6. You will have to Approve a Transaction for Each Duck</p>


      <p class="mt-5 titleWords text-lg md:text-xl">How do I Begin Earning $EGGZ?</p>
      <p class="mt-2  words">1. Once Your NFT has Entered The Pond, You are all set up!</p>
      <p class="mt-2  words">2. As soon as your NFTs are in the pond, You will Begin Earning $EGGZ</p>
      <p class="mt-2  words">3. The Base Rate for a Duck is 20 $EGGZ per day. Hunter Base rate, 80 $Eggz a day, Geese Base Rate, 100 $EGGZ a day.</p>
      <p class="mt-2  words">4. To see the $EGGZ You Have Earned so Far, Click "Refresh Swimming Information"</p>
      <p class="mt-2  words">5. To Claim the $EGGZ You Have Earned. At Any Point Click "Claim $EGGZ"</p>
      <p class="mt-2  words">6. To add or remove Ducks, select the ones you wish to release and click "Release"</p>
      
      <p class="mt-5 titleWords text-lg md:text-xl">Tier Bonus</p>
      <p class="mt-2  words">1. If 1-2 Ducks are in the pond, there is no bonus in the base rate</p>
      <p class="mt-2  words">2. If 3-4 Ducks are in the pond, there is a 5% bonus in milez earned</p>
      <p class="mt-2  words">3. If 5-9 Ducks are in the pond, there is a 10% bonus in milez earned</p>
      <p class="mt-2  words">4. If 10-19 Ducks are in the pond, there is a 20% bonus in milez earned</p>
      <p class="mt-2  words">5. If 20 or more Ducks are in the pond, there is a 25% bonus in milez earned</p>
      <p class="mt-5 titleWords text-lg md:text-xl">FAQs and Information</p>
      <p class="mt-5  words">Due to the slow mint of the geese, they will have to be manually added to the staking platform. This will be done once a week.</p>
      <p class="mt-5  words">EGGZ earned can be Claimed at Any Point</p>
      <p class="mt-5  words">The Minimum Swim Time is 3 days</p>
      <p class="mt-5  words">After a Swim Time is done, it Takes 1 Day Before the duck can swim Again.</p>
      <p class="mt-5  words">If you Stake or unstake a duck and it does not show up, refresh the page and it should appear.</p>
      <p class="mt-5  words">If You Found a Bug or have an Issue, Please Open a Ticket in the Dapper Duck discord. Include Your Wallet Address and the Console Log's Error Messages.</p>

      
    </div>
    <Pond v-else></Pond>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import Pond from './Pond.vue';
export default defineComponent({
  components: { Pond },
  
  data() {
    return {
      page: "swimming"
    }
  },methods:{
    setRules() {
      this.page = "home";
    },

    setSwimming() {
      this.page = "swimming";
    }
  }
});
</script>
<style scoped>
.nav-button {
  @apply  py-3
  hover:text-black;
  outline:  ack;
}
</style>
