<template>
  <div :class="$style.paddedPage">
    <slot />
  </div>
</template>

<style module>
  .paddedPage {
    margin: 0 auto;
    max-width: 1000px;
  }
</style>