<template>
  
  <table style="width:100%">
    <tr>
      <td style="width:50%">
        <div class="mb-2 words">25% bonus for 20+ apes&nbsp;&nbsp;</div>
        <div class="mb-2 words">20% bonus for 10-19 apes&nbsp;&nbsp;</div>
        <div class="mb-2 words">10% bonus for 5-9 apes&nbsp;&nbsp;</div>
        <div class="mb-2 words">5% bonus for 3-4 apes&nbsp;&nbsp;</div>

      </td>
      <td style="width:50%">
        <div class="mb-2 words">1/1 Apes: 50 $MILEZ a day</div>
        <div class="mb-2 words">Epic Apes: 25 $MILEZ a day</div>
        <div class="mb-2 words">Rare Apes: 15 $MILEZ a day</div>
        <div class="mb-2 words">Common Apes: 10 $MILEZ a day</div>

      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    schedule: Object,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
