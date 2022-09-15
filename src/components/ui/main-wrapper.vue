<template>
  <main :class='$style.main'>
    <slot></slot>
  </main>
</template>

<style module>
  .main {
    padding: 40px 80px 80px;
  }

  @media (max-width: 1000px) {
    .main {
      padding: 40px 20px 80px;
    }
  }
</style>