<template>
  <main :class='$style.main'>
    <slot></slot>
  </main>
</template>

<style module>
  .main {
    padding: 120px 80px;
  }
</style>