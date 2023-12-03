<template>
  <div class="my-trips py-12">
    <div class="container mx-auto flex flex-col justify-between">
      <div class="container cont mx-auto">
        <h2 class="heading-trip mb-7">My trips</h2>

        <!-- start my trips -->
        <div class="cards mb-96" v-if="data.length >= 1">
          <div
            class="card-box p-5 flex flex-col lg:flex-row items-center gap-6 bg-white mb-5"
            v-for="(n, i) in data"
            :key="i"
          >
            <div class="card-img">
              <img
                :src="n.property.photoUrls[0] || './../assets/img/Rect16.png'"
                alt=""
              />
            </div>
            <div class="card-body flex flex-col justify-between items-start">
              <div class="card-header">
                <h4 class="heading-trip-card mb-2">
                  {{
                    n.property.name.length <= 30
                      ? n.property.name
                      : n.property.name.slice(0, 30) + "..."
                  }}
                </h4>
                <div class="flex items-center footer-span">
                  <div class="svg flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      v-for="(n, i) in Math.floor(n.property.reviewScore / 2) >
                      10
                        ? 5
                        : Math.floor(n.property.reviewScore / 2)"
                      :key="i"
                      v-if="n"
                    >
                      <g clip-path="url(#clip0_1_1662)">
                        <path
                          d="M10.0002 14.1668L5.10186 17.1585L6.43353 11.5752L2.0752 7.84183L7.79603 7.3835L10.0002 2.0835L12.2044 7.3835L17.926 7.84183L13.5669 11.5752L14.8985 17.1585L10.0002 14.1668Z"
                          fill="#F2994A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1662">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span class="ml-3"
                    >{{ Math.floor(n.property.reviewCount) }} ({{
                      Math.floor(n.property.reviewCount) + " reviews"
                    }})</span
                  >
                </div>
              </div>
              <div class="card-actions flex justify-between w-full">
                <div class="card-actions-information mt-2">
                  <h5 class="red-text mb-3">Non refundable</h5>
                  <ul class="flex flex-col gap-2">
                    <li class="li-text">Check in: {{n.property.checkinDate}}</li>
                    <li class="li-text">Check out: {{n.property.checkoutDate}}</li>
                    <li class="li-text">night stay</li>
                  </ul>
                </div>
                <div class="card-actions-action text-right">
                  <span
                    ><del class="red-text mr-2">$150</del>
                    <strong class="heading-home">
                      ${{
                        Math.floor(
                          n.property.priceBreakdown.excludedPrice.value
                        )
                      }}</strong
                    ></span
                  >
                  <p class="heading-home mt-1.5 mb-4">
                    Includes taxes and fees
                  </p>
                  <router-link
                    :to="{ name: 'ProductDetails', params: { id: n } }"
                  >
                    <button class="sign-in">View trip details</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="trips cards mb-96" v-else>
          <div
            class="card-box p-5 flex flex-col lg:flex-row items-center gap-6 bg-white mb-5"
            v-for="(n, i) in 1"
            :key="i"
          >
            <div class="card-img">
              <img src="./../assets/img/Rect16.png" alt="" />
            </div>
            <div class="card-body flex flex-col justify-between items-start">
              <div class="card-header">
                <h4 class="heading-trip-card mb-2">Lakeside Motel Warefront</h4>
                <div class="flex items-center footer-span">
                  <div class="svg flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      v-for="(n, i) in 4"
                      :key="i"
                    >
                      <g clip-path="url(#clip0_1_1662)">
                        <path
                          d="M10.0002 14.1668L5.10186 17.1585L6.43353 11.5752L2.0752 7.84183L7.79603 7.3835L10.0002 2.0835L12.2044 7.3835L17.926 7.84183L13.5669 11.5752L14.8985 17.1585L10.0002 14.1668Z"
                          fill="#F2994A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1662">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="20"
                      viewBox="0 0 10 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_1674)">
                        <path
                          d="M10.0002 14.1668L5.10186 17.1585L6.43353 11.5752L2.0752 7.84183L7.79603 7.3835L10.0002 2.0835L12.2044 7.3835L17.926 7.84183L13.5669 11.5752L14.8985 17.1585L10.0002 14.1668Z"
                          fill="#F2994A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1674">
                          <rect width="10" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span class="ml-3">4.5 (1200 Reviews)</span>
                </div>
              </div>
              <div class="card-actions flex justify-between w-full">
                <div class="card-actions-information mt-2">
                  <h5 class="red-text mb-3">Non refundable</h5>
                  <ul class="flex flex-col justify-start gap-2">
                    <li class="li-text">Check in: Sunday, March 18, 2022</li>
                    <li class="li-text">Check out: Tuesday, March 20, 2022</li>
                    <li class="li-text">2 night stay</li>
                  </ul>
                </div>
                <div class="card-actions-action text-right">
                  <span
                    ><del class="red-text mr-2">$150</del>
                    <strong class="heading-home"> $130</strong></span
                  >
                  <p class="heading-home mt-1.5 mb-4">
                    Includes taxes and fees
                  </p>
                  <router-link
                    :to="{ name: 'ProductDetails', params: { id: n } }"
                  >
                    <button class="sign-in">View trip details</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end my trips -->
      </div>

      <!-- start covid component -->
      <div class="covid">
        <Covid />
      </div>
      <!-- end covid component -->
    </div>
  </div>
</template>

<script setup>
// import
import { useCounterStore } from "../store";

// data
const store = useCounterStore();
const data = store.myTripsGetter;
</script>

<style lang="scss" scoped>
.my-trips {
  background: #f4f4f4;
  min-height: 134.8vh;
  h2 {
    font-size: 32px;
  }
  .cont {
    max-width: 1030px !important;
    .card-box {
      border-radius: 5px;
      border: 1px solid var(--Gray-5, #e0e0e0);
      .card-img {
        width: 30%;
        img {
          width: 285px;
          height: 200px;
          flex-shrink: 0;
          border-radius: 5px;
          background: url(<path-to-image>), lightgray 50% / cover no-repeat;
        }
      }
      li.li-text {
        text-align: left;
      }
      .card-body {
        width: 70%;
        .card-actions-action {
          strong {
            font-size: 20px;
          }
          p {
            font-size: 14px;
          }
          button {
            width: fit-content !important;
          }
        }
      }
    }
  }
  .covid {
  }
}
@media (max-width: 1023px) {
  .my-trips {
    img {
      width: 800px !important;
      height: 100%;
    }
    .card-body {
      width: 100% !important;
    }
  }
}
</style>
