<script setup lang='ts'>
const groups = [
  'Группа Крысы',
  'Фьюрио',
  'Пулярес',
  'Клуб Пыли',
  'Цейтнот',
  'Para Cuntuzi',
]

const groupsString = groups.join(' · ').concat(' · ')
</script>

<template>
  <img
    :class="$style.image"
    src="@/assets/img/gorsh.png"
  >
  <footer :class='$style.footer'>
    <div :class='$style.text'>
      <span v-for="(n, index) in 10" :key="index">
        {{ groupsString + ' '}}
      </span>
    </div>
  </footer>
</template>

<style module>
  .image {
    position: fixed;
    z-index: -10;
    width: 50%;
    max-height: 70%;
    object-fit: contain;
    bottom: 2em;
    right: 0;
    /* bottom: 0; */
  }
  .footer {
    position: fixed;
    /* margin-bottom: 2em; */
    padding: 0.2em 0 0.35em;
    color: var(--colorBackground);
    width: 100%;
    bottom: 0;
    left: 0;
    background: var(--colorExtra);
  }

  .text {
    font-family: 'Oswald', sans-serif;
    -webkit-animation: animMarqueeRtl 20s linear infinite;
    animation: animMarqueeRtl 20s linear infinite;
    white-space: nowrap;
  }

  @keyframes animMarqueeRtl {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>