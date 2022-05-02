<template>
  <ConfigPane />
  <div v-if="!wallet" class="text-center">Pls connect (burner) wallet</div>
  <div v-else>
    <div class="flex mb-10 w-full justify-center">
      <button
        class="nes-btn is-primary mr-5"
        @click="showNewFarm = !showNewFarm"
      >
        New farm
      </button>
      <button class="nes-btn" @click="refreshFarms">Refetch farms</button>
    </div>

    <!--new farm-->
    <div v-if="showNewFarm">
      <TestMint class="mb-10" />
      <InitFarm class="mb-10" @new-farm="handleNewFarm" />
    </div>

    <!--existing farms-->
    <div v-if="foundFarms && foundFarms.length">
      <!--farm selector-->
      <div class="nes-container with-title mb-10">
        <p class="title">Farm Details</p>
        <p class="mb-2">Choose farm:</p>
        <div class="nes-select mb-5">
          <select v-model="farm">
            <option v-for="f in foundFarms" :key="f.publicKey.toBase58()">
              {{ f.publicKey.toBase58() }}
            </option>
          </select>
        </div>
        <FarmDisplay :key="farmAcc" :farmAcc="farmAcc" />
      </div>
      <!--update farm-->
      <UpdateFarm :farm="farm" @update-farm="handleUpdateFarm" class="mb-10" />
      <!--manage NFT types-->
      <TheWhitelist
        :key="farmAcc.bank"
        :farm="farm"
        :bank="farmAcc.bank.toBase58()"
        class="mb-10"
      />
      <!--manage funders-->
      <AuthorizeFunder :key="farm" :farm="farm" class="mb-10" />
      <!--manage funding-->
      <FundCancelLock
        :farm="farm"
        :farmAcc="farmAcc"
        class="mb-10"
        @update-farm="handleUpdateFarm"
      />
      <!--refresh farmer-->
      <RefreshFarmer :farm="farm" class="mb-10" />
      <!--treasury payout-->
      <TreasuryPayout :key="farmAcc" :farm="farm" class="mb-10" />
      <div>

      </div>
    </div>
    <div v-else-if="isLoading" class="text-center">Loading...</div>
    <div v-else class="text-center">No farms found :( Start a new one?</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import ConfigPane from '@/components/ConfigPane.vue';
import useWallet from '@/composables/wallet';
import useCluster from '@/composables/cluster';
import TestMint from '@/components/gem-farm/TestMint.vue';
import { initGemFarm } from '@/common/gem-farm';
import InitFarm from '@/components/gem-farm/InitFarm.vue';
import { PublicKey } from '@solana/web3.js';
import { stringifyPKsAndBNs } from '@reidelkins/mhac-staking';
import AuthorizeFunder from '@/components/gem-farm/AuthorizeFunder.vue';
import FundCancelLock from '@/components/gem-farm/FundCancelLock.vue';
import RefreshFarmer from '@/components/gem-farm/RefreshFarmer.vue';
import TreasuryPayout from '@/components/gem-farm/TreasuryPayout.vue';
import TheWhitelist from '@/components/gem-farm/BankWhitelist.vue';
import UpdateFarm from '@/components/gem-farm/UpdateFarm.vue';
import FarmDisplay from '@/components/gem-farm/FarmDisplay.vue';

export default defineComponent({
  components: {
    FarmDisplay,
    UpdateFarm,
    TheWhitelist,
    TreasuryPayout,
    RefreshFarmer,
    FundCancelLock,
    AuthorizeFunder,
    InitFarm,
    TestMint,
    ConfigPane,
  },
  setup() {
    const { wallet, getWallet } = useWallet();
    const { cluster, getConnection } = useCluster();

    let gf: any;
    watch([wallet, cluster], async () => {
      gf = await initGemFarm(getConnection(), getWallet()!);
      await findFarmsByManager(getWallet()!.publicKey!);
    });

    //needed in case we switch in from another window
    onMounted(async () => {
      if (getWallet() && getConnection()) {
        gf = await initGemFarm(getConnection(), getWallet()!);
        await findFarmsByManager(getWallet()!.publicKey!);
      }
    });

    // --------------------------------------- farm locator
    const foundFarms = ref<any[]>([]);
    const foundFarmers = ref<any[]>([]);
    const farm = ref<string>();
    const farmAcc = ref<any>();
    const currentFarmIndex = ref<number>(0);
    const isLoading = ref<boolean>(true);

    //whenever we change the farm, we update the index/account
    watch(farm, (newFarm: any) => {
      updateFarmByPk(newFarm);
    });

    const updateFarmByPk = (newFarm: string) => {
      const idx = foundFarms.value.findIndex(
        (ff) => ff.publicKey.toBase58() === newFarm
      );
      currentFarmIndex.value = idx;
      farmAcc.value = foundFarms.value[idx].account;
    };
    


    //const findFarmers = async(farm: PublicKey, identity: PublicKey) => {
    //  foundFarmers.value = await gf.fetchAllFarmerPDAs(farm, identity);
    //  console.log('Found farmers:', stringifyPKsAndBNs(foundFarmers.value));
    //}

    const findFarmsByManager = async (manager: PublicKey) => {
      foundFarms.value = await gf.fetchAllFarmPDAs(manager);
      console.log('Found farms:', stringifyPKsAndBNs(foundFarms.value));

      

      if (foundFarms.value.length) {
        farm.value =
          foundFarms.value[currentFarmIndex.value].publicKey.toBase58();
        console.log('Found farms:', stringifyPKsAndBNs(foundFarms.value));

        //yes this is needed here, as sometimes farm.value stays same, but we want to rerender anyway
        updateFarmByPk(farm.value!);
        foundFarmers.value = await gf.fetchAllFarmerPDAs(foundFarms.value[currentFarmIndex.value].publicKey);
        console.log("hello");
        for (var i = 0; i < foundFarmers.value.length; i++) {
          if (foundFarmers.value[i].account.identity == "8Ana7ChhkbiyzAN9acH68LQEVbKVS2XuF4fFB7mDqY3D") {
            console.log(stringifyPKsAndBNs(foundFarmers.value[i]))
            let start = stringifyPKsAndBNs(foundFarmers.value[i].account.rewardA.fixedRate.beginStakingTs)
            let end = stringifyPKsAndBNs(foundFarmers.value[i].account.rewardA.fixedRate.lastUpdatedTs)
            let mathAccrued = (end - start) * 10000 / 86400 * stringifyPKsAndBNs(foundFarmers.value[i].account.rarityPointsStaked)
            console.log(mathAccrued)
            console.log(stringifyPKsAndBNs(foundFarmers.value[i].account.rewardA.accruedReward))
          }
          
        }
        
        /*var a = [];
        var b = [];
        var c = [];
        var d = [];

        for (var i = 0; i < foundFarmers.value.length; i++) {
          a.push(stringifyPKsAndBNs(foundFarmers.value[i].account.identity.toBase58() ) );
          b.push(stringifyPKsAndBNs(foundFarmers.value[i].account.vault.toBase58() ) );
          c.push(stringifyPKsAndBNs(foundFarmers.value[i].publicKey.toBase58() ) );
          if (JSON.stringify(foundFarmers.value[i].account.state) === '{"staked":{}}') {
          
            staked = staked + 1;
            
            farmers.push(stringifyPKsAndBNs(foundFarmers.value[i].account.identity));
          }
          else if (JSON.stringify(foundFarmers.value[i].account.state) === '{"unstaked":{}}') {
            console.log(JSON.stringify(stringifyPKsAndBNs(foundFarmers.value[i].account.rarityPointsStaked)));
            unstaked = unstaked + 1
          } else {
            other = other + 1;
          }
        }
        console.log(foundFarmers.value.length);
        console.log(staked);
        console.log(unstaked);
        console.log(other);
        console.log('Found farmers:', JSON.stringify(a));
        console.log('Found farmers:', JSON.stringify(b));
        console.log('Found farmers:', JSON.stringify(c));
        console.log('Found farmers:', stringifyPKsAndBNs(foundFarmers.value));*/
      }
      isLoading.value = false;
    };

    // --------------------------------------- rest
    const showNewFarm = ref<boolean>(false);

    const handleNewFarm = async (newFarm: string) => {
      showNewFarm.value = false;
      await findFarmsByManager(getWallet()!.publicKey!);
      farm.value = newFarm;
    };

    const handleUpdateFarm = async () => {
      await findFarmsByManager(getWallet()!.publicKey!);
    };

    const refreshFarms = async () => {
      await findFarmsByManager(getWallet()!.publicKey!);
    };

    return {
      isLoading,
      wallet,
      foundFarms,
      farm,
      farmAcc,
      handleNewFarm,
      handleUpdateFarm,
      showNewFarm,
      refreshFarms,
    };
  },
});
</script>

<style scoped></style>
