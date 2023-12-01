<template>
  <div class="product-details">
    <div class="container mx-auto">
      <div class="loading text-center" v-if="store.loadingGeter">
        <p class="text-blue-500">loading...</p>
      </div>
      <!-- start image -->
      <div class="grid grid-cols-3 gap-5" v-if="dataDetails">
        <div class="col-span-3 lg:col-span-2 md:col-span-2">
          <img :src="imgChange" class="w-full" alt="Rect18" />
        </div>
        <div class="col-span-3 lg:col-span-1 md:col-span-1 img-box">
          <img
            src="./../assets/img/Rect19.png"
            class="mb-5 lg:mb-4 md:mb-4 w-full cursor-pointer"
            alt="Rect19"
            @click="imgChange = '/src/assets/img/Rect19.png'"
          />
          <img
            src="./../assets/img/Rect20.png"
            class="w-full cursor-pointer"
            alt="Rect20"
            @click="imgChange = '/src/assets/img/Rect20.png'"
          />
        </div>
      </div>
      <!-- end image -->

      <!-- start overview -->
      <div class="overview flex items-center gap-10 mt-10">
        <span class="heading-home span-over pb-2 px-2">Overview</span>
        <div class="dropdown pb-3">
          <span
            @click="scrollToSection"
            class="heading-home cursor-pointer"
            type="button"
          >
            Rooms
          </span>
        </div>
      </div>
      <!-- end overview -->
    </div>

    <!-- start overview-information -->
    <div class="overview-information">
      <div class="container mx-auto">
        <div class="motel grid grid-cols-3 gap-8 pt-10" v-if="hotelDataDetails">
          <div class="col-span-3 lg:col-span-2 md:col-span-3">
            <h2 class="heading-auth">{{hotelDataDetails.hotel_name}}</h2>
            <div class="review flex items-center gap-3 mt-3">
              <div class="svg flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  v-for="(n, i) in hotelDataDetails.review_nr"
                  :key="i"
                >
                  <g clip-path="url(#clip0_1_1283)">
                    <path
                      d="M10.0002 14.1667L5.10186 17.1584L6.43353 11.575L2.0752 7.84171L7.79603 7.38337L10.0002 2.08337L12.2044 7.38337L17.926 7.84171L13.5669 11.575L14.8985 17.1584L10.0002 14.1667Z"
                      fill="#F2994A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1283">
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
                  <g clip-path="url(#clip0_1_1299)">
                    <path
                      d="M10.0002 14.1667L5.10186 17.1584L6.43353 11.575L2.0752 7.84171L7.79603 7.38337L10.0002 2.08337L12.2044 7.38337L17.926 7.84171L13.5669 11.575L14.8985 17.1584L10.0002 14.1667Z"
                      fill="#F2994A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1299">
                      <rect width="10" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span class="li-text">{{hotelDataDetails.review_nr}} ({{ hotelDataDetails.review_nr }} Reviews)</span>
            </div>
            <div class="loream flex items-center gap-1.5 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.9999 11.1917C10.3413 11.1917 10.6794 11.1244 10.9949 10.9938C11.3103 10.8631 11.5969 10.6716 11.8384 10.4302C12.0798 10.1887 12.2713 9.90212 12.402 9.58668C12.5327 9.27123 12.5999 8.93314 12.5999 8.5917C12.5999 8.25026 12.5327 7.91217 12.402 7.59672C12.2713 7.28128 12.0798 6.99465 11.8384 6.75322C11.5969 6.51179 11.3103 6.32027 10.9949 6.18961C10.6794 6.05895 10.3413 5.9917 9.9999 5.9917C9.31034 5.9917 8.64902 6.26563 8.16142 6.75322C7.67383 7.24082 7.3999 7.90214 7.3999 8.5917C7.3999 9.28126 7.67383 9.94258 8.16142 10.4302C8.64902 10.9178 9.31034 11.1917 9.9999 11.1917V11.1917Z"
                  stroke="#2F80ED"
                  stroke-width="1.5"
                />
                <path
                  d="M3.01675 7.07484C4.65842 -0.141828 15.3501 -0.133494 16.9834 7.08317C17.9417 11.3165 15.3084 14.8998 13.0001 17.1165C12.1935 17.8945 11.1165 18.3292 9.99592 18.3292C8.87529 18.3292 7.79835 17.8945 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484V7.07484Z"
                  stroke="#2F80ED"
                  stroke-width="1.5"
                />
              </svg>
              <p class="heading-para">
                {{hotelDataDetails.address}}
              </p>
            </div>
            <div class="overflow bg-white mt-8">
              <h4 class="p-6">Overview</h4>
              <div
                class="para flex flex-col gap-8 paragraph mb-8 p-6 pt-0 pb-0"
                v-if="dataDetails"
              >
                <p>
                  {{ dataDetails[0].description }}
                </p>
                <p>
                  Each room at this motel is air conditioned and comes with a
                  flat-screen TV. You will find a kettle, toaster and a
                  microwave in the room. Each room is fitted with a private
                  bathroom. Guests have access to barbecue facilities and a
                  lovely large lawn area. Metung is 6.8 mi from Lakeside Motel
                  Waterfront, while Paynesville is 14 mi from the property.
                </p>
                <p>
                  Couples in particular like the location – they rated it 9.2
                  for a two-person trip.
                </p>
              </div>
              <hr />
              <div class="top">
                <h4 class="p-6">Top facilities</h4>
              </div>
              <div class="list p-6 pt-0 flex items-center gap-32">
                <ul class="flex flex-col gap-3">
                  <li class="flex items-center gap-3" >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M9.23051 2.58519L2.87801 7.67269C2.16301 8.24102 1.70467 9.44185 1.86051 10.3402L3.07967 17.6369C3.29967 18.9385 4.54634 19.9927 5.86634 19.9927H16.133C17.4438 19.9927 18.6997 18.9294 18.9197 17.6369L20.1388 10.3402C20.2855 9.44185 19.8272 8.24102 19.1213 7.67269L12.7688 2.59435C11.788 1.80602 10.2022 1.80602 9.23051 2.58519V2.58519Z"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.05664 13.182C10.2208 12.0728 11.7791 12.0728 12.9433 13.182"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.886 11.2387C14.4137 10.7746 13.8687 10.3907 13.2727 10.1021C12.5625 9.75822 11.7838 9.57959 10.9948 9.57959C10.2058 9.57959 9.42699 9.75822 8.71685 10.1021C8.14852 10.3771 7.60768 10.7529 7.10352 11.2387"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.9951 15.5835H11.0035"
                        stroke="#2F80ED"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Free wifi</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M1.8335 13.75H16.9585C18.7277 13.75 20.1668 15.1892 20.1668 16.9583C20.1668 18.7275 18.7277 20.1667 16.9585 20.1667C15.1893 20.1667 13.7502 18.7275 13.7502 16.9583V16.5"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.8335 11.0002H16.9585C18.7185 11.0002 20.1668 9.561 20.1668 7.79183C20.1668 6.03183 18.7185 4.5835 16.9585 4.5835C16.1083 4.58591 15.2937 4.92471 14.6925 5.52587C14.0914 6.12702 13.7526 6.94167 13.7502 7.79183V8.25016"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.8335 8.25003H8.53433C9.02203 8.25003 9.49877 8.10541 9.90427 7.83446C10.3098 7.56351 10.6258 7.1784 10.8125 6.72783C10.9991 6.27726 11.0479 5.78146 10.9528 5.30313C10.8576 4.82481 10.6228 4.38544 10.2779 4.04059C9.93308 3.69573 9.49371 3.46089 9.01539 3.36574C8.53706 3.2706 8.04127 3.31943 7.5907 3.50606C7.14012 3.69269 6.75501 4.00875 6.48406 4.41425C6.21311 4.81975 6.0685 5.2965 6.0685 5.78419V6.13253"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Air Conditioning</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M14.2173 2.59412H7.78234C5.49984 2.59412 4.99567 3.73078 4.70234 5.12412L3.6665 10.0833H18.3332L17.2973 5.12412C17.004 3.73078 16.4998 2.59412 14.2173 2.59412V2.59412Z"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.1575 18.1683C20.2583 19.2408 19.3967 20.1666 18.2967 20.1666H16.5733C15.5833 20.1666 15.4458 19.7449 15.2717 19.2224L15.0883 18.6724C14.8317 17.9208 14.6667 17.4166 13.3467 17.4166H8.65334C7.33334 17.4166 7.14084 17.9849 6.91167 18.6724L6.72834 19.2224C6.55417 19.7449 6.41667 20.1666 5.42667 20.1666H3.70334C2.60334 20.1666 1.74167 19.2408 1.8425 18.1683L2.35584 12.5858C2.48417 11.2108 2.75 10.0833 5.15167 10.0833H16.8483C19.25 10.0833 19.5158 11.2108 19.6442 12.5858L20.1575 18.1683Z"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.66667 7.33325H2.75"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.2502 7.33325H18.3335"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 2.75V4.58333"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.625 4.58325H12.375"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.5 13.75H8.25"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.75 13.75H16.5"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Parking available</span>
                  </li>
                </ul>
                <ul class="flex flex-col gap-3">
                  <li class="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M9.23051 2.58519L2.87801 7.67269C2.16301 8.24102 1.70467 9.44185 1.86051 10.3402L3.07967 17.6369C3.29967 18.9385 4.54634 19.9927 5.86634 19.9927H16.133C17.4438 19.9927 18.6997 18.9294 18.9197 17.6369L20.1388 10.3402C20.2855 9.44185 19.8272 8.24102 19.1213 7.67269L12.7688 2.59435C11.788 1.80602 10.2022 1.80602 9.23051 2.58519V2.58519Z"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.05664 13.182C10.2208 12.0728 11.7791 12.0728 12.9433 13.182"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.886 11.2387C14.4137 10.7746 13.8687 10.3907 13.2727 10.1021C12.5625 9.75822 11.7838 9.57959 10.9948 9.57959C10.2058 9.57959 9.42699 9.75822 8.71685 10.1021C8.14852 10.3771 7.60768 10.7529 7.10352 11.2387"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.9951 15.5835H11.0035"
                        stroke="#2F80ED"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Free wifi</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M1.8335 13.75H16.9585C18.7277 13.75 20.1668 15.1892 20.1668 16.9583C20.1668 18.7275 18.7277 20.1667 16.9585 20.1667C15.1893 20.1667 13.7502 18.7275 13.7502 16.9583V16.5"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.8335 11.0002H16.9585C18.7185 11.0002 20.1668 9.561 20.1668 7.79183C20.1668 6.03183 18.7185 4.5835 16.9585 4.5835C16.1083 4.58591 15.2937 4.92471 14.6925 5.52587C14.0914 6.12702 13.7526 6.94167 13.7502 7.79183V8.25016"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.8335 8.25003H8.53433C9.02203 8.25003 9.49877 8.10541 9.90427 7.83446C10.3098 7.56351 10.6258 7.1784 10.8125 6.72783C10.9991 6.27726 11.0479 5.78146 10.9528 5.30313C10.8576 4.82481 10.6228 4.38544 10.2779 4.04059C9.93308 3.69573 9.49371 3.46089 9.01539 3.36574C8.53706 3.2706 8.04127 3.31943 7.5907 3.50606C7.14012 3.69269 6.75501 4.00875 6.48406 4.41425C6.21311 4.81975 6.0685 5.2965 6.0685 5.78419V6.13253"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Air Conditioning</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M14.2173 2.59412H7.78234C5.49984 2.59412 4.99567 3.73078 4.70234 5.12412L3.6665 10.0833H18.3332L17.2973 5.12412C17.004 3.73078 16.4998 2.59412 14.2173 2.59412V2.59412Z"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.1575 18.1683C20.2583 19.2408 19.3967 20.1666 18.2967 20.1666H16.5733C15.5833 20.1666 15.4458 19.7449 15.2717 19.2224L15.0883 18.6724C14.8317 17.9208 14.6667 17.4166 13.3467 17.4166H8.65334C7.33334 17.4166 7.14084 17.9849 6.91167 18.6724L6.72834 19.2224C6.55417 19.7449 6.41667 20.1666 5.42667 20.1666H3.70334C2.60334 20.1666 1.74167 19.2408 1.8425 18.1683L2.35584 12.5858C2.48417 11.2108 2.75 10.0833 5.15167 10.0833H16.8483C19.25 10.0833 19.5158 11.2108 19.6442 12.5858L20.1575 18.1683Z"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.66667 7.33325H2.75"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.2502 7.33325H18.3335"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 2.75V4.58333"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.625 4.58325H12.375"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.5 13.75H8.25"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.75 13.75H16.5"
                        stroke="#2F80ED"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Parking available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1 md:col-span-3 map-card">
            <img src="./../assets/img/Rect21.png" alt="Rect21" class="w-full" />
            <h2 class="mt-9 font-medium">Explore the area</h2>
            <ul class="flex flex-col gap-3 mt-5">
              <li class="flex items-center justify-between li-text">
                <div class="hotel flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M2.84484 11.4817L1.6665 12.66L5.79067 14.4275L7.559 18.5525L8.73734 17.3742L8.14817 14.4275L10.909 11.6667L13.9173 18.0867L15.0332 16.9708L14.0415 8.53499L16.3982 6.17749C16.5574 6.02375 16.6843 5.83984 16.7717 5.6365C16.859 5.43316 16.905 5.21446 16.9069 4.99316C16.9088 4.77186 16.8667 4.5524 16.7829 4.34757C16.6991 4.14274 16.5753 3.95666 16.4188 3.80017C16.2623 3.64368 16.0763 3.51992 15.8714 3.43612C15.6666 3.35232 15.4471 3.31015 15.2258 3.31207C15.0045 3.314 14.7858 3.35998 14.5825 3.44732C14.3792 3.53467 14.1952 3.66164 14.0415 3.82083L11.6223 6.23999L3.1865 5.24749L2.13234 6.30249L8.50234 9.36082L5.7915 12.0717L2.84484 11.4817Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                  <span>Hotel Penselvenyia</span>
                </div>
                <div class="min">2 min drive</div>
              </li>
              <li class="flex items-center justify-between li-text">
                <div class="hotel flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99974 1.6665C6.32391 1.6665 3.33308 4.65734 3.33308 8.329C3.30891 13.6998 9.74641 18.1532 9.99974 18.3332C9.99974 18.3332 16.6906 13.6998 16.6664 8.33317C16.6664 4.65734 13.6756 1.6665 9.99974 1.6665ZM9.99974 11.6665C8.15808 11.6665 6.66641 10.1748 6.66641 8.33317C6.66641 6.4915 8.15808 4.99984 9.99974 4.99984C11.8414 4.99984 13.3331 6.4915 13.3331 8.33317C13.3331 10.1748 11.8414 11.6665 9.99974 11.6665Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                  <span>Travis Bakery store house</span>
                </div>
                <div class="min">10 min drive</div>
              </li>
              <li class="flex items-center justify-between li-text">
                <div class="hotel flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99974 1.6665C6.32391 1.6665 3.33308 4.65734 3.33308 8.329C3.30891 13.6998 9.74641 18.1532 9.99974 18.3332C9.99974 18.3332 16.6906 13.6998 16.6664 8.33317C16.6664 4.65734 13.6756 1.6665 9.99974 1.6665ZM9.99974 11.6665C8.15808 11.6665 6.66641 10.1748 6.66641 8.33317C6.66641 6.4915 8.15808 4.99984 9.99974 4.99984C11.8414 4.99984 13.3331 6.4915 13.3331 8.33317C13.3331 10.1748 11.8414 11.6665 9.99974 11.6665Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                  <span>Olivia Johnson Garden</span>
                </div>
                <div class="min">15 min drive</div>
              </li>
              <li class="flex items-center justify-between li-text">
                <div class="hotel flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99974 1.6665C6.32391 1.6665 3.33308 4.65734 3.33308 8.329C3.30891 13.6998 9.74641 18.1532 9.99974 18.3332C9.99974 18.3332 16.6906 13.6998 16.6664 8.33317C16.6664 4.65734 13.6756 1.6665 9.99974 1.6665ZM9.99974 11.6665C8.15808 11.6665 6.66641 10.1748 6.66641 8.33317C6.66641 6.4915 8.15808 4.99984 9.99974 4.99984C11.8414 4.99984 13.3331 6.4915 13.3331 8.33317C13.3331 10.1748 11.8414 11.6665 9.99974 11.6665Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                  <span>Norman Opera Circus</span>
                </div>
                <div class="min">18 min drive</div>
              </li>
              <li class="flex items-center justify-between li-text">
                <div class="hotel flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99974 1.6665C6.32391 1.6665 3.33308 4.65734 3.33308 8.329C3.30891 13.6998 9.74641 18.1532 9.99974 18.3332C9.99974 18.3332 16.6906 13.6998 16.6664 8.33317C16.6664 4.65734 13.6756 1.6665 9.99974 1.6665ZM9.99974 11.6665C8.15808 11.6665 6.66641 10.1748 6.66641 8.33317C6.66641 6.4915 8.15808 4.99984 9.99974 4.99984C11.8414 4.99984 13.3331 6.4915 13.3331 8.33317C13.3331 10.1748 11.8414 11.6665 9.99974 11.6665Z"
                      fill="#4F4F4F"
                    />
                  </svg>
                  <span>Rockdeset hotel</span>
                </div>
                <div class="min">32 min drive</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="rooms grid grid-cols-3 gap-8 pt-10" id="scroll-section">
          <div class="col-span-3 lg:col-span-1 place-room">
            <div class="place-room-box flex items-center p-5">
              <div class="place">
                <div class="head text-white flex items-center gap-1 mb-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3.414 13.7779C2.5 13.9999 2 15.1919 2 15.1919C2 15.1919 5.398 15.6259 6.949 17.3129C8.5 18.9999 9.071 22.2629 9.071 22.2629C9.071 22.2629 10.47 22.6979 10.485 20.8489C10.5 18.9999 9.778 17.3129 9.778 17.3129L13.091 13.9999L16.701 21.7039C16.701 21.7039 18.08 22.2299 18.04 20.3649C18 18.4999 16.85 10.2419 16.85 10.2419L19.678 7.41294C19.869 7.22845 20.0214 7.00776 20.1262 6.76375C20.231 6.51974 20.2862 6.2573 20.2885 5.99174C20.2908 5.72619 20.2402 5.46283 20.1396 5.21703C20.0391 4.97124 19.8906 4.74794 19.7028 4.56015C19.515 4.37237 19.2917 4.22386 19.0459 4.1233C18.8001 4.02274 18.5368 3.97213 18.2712 3.97444C18.0056 3.97675 17.7432 4.03192 17.4992 4.13674C17.2552 4.24156 17.0345 4.39392 16.85 4.58494L13.947 7.48794C13.947 7.48794 6.148 6.09394 3.824 6.29694C1.5 6.49994 2.559 7.56294 2.559 7.56294L10.203 11.2329L6.95 14.4859C6.95 14.4859 4.328 13.5559 3.414 13.7779Z"
                      fill="white"
                    />
                  </svg>
                  <h5>my Dream Place</h5>
                </div>
                <p class="text-white">
                  20% off<br />
                  Use Promotional Coupon Code: <br />
                  <strong> Orlando </strong>
                </p>
              </div>
              <img src="./../assets/img/Frame1.png" alt="" />
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1">
            <div class="card-box bg-white rounded-md">
              <img
                src="./../assets/img/Rect22.png"
                alt="Rect22"
                class="w-full"
              />
              <div class="card-body p-6">
                <div class="head">
                  <h4 class="mb-4 mt-5">Standard twin ben, Multiple beds</h4>
                  <ul>
                    <li class="flex items-center gap-1 li-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.99984 15.8337C10.8839 15.8337 11.7317 15.4825 12.3569 14.8573C12.982 14.2322 13.3332 13.3844 13.3332 12.5003C13.3332 11.6163 12.982 10.7684 12.3569 10.1433C11.7317 9.51818 10.8839 9.16699 9.99984 9.16699C9.11578 9.16699 8.26794 9.51818 7.64281 10.1433C7.01769 10.7684 6.6665 11.6163 6.6665 12.5003C6.6665 13.3844 7.01769 14.2322 7.64281 14.8573C8.26794 15.4825 9.11578 15.8337 9.99984 15.8337V15.8337Z"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M8.69971 12.5003L9.24137 13.0419C9.39971 13.2003 9.65804 13.2086 9.81637 13.0503L11.2997 11.6836"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.49986 18.3337H12.4999C15.8499 18.3337 16.4499 16.992 16.6249 15.3587L17.2499 10.3587C17.4749 8.32533 16.8915 6.66699 13.3332 6.66699H6.66652C3.10819 6.66699 2.52486 8.32533 2.74986 10.3587L3.37486 15.3587C3.54986 16.992 4.14986 18.3337 7.49986 18.3337Z"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.25 6.3918V5.58346C6.25 3.70846 7.75833 1.8668 9.63333 1.6918C10.1543 1.64061 10.6802 1.69907 11.1773 1.86341C11.6743 2.02775 12.1314 2.29434 12.5192 2.646C12.9069 2.99767 13.2168 3.42663 13.4288 3.90527C13.6408 4.38392 13.7502 4.90164 13.75 5.42513V6.57513"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>300 sq ft</span>
                    </li>
                    <li class="flex items-center gap-1 li-text my-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.97493 18.3332C14.5774 18.3332 18.3083 14.6023 18.3083 9.99984C18.3083 5.39734 14.5774 1.6665 9.97493 1.6665C5.37244 1.6665 1.6416 5.39734 1.6416 9.99984C1.6416 14.6023 5.37244 18.3332 9.97493 18.3332V18.3332Z"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 13.75C10.9946 13.75 11.9484 13.3549 12.6516 12.6516C13.3549 11.9484 13.75 10.9946 13.75 10C13.75 9.00544 13.3549 8.05161 12.6516 7.34835C11.9484 6.64509 10.9946 6.25 10 6.25C9.00544 6.25 8.05161 6.64509 7.34835 7.34835C6.64509 8.05161 6.25 9.00544 6.25 10C6.25 10.9946 6.64509 11.9484 7.34835 12.6516C8.05161 13.3549 9.00544 13.75 10 13.75V13.75Z"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.08301 4.1084L7.03301 7.05006"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.08301 15.8914L7.03301 12.9497"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.8748 15.8914L12.9248 12.9497"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.8748 4.1084L12.9248 7.05006"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Sleeps 3</span>
                    </li>
                    <li class="flex items-center gap-1 li-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65007 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65007 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>1 double bed and 1 twin bed</span>
                    </li>
                  </ul>
                </div>
                <button class="sign-in mt-6">Reserve suite</button>
              </div>
            </div>
          </div>
          <div class="col-span-3 lg:col-span-1">
            <div class="card-box bg-white rounded-md" v-for="(room ,i) in hotelDataDetails.rooms" :key="i">
              <img
                src="./../assets/img/Rect22.png"
                alt="Rect22"
                class="w-full"
              />
              <div class="card-body p-6">
                <div class="head">
                  <h4 class="mb-4 mt-5">Standard twin ben, Multiple beds</h4>
                  <ul>
                    <li class="flex items-center gap-1 li-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.99984 15.8337C10.8839 15.8337 11.7317 15.4825 12.3569 14.8573C12.982 14.2322 13.3332 13.3844 13.3332 12.5003C13.3332 11.6163 12.982 10.7684 12.3569 10.1433C11.7317 9.51818 10.8839 9.16699 9.99984 9.16699C9.11578 9.16699 8.26794 9.51818 7.64281 10.1433C7.01769 10.7684 6.6665 11.6163 6.6665 12.5003C6.6665 13.3844 7.01769 14.2322 7.64281 14.8573C8.26794 15.4825 9.11578 15.8337 9.99984 15.8337V15.8337Z"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M8.69971 12.5003L9.24137 13.0419C9.39971 13.2003 9.65804 13.2086 9.81637 13.0503L11.2997 11.6836"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.49986 18.3337H12.4999C15.8499 18.3337 16.4499 16.992 16.6249 15.3587L17.2499 10.3587C17.4749 8.32533 16.8915 6.66699 13.3332 6.66699H6.66652C3.10819 6.66699 2.52486 8.32533 2.74986 10.3587L3.37486 15.3587C3.54986 16.992 4.14986 18.3337 7.49986 18.3337Z"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.25 6.3918V5.58346C6.25 3.70846 7.75833 1.8668 9.63333 1.6918C10.1543 1.64061 10.6802 1.69907 11.1773 1.86341C11.6743 2.02775 12.1314 2.29434 12.5192 2.646C12.9069 2.99767 13.2168 3.42663 13.4288 3.90527C13.6408 4.38392 13.7502 4.90164 13.75 5.42513V6.57513"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>300 sq ft</span>
                    </li>
                    <li class="flex items-center gap-1 li-text my-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.97493 18.3332C14.5774 18.3332 18.3083 14.6023 18.3083 9.99984C18.3083 5.39734 14.5774 1.6665 9.97493 1.6665C5.37244 1.6665 1.6416 5.39734 1.6416 9.99984C1.6416 14.6023 5.37244 18.3332 9.97493 18.3332V18.3332Z"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 13.75C10.9946 13.75 11.9484 13.3549 12.6516 12.6516C13.3549 11.9484 13.75 10.9946 13.75 10C13.75 9.00544 13.3549 8.05161 12.6516 7.34835C11.9484 6.64509 10.9946 6.25 10 6.25C9.00544 6.25 8.05161 6.64509 7.34835 7.34835C6.64509 8.05161 6.25 9.00544 6.25 10C6.25 10.9946 6.64509 11.9484 7.34835 12.6516C8.05161 13.3549 9.00544 13.75 10 13.75V13.75Z"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.08301 4.1084L7.03301 7.05006"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.08301 15.8914L7.03301 12.9497"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.8748 15.8914L12.9248 12.9497"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.8748 4.1084L12.9248 7.05006"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Sleeps 3</span>
                    </li>
                    <li class="flex items-center gap-1 li-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65007 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65007 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z"
                          stroke="#828282"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>1 double bed and 1 twin bed</span>
                    </li>
                  </ul>
                </div>
                <button class="sign-in mt-6">Reserve suite</button>
              </div>
            </div>
          </div>
        </div>
        <div class="covid mt-36">
          <Covid />
        </div>
      </div>
    </div>
    <!-- end overview-information -->
  </div>
