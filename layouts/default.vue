<template>
  <div>
    <PartHeader />

    <main>
      <slot />
    </main>

    <PartFooter />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
main {
  min-height: calc(100vh - 116px);
}
</style>
