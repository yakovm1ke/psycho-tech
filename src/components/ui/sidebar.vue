<script setup lang='ts'>
import { onMounted } from 'vue'

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
    :class="$style.sidebarWrapper"
    @click="emit('close')"
  >
    <div
      :class="$style.sidebar"
      @click="$event.stopPropagation()"
    >
      <button
        :class="$style.cross"
        @click="emit('close')"
      >
        ✖
      </button>
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
    right: 0;
    height: 100vh;
  }
  .sidebar {
    background: var(--colorSidebar);
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    max-width: 320px;
    min-height: 100vh;
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    font-size: 1.4em;
  }
  .cross {
    border: none;
    padding: 0;
    font-size: inherit;
    color: inherit;
    margin: 0 100%;
  }
  .cross:hover {
    cursor: pointer;
  }
</style>