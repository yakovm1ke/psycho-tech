<template>
  <main :class='$style.main'>
    <slot></slot>
  </main>
</template>

<style module>
  .main {
    padding: 120px 80px;
  }

  @media (max-width: 1000px) {
    .main {
      padding: 40px 20px 140px;
    }
  }
</style>