</template>

<script setup>
// import
import { useRoute } from "vue-router";
import { onMounted, ref, reactive } from "vue";
import { initDropdowns } from "flowbite";
import { useCounterStore } from "./../store/index.js";
import api from "../service/api";

// data
const route = useRoute();
const store = useCounterStore();
const dataDetails = ref();
const list = reactive([{}]);
const imgChange = ref("/src/assets/img/Rect18.png");
const targetSectionId = ref("scroll-section");
const hotelDataDetails = ref([]);

// mounted
// initialize components based on data attribute selectors
onMounted(() => {
  initDropdowns();
  hotelDetails();
});
// methods

const hotelDetails = async () => {
  store.SET_LOADING(true);
  api
    .get("/hotels/getHotelDetails", {
      params: {
        hotel_id: route.params.id,
        arrival_date: "2023-12-20",
        departure_date: "2024-02-29",
        adults: "1",
        children_age: "1,17",
        room_qty: "1",
        languagecode: "en-us",
        currency_code: "EUR",
      },
    })
    .then((response) => {
      // handle success
      hotelDataDetails.value = response.data.data

      // description
      api
        .get("hotels/getDescriptionAndInfo", {
          params: {
            hotel_id: route.params.id,
            languagecode: "en-us",
          },
        })
        .then((response) => {
          // handle success
          store.SET_LOADING(false);
          dataDetails.value = response.data.data;
        })
        .catch((error) => {
          // handle error
          return error;
        });
    })
    .catch((error) => {
      // handle error
      return error;
    });
};


