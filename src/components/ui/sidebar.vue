<script setup lang='ts'>
import { onMounted } from 'vue'

defineProps({
	isShown: {
		type: Boolean,
		required: true,
	},
})

const emit = defineEmits(['close'])

onMounted(() => {
	window.addEventListener('keydown', (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			emit('close')
		}
	})
})
</script>

<template>
  <div
    :class="[$style.sidebarWrapper, {[$style.sidebarShown]: isShown}]"
    @click="emit('close')"
  >
    <div
      :class="[$style.sidebar, {[$style.show]: isShown}]"
      @click="$event.stopPropagation()"
    >
      <img
        :class="$style.cross"
        src="@/assets/icons/cross.svg"
        @click="emit('close')"
      >
      <slot />
    </div>
  </div>
</template>

<style module>
  .sidebarWrapper {
    z-index: 100;
    background: rgba(0, 0, 0, 80%);
    position: fixed;
    width: 100vw;
    top: 0;
    height: 100vh;
    visibility: hidden;
    opacity: 0;
    transition: all 200ms;
  }
  .sidebarShown {
    visibility: visible;
    opacity: 1;
  }
  .sidebar {
    background: var(--colorSidebar);
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    width: 100vw;
    max-width: 320px;
    min-height: 100vh;
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    font-size: 1.4em;
    transition: transform 200ms;
  }
  .cross {
    border: none;
    padding: 0;
    font-size: inherit;
    color: inherit;
    width: 1em;
    margin: 0 100%;
  }
  .cross:hover {
    cursor: pointer;
  }
  .show {
    transform: translateX(0%);
  }
</style>