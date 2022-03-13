<template>
  <div class="justify-center flex">
    <div class="connectButton wallet">
      <select required id="wallet" class="connectButton connectText" v-model="chosenWallet">
        <option class="connectText" :value="null">Choose wallet..</option>
        <option :value="WalletName.Phantom">Phantom</option>
        <option :value="WalletName.Sollet">Sollet</option>
        <option :value="WalletName.SolletExtension">Sollet Extension</option>
        <option :value="WalletName.Solflare">Solflare</option>
        <option :value="WalletName.SolflareWeb">Solflare Web</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { WalletName } from '@solana/wallet-adapter-wallets';
import useCluster, { Cluster } from '@/composables/cluster';
import useWallet from '@/composables/wallet';

export default defineComponent({
  setup() {
    // cluster
    const { cluster, setCluster, getClusterURL } = useCluster();
    const chosenCluster = computed({
      get() {
        return Cluster.Mainnet;
      },
      set(newVal: Cluster) {
        setCluster(newVal);
      },
    });

    // wallet
    const { getWalletName, setWallet } = useWallet();
    const chosenWallet = computed({
      get() {
        return getWalletName();
      },
      set(newVal: WalletName | null) {
        setWallet(newVal, getClusterURL());
      },
    });

    return {
      Cluster,
      chosenCluster,
      WalletName,
      chosenWallet,
    };
  },
});
</script>

<style scoped></style>
