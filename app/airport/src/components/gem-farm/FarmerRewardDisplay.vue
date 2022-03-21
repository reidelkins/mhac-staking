<template>
  <table style="width:100%">
    <tr valign="top">
      <td style="width:40%">
        <div class="mb-2 titleWords">Your MILEZ </div>
        <div class="mb-2 words">Milez accrued: {{ reward.accruedReward/1000000 }}</div>
        <div class="mb-2 words">Milez paid: {{ reward.paidOutReward/1000000 }}</div>
        <div class="mb-2 words">Milez currently available: {{ reward.accruedReward/1000000 - reward.paidOutReward/1000000 }}</div>
        <div class="mb-2 words">Your earning rate: (COMING SOON)</div>
        <div class="mb-2 words">
          Last updated: {{ parseDate(reward.fixedRate.lastUpdatedTs) }}
        </div>
      </td>
      <td>
        <div v-if="parseRewardType(farmReward) === 'variable'">
        </div>
        <div v-else>
          
          
          
          <div class="mb-2 titleWords">MILEZ Rates:</div>
          <FixedScheduleDisplay
            :key="farmReward"
            class="ml-5"
            :schedule="reward.fixedRate.promisedSchedule"
          />
        </div>

      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FixedScheduleDisplay from '@/components/gem-farm/FixedScheduleDisplay.vue';
import { parseDate } from '@/common/util';
import numeral from 'numeral';

export default defineComponent({
  components: { FixedScheduleDisplay },
  props: {
    reward: Object,
    farmReward: Object,
    title: String,
  },
  setup() {
    const parseRewardType = (reward: any): string => {
      //returns "variable" or "fixed"
      return Object.keys(reward.rewardType)[0];
    };

    return {
      parseRewardType,
      parseDate,
      numeral,
    };
  },
});
</script>

<style scoped></style>
