<script setup lang='ts'>
const props = defineProps({
	fullName: {
		type: String,
		required: true,
	},
	profession: {
		type: String,
		required: true,
	},
	photoSrc: {
		type: String,
		required: true,
	},
})
</script>

<template>
  <div :class="$style.teamMember">
    <div :class="$style.image">
      <img :src="photoSrc">
    </div>
    <div :class="$style.text">
      <div :class="$style.fullName">
        {{ props.fullName }}
      </div>
      <div :class="$style.profession">
        {{ props.profession }}
      </div>
    </div>
  </div>
</template>

<style module>
  .teamMember {
    display: flex;
    gap: 20px;
  }
  .image {
    width: 160px;
    height: 160px;
    border-radius: 4px;
    overflow: hidden;
    object-fit: cover;
    display: flex;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .profession {
    font-size: 0.8em;
    color: var(--colorGhost);
  }
</style>