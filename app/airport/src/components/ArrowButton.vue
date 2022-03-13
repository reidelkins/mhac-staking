<template>
  <button :disabled="disabled">
    <img
      src="../assets/arrow.png"
      alt="right"
      :width="100"
      :height="100"
      :class="{ left: left, disabled: disabled }"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    left: Boolean,
    disabled: Boolean,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
button,
img {
  outline: none !important;
}

.left {
  transform: scaleX(-1);
}
.disabled {
  opacity: 0;
}
</style>
