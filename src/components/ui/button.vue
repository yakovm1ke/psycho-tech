<script setup lang='ts'>
const props = defineProps({
	spread: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
  <button :class="[$style.button, {[$style.spread]: props.spread}]">
    <slot />
  </button>
</template>

<style module>
  .button {
    font-family: inherit;
    font-size: inherit;
    background: var(--colorExtra);
    color: var(--colorBackground);
    padding: 14px 44px;
    outline: none;
    border: none;
  }
  .button:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
  .spread {
    width: 100%;
  }
</style>