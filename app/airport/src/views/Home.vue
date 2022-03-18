<template>
  <div>
    <div class="flex flex-row justify-center align-middle">
      <button
        class="refreshButton navText mb-10 nav-button"
        v-on:click="setRules"
      >
        Welcome Gate
      </button>
      <button
        class="refreshButton navText mb-10 nav-button"
        v-on:click="setBoarding"
      >
        Boarding Apes
      </button>
    </div>
    <br>
    <br>
    <div v-if="page === 'home'" class="pl-5 mb-10 box buttonBorder nav-button rounded-xl">
      <h1 class="mt-5 mainWords text-xl md:text-2xl">Welcome to Mile High Airlines</h1>    
      <p class="mt-10 titleWords text-lg md:text-xl">How Do My Apes Board?</p>
      <p class="mt-2  words ">1. Click on the "Boarding Apes" button above</p>
      <p class="mt-2  words">2. With the Terminal, Click on Each Ape That Would Like To Board</p>
      <p class="mt-2  words">3. Click on the Arrow Pointing to the Right</p>
      <p class="mt-2  words">4. Click on "Board/Deboard Selected Apes"</p>
      <p class="mt-2  words">5. You will have to Approve a Transaction for Each Boarding Ape</p>


      <p class="mt-5 titleWords text-lg md:text-xl">How do I Begin Earning $milez?</p>
      <p class="mt-2  words">1. Once Your Apes have Boarded, You are Cleared for Takeoff!</p>
      <p class="mt-2  words">2. As soon as the Plane is in the Air, Your Apes will Begin Earning $milez</p>
      <p class="mt-2  words">3. The Base Rate for a Boarded Ape is 10 $milez per day</p>
      <p class="mt-2  words">4. To see the $milez You Have Earned so Far, Click "Check Flight Progress"</p>
      <p class="mt-2  words">5. Claim the $milez You Have Earned at Any Point by Clicking "Claim Milez"</p>
      <p class="mt-2  words">6. To Board or Deboard Apes, the Plane Must be Grounded</p>
      <p class="mt-5 titleWords text-lg md:text-xl">Rarity Bonus - Based on rank from MoonRank (Subject to Change)</p>
      <p class="mt-2  words">1. All common apes earn 10 milez per day --- 2501-6000</p>
      <p class="mt-2  words">2. Rare apes earn 15 milez per day --- 501-2500</p>
      <p class="mt-2  words">3. Epic apes earn 25 milez per day --- 11-500</p>
      <p class="mt-2  words">4. All 1/1 apes earn 50 milez per day --- 1-10</p>
      <p class="mt-5 titleWords text-lg md:text-xl">Tier Bonus</p>
      <p class="mt-2  words">1. If 1-2 apes are boarded, there is no bonus in the base rate</p>
      <p class="mt-2  words">2. If 3-4 apes are boarded, there is a 5% bonus in milez earned</p>
      <p class="mt-2  words">3. If 5-9 apes are boarded, there is a 10% bonus in milez earned</p>
      <p class="mt-2  words">4. If 10-19 apes are boarded, there is a 20% bonus in milez earned</p>
      <p class="mt-2  words">5. If 20 or more apes are boarded, there is a 25% bonus in milez earned</p>
      <p class="mt-5 titleWords text-lg md:text-xl">FAQs and Information</p>
      <p class="mt-5  words">Milez earned can be Claimed at Any Point</p>
      <p class="mt-5  words">The Minimum Flight Time is 3 days</p>
      <p class="mt-5  words">After a Flight Lands, it Takes 1 Day to Refuel Before it Can Depart Again.</p>
      <p class="mt-5  words">If you board or deboard an ape and it does not show up, refresh the page and it should appear.</p>
      <p class="mt-5  words">Currently, All of Your NFTs will be Waiting in Line in the Terminal. If you Try to board non-MHAC Apes onto the Plane, You will see an E.rror</p>
      <p class="mt-5  words">If You Found a Bug or have an Issue, Please Open a Ticket in the MHAC discord. Include Your Wallet Address and the Console Log's Error Messages</p>
      <p class="mt-5  words" style="font-weight: bolder">Please Note, this has not yet been Tested on Mobile. For the Moment, Your Flight Attendants Strongly Urge You to Use Your Larger Electronics Prior to Takeoff.</p>

      
    </div>
    <plane v-else></plane>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import Plane from './Plane.vue';
export default defineComponent({
  components: { Plane },
  
  data() {
    return {
      page: "boarding"
    }
  },methods:{
    setRules() {
      this.page = "home";
    },

    setBoarding() {
      this.page = "boarding";
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
