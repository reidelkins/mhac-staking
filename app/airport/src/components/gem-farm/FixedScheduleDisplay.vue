<template>
  <div>
    <div class="mb-2 words">20% bonus for 20+ apes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1/1 Apes: 50 $MILEZ a day</div>
    <div class="mb-2 words">15% bonus for 15+ apes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Epic Apes: 25 $MILEZ a day</div>
    <div class="mb-2 words">10% bonus for 10+ apes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rare Apes: 15 $MILEZ a day</div>
    <div class="mb-2 words">5% bonus for 5+ apes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Common Apes: 10 $MILEZ a day</div>
  </div>
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
