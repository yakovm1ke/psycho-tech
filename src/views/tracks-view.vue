<script setup lang='ts'>
import PaddedPage from '@/components/ui/padded-page.vue'
import SongWrapper from '../components/song-wrapper.vue'
import { songs } from '@/assets/data/songs'

export type ITeamMember = {
	fullName: string,
	profession: string,
	imageSrc?: string
}

</script>

<template>
	<PaddedPage>
		<h1>Треки</h1>
		<div :class='$style.tracks'>
			<SongWrapper
				v-for='(song, index) in songs'
				:class="$style.track"
				:key='index'
				:song-name='`${index + 1}. ${song.title}`'
				:song-lines='song.lyrics'
			/>
		</div>
	</PaddedPage>
</template>

<style module>
  .tracks {
		margin-top: 2em;
		display: flex;
		flex-direction: column;
		gap: 1em;
  }
</style>
