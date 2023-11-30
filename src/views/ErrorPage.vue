<template>
  <div class="error-page">
    <Dream />
    <div class="container mx-auto">
      <div class="flex items-center justify-center gap-5 mt-20">
        <h1 class="text-2xl text-red-500 font-bold">
          this page not exist, sorry!
        </h1>
        <a href="/" alt="home" class=" hover hover:text-green-500">go home...</a>
      </div>
    </div>
  </div>
</template>

<script setup>
// import
import Dream from "./../components/Dream.vue";
</script>

<style lang="scss" scoped></style>
