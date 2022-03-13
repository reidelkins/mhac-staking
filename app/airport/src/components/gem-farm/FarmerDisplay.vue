<template>
  <div class="nes-container with-title">
    <div class="mb-2">
      
      <p v-if="parseFarmerState(farmerAcc) === 'staked'">
        The plane is currently in the air
      </p>
      <p v-else>
        The plane is currently on the ground
      </p>
    </div>
    
    <div class="mb-2">Apes boarded {{ farmerAcc.gemsStaked }}</div>
    <div class="mb-2">
      Flight can begin to land at {{ parseDate(farmerAcc.minStakingEndsTs) }}
    </div>
    <div class="mb-5">
      Refueling ends at {{ parseDate(farmerAcc.cooldownEndsTs) }}
    </div>

    <div class="flex mb-5">
      <div class="flex-1 mr-5">
        <FarmerRewardDisplay
          :key="farmerAcc.rewardA"
          :farmReward="farmAcc.rewardA"
          :reward="farmerAcc.rewardA"
        />
      </div>
    </div>
    <button class="refreshButton connectText is-primary mb-5 buttonBorder" @click="refreshFarmer">
      Refresh account
    </button>
    <button
    v-if="parseFarmerState(farmerAcc) === 'staked' && selectedNFTs.length > 0"
    class="refreshButton connectText is-primary mb-5 buttonBorder"
    @click="addGems"
  >
    Add Gems (resets staking)
  </button>
  <button
    v-if="parseFarmerState(farmerAcc) === 'unstaked'"
    class="refreshButton connectText is-primary mb-5 buttonBorder"
    @click="beginStaking"
  >
    Takeoff
  </button>
  <button
    v-if="parseFarmerState(farmerAcc) === 'staked'"
    class="refreshButton connectText is-primary mb-5 buttonBorder"
    @click="endStaking"
  >
    Land
  </button>
  <button
    v-if="parseFarmerState(farmerAcc) === 'pendingCooldown'"
    class="refreshButton connectText is-primary mb-5 buttonBorder"
    @click="endStaking"
  >
    Stop Refueling
  </button>
  <button class="refreshButton connectText is-primary mb-5 buttonBorder" @click="claim">
    Claim {{ availableA }} Milez
  </button>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue';
import FarmerRewardDisplay from '@/components/gem-farm/FarmerRewardDisplay.vue';
import useWallet from '@/composables/wallet';
import useCluster from '@/composables/cluster';
import { initGemFarm } from '@/common/gem-farm';
import { PublicKey } from '@solana/web3.js';
import { parseDate } from '@/common/util';

export default defineComponent({
  components: { FarmerRewardDisplay },
  props: {
    farm: String,
    farmAcc: Object,
    farmer: String,
    farmerAcc: Object,
  },
  emits: ['refresh-farmer'],
  setup(props, ctx) {
    const { wallet, getWallet } = useWallet();
    const { cluster, getConnection } = useCluster();

    let gf: any;
    watch([wallet, cluster], async () => {
      gf = await initGemFarm(getConnection(), getWallet()!);
    });

    //need an onmounted hook because this component isn't yet mounted when wallet/cluster are set
    onMounted(async () => {
      if (getWallet() && getConnection()) {
        gf = await initGemFarm(getConnection(), getWallet()!);
      }
    });

    // --------------------------------------- display farmer
    // todo ideally should be using one from client, but n/a during render
    const parseFarmerState = (farmer: any): string => {
      return Object.keys(farmer.state)[0];
    };

    const refreshFarmer = async () => {
      await gf.refreshFarmerWallet(
        new PublicKey(props.farm!),
        new PublicKey(props.farmer!)
      );
      ctx.emit('refresh-farmer');
    };

    return {
      refreshFarmer,
      parseFarmerState,
      parseDate,
    };
  },
});
</script>

<style scoped></style>
