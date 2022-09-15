<script setup lang='ts'>
import { ref  } from 'vue'

defineProps({
	songName: {
		type: String,
		required: true,
	},
	songLines: {
		type: Array,
		default: () => ([]),
	},
})

const isShown = ref(false)
const buttonRef = ref({} as HTMLButtonElement)
const lyricsRef = ref({} as HTMLDivElement)

function toggleShown() {
	if (!isShown.value) {
		lyricsRef.value.style.height = `${ lyricsRef.value.scrollHeight }px`
	} else {
		lyricsRef.value.style.height = `${ lyricsRef.value.scrollHeight }px`
		window.getComputedStyle(lyricsRef.value, null).getPropertyValue('height')
		lyricsRef.value.style.height = '0'
	}

	isShown.value = !isShown.value
}
</script>

<template>
  <div>
    <button
      ref="buttonRef"
      :class="$style.button"
      @click="toggleShown()"
    >
      <div :class="$style.title">
        {{ songName }}
      </div>
      <img
        :class="[$style.chevron, {[$style.openedChevron]: isShown}]"
        src="@/assets/icons/chevron.svg"
      >
    </button>
    <div
      ref="lyricsRef"
      :class="$style.lyricsWrapper"
    >
      <div
        :class="[$style.lyrics, {[$style.hidden]: !isShown}]"
      >
        <div
          v-for="(songLine, index) in songLines"
          :key="index"
        >
          <div v-if="songLine !== &quot;&quot;">
            {{ songLine }}
          </div>
          <br v-else>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.button {
  background: var(--colorExtra);
  font-size: 1em;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.6em 1em;
  border: none;
  position: sticky;
  top: 0;
  z-index: 99;
}
.button:hover {
  cursor: pointer;
  filter: brightness(0.9);
}
.title {
  font-size: 1.2em;
  color: var(--colorBackground);
}
.lyricsWrapper {
  overflow: hidden;
  transition: all 300ms;
  height: 0px;
}
.lyrics {
  padding: 0.6em 1em;
}
.chevron {
  display: flex;
  width: 1em;
  height: 100%;
  transform: rotate(90deg);
  transition: transform 300ms;
}
.openedChevron {
  transform: rotate(270deg);
}
</style>
