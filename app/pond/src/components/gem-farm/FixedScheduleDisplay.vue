<template>
  
  <table style="width:100%">
    <tr>
      <td style="width:50%">
        <div class="mb-2 words">25% bonus for 20+ ducks&nbsp;&nbsp;</div>
        <div class="mb-2 words">20% bonus for 10-19 ducks&nbsp;&nbsp;</div>
        <div class="mb-2 words">10% bonus for 5-9 ducks&nbsp;&nbsp;</div>
        <div class="mb-2 words">5% bonus for 3-4 ducks&nbsp;&nbsp;</div>

      </td>
      <td style="width:50%">
        <div class="mb-2 words">Geese: 100 $EGGZ a day</div>
        <div class="mb-2 words">Hunters: 80 $EGGZ a day</div>
        <div class="mb-2 words">Ducks: 20 $EGGZ a day</div>
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
