<template>
  <div>
    <div class="layout">
      <Header v-if="!existNamesHeader" />
      <router-view />
      <Footer v-if="!existNamesFooter" />
    </div>
  </div>
</template>
<script setup>
// import
import Footer from "./components/Layout/Footer.vue";
import Header from "./components/Layout/Header.vue";
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

// data
// page accept header
const namePagesHeader = reactive(["Register", "SignIn", "Main", "ErrorPage"]);
// page accept footer
const namePagesFooter = reactive([
  "Register",
  "SignIn",
  "Main",
  "Checkout",
  "ErrorPage",
]);
const route = useRoute();

// mounted
onMounted(() => {});

// methods

// computed

// for show footer and header
const existNamesHeader = computed(() => {
  return namePagesHeader.includes(route.name);
});
const existNamesFooter = computed(() => {
  return namePagesFooter.includes(route.name);
});
</script>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