// Function to scroll-section
const scrollToSection = () => {
  const targetElement = document.getElementById(targetSectionId.value);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style lang="scss" scoped>
// product-details {
.overview-information {
  background: #f4f4f4;
  transform: translateY(-4px);
  h2.heading-auth {
    font-size: 32px;
  }
  .loream {
    p {
      font-size: 14px;
      line-height: 140%; /* 19.6px */
      letter-spacing: 0.28px;
    }
  }
}
span.span-over {
  border-bottom: 3px solid var(--Blue-1, #2f80ed);
  z-index: 5;
}
.overflow {
  .para {
    text-align: left;
    line-height: 140%;
  }
  border-radius: 6px;
  ul {
    li {
      span {
        color: var(--Gray-2, #4f4f4f);
        font-size: 15px;
        line-height: 140%; /* 21px */
        letter-spacing: 0.3px;
      }
    }
  }
  .map-card {
    h2 {
      color: #181818;
      font-size: 18px;
      letter-spacing: 0.18px;
    }
  }
}
.place-room {
  border-radius: 6px;
  background: linear-gradient(180deg, #4796ff 0%, #2366bf 100%);
  height: 340px;
  .place-room-box {
    .place {
      .head {
        h5 {
          color: #fff;
          font-family: SF Pro Display;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.36px;
        }
      }
      p {
        width: 180px;
        color: #fff;
        font-family: SF Pro Display;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        strong {
          color: #ffd723;
          font-family: SF Pro Display;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
    }
    img {
      transform: translateX(-30px);
    }
  }
}
button.sign-in {
  width: 100%;
}
// }
</style>
