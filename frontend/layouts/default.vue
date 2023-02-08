
<template>
  <nav class="flex justify-between p-3">
    <div  class="navbar bg-base-100 ">
      <a @click="redirectHome" class=" normal-case text-xl cursor-pointer">The Shop API</a>
    </div>
    <button @click="redirectNew" class="btn btn-accent">New Store</button>
  </nav>

  <slot />

</template>

<script setup>
const redirectNew = () => { navigateTo('/stores/create') }
const redirectHome = () => { navigateTo('/') }
</script>

<style lang="scss" scoped>

</style>