<template>
 <button class="ButtonStyled" @click="$emit('passarinho', 'calopsita')">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type color = 'success'| 'danger'| 'primary'

export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      required: true
    },
  }
})
</script>

<style scoped>
.ButtonStyled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  background-color: #2d6cea;
}

.success {
  background-color: green;
}

.danger {
  background-color: red;
}

.primary {
  background-color: #2d6cea;
}
</style>