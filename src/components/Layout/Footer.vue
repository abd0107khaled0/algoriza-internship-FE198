<template>
  <footer class="pt-4" :class="[names ? 'bg' : '']">
    <div class="container mx-auto mt-24">
      <div class="body grid grid-cols-5  gap-3">
        <!-- start dream body -->
        <div class="dream-body col-span-3 lg:col-span-1  footer-span">
          <div class="dream flex items-center gap-1">
            <img src="./../../assets/img/favicon.png" alt="" />
            <h4 class="dream-heading">my Dream Place</h4>
          </div>
          <p class="mt-2">Your next goto companion for</p>
          <span class="mt-2">travel</span>
        </div>
        <!-- end dream body -->

        <!-- start compony -->
        <div class="section-body col-span-2 lg:col-span-1 compony">
          <h4 class="mb-5 dream-heading">Company</h4>
          <ul>
            <li class="footer-span mb-2.5">
              <router-link to=""> Australia </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> New Zealand </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> United States America (USA) </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Greece </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Maldives </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Singapore </router-link>
            </li>
          </ul>
          <a href="" class="see-more"> See more </a>
        </div>
        <!-- end compony -->

        <!-- start explore -->
        <div class="section-body col-span-3 lg:col-span-1 explore">
          <h4 class="mb-5 dream-heading">Explore</h4>
          <ul>
            <li class="footer-span mb-2.5">
              <router-link to=""> About </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Jobs </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Newsroom </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Advertising </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Contact us </router-link>
            </li>
          </ul>
        </div>
        <!-- end explore -->

        <!-- start terms -->
        <div class="section-body col-span-2 lg:col-span-1 terms">
          <h4 class="mb-5 dream-heading">Terms and Policies</h4>
          <ul>
            <li class="footer-span mb-2.5">
              <router-link to=""> Privacy Policy </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Terms of use </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Acessibility </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Reward system policy </router-link>
            </li>
          </ul>
        </div>
        <!-- end terms -->

        <!-- start help -->
        <div class="section-body col-span-3 lg:col-span-1 help">
          <h4 class="mb-5 dream-heading">Help</h4>
          <ul>
            <li class="footer-span mb-2.5">
              <router-link to=""> Support </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Cancel your bookings </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Use Coupon </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> Refund Policies </router-link>
            </li>
            <li class="footer-span mb-2.5">
              <router-link to=""> International Travel Documents </router-link>
            </li>
          </ul>
        </div>
        <!-- end help -->
      </div>
    </div>

    <!-- start dream-places -->
    <div class="dream-places flex items-center justify-end mt-20">
      <div class="flex items-center flex-row-reverse body container mx-auto">
        <span>my Dream Place 2022</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_1_342)">
            <path
              d="M7.99992 14.6667C4.31992 14.6667 1.33325 11.68 1.33325 8.00004C1.33325 4.32004 4.31992 1.33337 7.99992 1.33337C11.6799 1.33337 14.6666 4.32004 14.6666 8.00004C14.6666 11.68 11.6799 14.6667 7.99992 14.6667Z"
              stroke="#4F4F4F"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.91983 10C9.43369 10.4288 8.80802 10.6658 8.15983 10.6667C6.6865 10.6667 5.49316 9.47337 5.49316 8.00004C5.49316 6.52671 6.6865 5.33337 8.15983 5.33337C8.80802 5.33431 9.43369 5.5713 9.91983 6.00004"
              stroke="#4F4F4F"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_342">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <!-- start dream-places -->
  </footer>
</template>

<script setup>
// import
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";

// data
const bgNames = reactive(["ProductDetails", "MyTrips"]);
const route = useRoute();

// mounted

// methods

// computed
const names = computed(() => {
  return bgNames.includes(route.name);
});
</script>

<style lang="scss" scoped>
.bg {
  background: #f4f4f4;
  margin-top: -100px;
}
.dream-places {
  background: #ebebeb;
  padding: 10px;
  .body {
    transform: translateX(-110px);
  }
}
</style>
