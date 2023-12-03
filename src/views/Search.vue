<template>
  <div class="search-products">
    <div class="gradient relative"></div>
    <div class="services container mx-auto">
      <div class="grid grid-cols-6 gap-4 bg-white p-3 rounded-lg">
        <div
          id="dropdownDelayButton"
          data-dropdown-toggle="dropdownDelayOne"
          data-dropdown-delay="500"
          class="col-span-7 flex items-center justify-between gap-1 lg:col-span-1 md:col-span-3 rounded cursor-pointer"
        >
          <span type="button" class="flex items-center gap-1 typegrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.9999 11.1917C10.3413 11.1917 10.6794 11.1244 10.9949 10.9938C11.3103 10.8631 11.5969 10.6716 11.8384 10.4302C12.0798 10.1887 12.2713 9.90212 12.402 9.58668C12.5327 9.27123 12.5999 8.93314 12.5999 8.5917C12.5999 8.25026 12.5327 7.91217 12.402 7.59672C12.2713 7.28128 12.0798 6.99465 11.8384 6.75322C11.5969 6.51179 11.3103 6.32027 10.9949 6.18961C10.6794 6.05895 10.3413 5.9917 9.9999 5.9917C9.31034 5.9917 8.64902 6.26563 8.16142 6.75322C7.67383 7.24082 7.3999 7.90214 7.3999 8.5917C7.3999 9.28126 7.67383 9.94258 8.16142 10.4302C8.64902 10.9178 9.31034 11.1917 9.9999 11.1917V11.1917Z"
                stroke="#828282"
                stroke-width="1.5"
              />
              <path
                d="M3.01675 7.07502C4.65842 -0.141644 15.3501 -0.133311 16.9834 7.08336C17.9417 11.3167 15.3084 14.9 13.0001 17.1167C12.1935 17.8946 11.1165 18.3293 9.99592 18.3293C8.87529 18.3293 7.79835 17.8946 6.99175 17.1167C4.69175 14.9 2.05842 11.3084 3.01675 7.07502V7.07502Z"
                stroke="#828282"
                stroke-width="1.5"
              />
            </svg>
            {{
              $route.query.name
                ? $route.query.name.slice(0, 10) + "..."
                : "cairo"
            }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M13.28 5.96655L8.9333 10.3132C8.41997 10.8266 7.57997 10.8266 7.06664 10.3132L2.71997 5.96655"
              stroke="#828282"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <!-- Dropdown menu -->
          <div
            id="dropdownDelayOne"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200 dropdown-home"
              aria-labelledby="dropdownHoverButton"
            >
              <li
                class="paragraph"
                v-for="(going, i) in going"
                :key="i"
                v-show="going.region"
              >
                <a
                  :href="
                    '/search/' +
                    going.dest_id +
                    '?checkin=' +
                    $route.query.checkin +
                    '&checkout=' +
                    $route.query.checkout +
                    '&guests=' +
                    $route.query.guests +
                    '&rooms=' +
                    $route.query.rooms +
                    '&name=' +
                    going.region
                  "
                  class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2"
                >
                  <span>{{ going.region }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-span-7 flex items-center justify-start gap-3 lg:col-span-1 md:col-span-3 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M6.6665 1.66669V4.16669"
              stroke="#828282"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3335 1.66669V4.16669"
              stroke="#828282"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.9165 7.57501H17.0832"
              stroke="#828282"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 7.08335V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08335C2.5 4.58335 3.75 2.91669 6.66667 2.91669H13.3333C16.25 2.91669 17.5 4.58335 17.5 7.08335Z"
              stroke="#828282"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.0791 11.4167H13.0866"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.0791 13.9167H13.0866"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.99561 11.4167H10.0039"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.99561 13.9167H10.0039"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.91162 11.4167H6.91995"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.91162 13.9167H6.91995"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          ><span class="typegrap">{{
            $route.query.checkin ? $route.query.checkin : "Check in date"
          }}</span>
        </div>
        <div
          class="col-span-7 flex items-center justify-start gap-3 lg:col-span-1 md:col-span-2 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M6.6665 1.66669V4.16669"
              stroke="#828282"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3335 1.66669V4.16669"
              stroke="#828282"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.9165 7.57501H17.0832"
              stroke="#828282"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 7.08335V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08335C2.5 4.58335 3.75 2.91669 6.66667 2.91669H13.3333C16.25 2.91669 17.5 4.58335 17.5 7.08335Z"
              stroke="#828282"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.0791 11.4167H13.0866"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.0791 13.9167H13.0866"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.99561 11.4167H10.0039"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.99561 13.9167H10.0039"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.91162 11.4167H6.91995"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.91162 13.9167H6.91995"
              stroke="#828282"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          ><span class="typegrap">{{
            $route.query.checkout ? $route.query.checkout : "Check out date"
          }}</span>
        </div>
        <div
          class="col-span-7 flex items-center justify-start gap-3 lg:col-span-1 md:col-span-2 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_2442_156)">
              <path
                d="M15.1166 18.0167C14.3833 18.2333 13.5166 18.3333 12.5 18.3333H7.49997C6.4833 18.3333 5.61663 18.2333 4.8833 18.0167C5.06663 15.85 7.29163 14.1417 9.99997 14.1417C12.7083 14.1417 14.9333 15.85 15.1166 18.0167V18.0167Z"
                stroke="#828282"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.4998 1.66669H7.49984C3.33317 1.66669 1.6665 3.33335 1.6665 7.50002V12.5C1.6665 15.65 2.6165 17.375 4.88317 18.0167C5.0665 15.85 7.2915 14.1417 9.99984 14.1417C12.7082 14.1417 14.9332 15.85 15.1165 18.0167C17.3832 17.375 18.3332 15.65 18.3332 12.5V7.50002C18.3332 3.33335 16.6665 1.66669 12.4998 1.66669ZM9.99984 11.8084C8.34984 11.8084 7.0165 10.4667 7.0165 8.81669C7.0165 7.16669 8.34984 5.83335 9.99984 5.83335C11.6498 5.83335 12.9832 7.16669 12.9832 8.81669C12.9832 10.4667 11.6498 11.8084 9.99984 11.8084Z"
                stroke="#828282"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.9831 8.81671C12.9831 10.4667 11.6498 11.8084 9.99981 11.8084C8.34981 11.8084 7.01648 10.4667 7.01648 8.81671C7.01648 7.16671 8.34981 5.83337 9.99981 5.83337C11.6498 5.83337 12.9831 7.16671 12.9831 8.81671Z"
                stroke="#828282"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2442_156">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs></svg
          ><span class="typegrap"
            >{{ $route.query.guests ? $route.query.guests : "1" }} adult</span
          >
        </div>
        <div
          class="col-span-7 flex items-center justify-start gap-3 lg:col-span-1 md:col-span-2 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7.4375 17H6.625L6.09687 15.4286H5V11.4804C5 11.0482 5.15911 10.6815 5.47734 10.3804C5.79557 10.0792 6.17812 9.92857 6.625 9.92857V7.57143C6.625 7.13929 6.78411 6.76935 7.10234 6.46161C7.42057 6.15387 7.80312 6 8.25 6H14.75C15.1969 6 15.5794 6.15387 15.8977 6.46161C16.2159 6.76935 16.375 7.13929 16.375 7.57143V9.92857C16.8219 9.92857 17.2044 10.0824 17.5227 10.3902C17.8409 10.6979 18 11.0679 18 11.5V15.4286H16.9031L16.375 17H15.5625L15.0344 15.4286H7.96562L7.4375 17ZM12.3125 9.92857H14.75V7.57143H12.3125V9.92857ZM8.25 9.92857H10.6875V7.57143H8.25V9.92857ZM6.625 13.8571H16.375V11.5H6.625V13.8571Z"
              fill="#828282"
            />
            <rect
              x="2.75"
              y="2.75"
              width="17.5"
              height="17.5"
              rx="5.25"
              stroke="#828282"
              stroke-width="1.5"
            /></svg
          ><span class="typegrap"
            >{{ $route.query.rooms ? $route.query.rooms : "1" }} room</span
          >
        </div>
        <div
          class="col-span-7 flex items-center justify-center gap-3 lg:col-span-1 md:col-span-2 rounded"
        >
          <button class="sign-in">search</button>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="grid grid-cols-7 gap-5">
        <!-- start search input  -->
        <div class="col-span-7 lg:col-span-2">
          <div class="search-text rounded-md p-5">
            <label for="search" class="heading-label"
              >Search by property name</label
            >
            <div class="search-box mt-4 flex items-center bg-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                class="ml-3"
              >
                <path
                  d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 18L13.875 14.375"
                  stroke="#4F4F4F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                type="text"
                name="search"
                v-model="searchByName"
                class="border-none w-full rounded outline-none"
                placeholder="eg. Beach westpalm"
              />
            </div>
          </div>
          <h4 class="p-5 pb-0 filter-heading">Filter by</h4>
          <div class="filter my-5 rounded-md">
            <div class="budget-label p-5">
              <label for="budget" class="heading-label"
                >Your budget per day</label
              >
            </div>
            <div class="budget p-5 flex flex-col gap-3.5">
              <div class="budget-box flex items-center justify-between">
                <div class="value flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value="0"
                    @click="minMax('0', '200')"
                  />
                  <span class="typegrap">$0 - $200</span>
                </div>
                <span class="typegrap">200</span>
              </div>
              <div class="budget-box flex items-center justify-between">
                <div class="value flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value="0"
                    @click="minMax(200, 500)"
                  />
                  <span class="typegrap">$200 - $500</span>
                </div>
                <span class="typegrap">100</span>
              </div>
              <div class="budget-box flex items-center justify-between">
                <div class="value flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value="0"
                    @click="minMax(500, 1000)"
                  />
                  <span class="typegrap">$500 - $1,000</span>
                </div>
                <span class="typegrap">15</span>
              </div>
              <div class="budget-box flex items-center justify-between">
                <div class="value flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value="0"
                    @click="minMax(1000, 2000)"
                  />
                  <span class="typegrap">$1,000 - $2,000</span>
                </div>
                <span class="typegrap">12</span>
              </div>
              <div class="budget-box flex items-center justify-between">
                <div class="value flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value="0"
                    @click="minMax(2000, 5000)"
                  />
                  <span class="typegrap">$2,000 - $5,000</span>
                </div>
                <span class="typegrap">230</span>
              </div>
            </div>
            <div
              class="own-budget p-5 pt-0 pb-2 flex items-center justify-between"
            >
              <span class="li-text">Set your own budget</span>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  @click="disabled = !disabled"
                  class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
              </label>
            </div>
            <div class="min-max p-2 m-3 mt-0 border-dashed border-1">
              <div class="inputs flex items-center gap-3 mb-2">
                <div class="min py-1 rounded w-28">
                  <input
                    type="number"
                    class="w-full border-none py-1"
                    placeholder="Min budget"
                    v-model="min"
                    :disabled="!disabled"
                    @keyup.enter="minMax(min, max)"
                  />
                </div>
                <div class="max p-1 rounded w-32">
                  <input
                    type="number"
                    class="w-full border-none py-1"
                    placeholder="Max budget"
                    v-model="max"
                    :disabled="!disabled"
                    @keyup.enter="minMax(min, max)"
                  />
                </div>
              </div>
              <span class="li-text" @click="minMax(min, max)"
                >Press Enter to filter</span
              >
            </div>
          </div>
          <div class="filter my-5 rounded-md">
            <div class="budget-label p-5">
              <label for="budget" class="heading-label">Rating</label>
            </div>
            <div class="own-budget p-5 flex items-start flex-col">
              <span class="li-text">Show only ratings more than</span>

              <div
                class="inline-flex rounded-md border border-box mt-2"
                role="group"
              >
                <button
                  type="button"
                  class="inline-flex items-center px-3.5 py-2 text-sm font-medium text-gray-900 bg-white rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <span class="heading-home">1</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_673)">
                      <path
                        d="M8.99993 12.75L4.59143 15.4425L5.78993 10.4175L1.86743 7.0575L7.01618 6.645L8.99993 1.875L10.9837 6.645L16.1332 7.0575L12.2099 10.4175L13.4084 15.4425L8.99993 12.75Z"
                        fill="#F2994A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_673">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-3.5 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <span class="heading-home">2</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_673)">
                      <path
                        d="M8.99993 12.75L4.59143 15.4425L5.78993 10.4175L1.86743 7.0575L7.01618 6.645L8.99993 1.875L10.9837 6.645L16.1332 7.0575L12.2099 10.4175L13.4084 15.4425L8.99993 12.75Z"
                        fill="#F2994A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_673">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-3.5 py-2 text-sm font-medium text-gray-900 bg-white rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <span class="heading-home">3</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_673)">
                      <path
                        d="M8.99993 12.75L4.59143 15.4425L5.78993 10.4175L1.86743 7.0575L7.01618 6.645L8.99993 1.875L10.9837 6.645L16.1332 7.0575L12.2099 10.4175L13.4084 15.4425L8.99993 12.75Z"
                        fill="#F2994A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_673">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-3.5 py-2 text-sm font-medium text-gray-900 bg-white rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <span class="heading-home">4</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_673)">
                      <path
                        d="M8.99993 12.75L4.59143 15.4425L5.78993 10.4175L1.86743 7.0575L7.01618 6.645L8.99993 1.875L10.9837 6.645L16.1332 7.0575L12.2099 10.4175L13.4084 15.4425L8.99993 12.75Z"
                        fill="#F2994A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_673">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  type="button"
                  class="inline-flex items-center px-3.5 py-2 text-sm font-medium text-gray-900 bg-white rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <span class="heading-home">5</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_673)">
                      <path
                        d="M8.99993 12.75L4.59143 15.4425L5.78993 10.4175L1.86743 7.0575L7.01618 6.645L8.99993 1.875L10.9837 6.645L16.1332 7.0575L12.2099 10.4175L13.4084 15.4425L8.99993 12.75Z"
                        fill="#F2994A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_673">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- end search input  -->

        <!-- start search result  -->
        <div class="col-span-7 lg:col-span-5">
          <div class="search-result flex items-start justify-between mb-10">
            <h1 class="heading-auth">
              Egypt : {{ HotelLength }} search results found
            </h1>
            <div class="drop-down">
              <button
                id="dropdownDelayButton"
                data-dropdown-toggle="dropdownDelay"
                data-dropdown-delay="200"
                class="flex items-center rounded-md button-drop py-2 px-3 w-48 justify-between"
                type="button"
              >
                <div class="text-dro flex flex-col items-start">
                  <small class="sort">Sort by</small>
                  <strong class="heading-para">Recommended</strong>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.28 5.96655L8.9333 10.3132C8.41997 10.8266 7.57997 10.8266 7.06664 10.3132L2.71997 5.96655"
                    stroke="#4F4F4F"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                id="dropdownDelay"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200 dropdown-home"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li
                    class="paragraph cursor-pointer"
                    v-for="(dropdownRecommend, i) in dropdownRecommend"
                    :key="i"
                    v-show="dropdownRecommend.title"
                    @click="sort_byMethod(dropdownRecommend.id)"
                  >
                    <a
                      class="px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2"
                    >
                      <span>{{ dropdownRecommend.title }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="loading text-center text-blue-500"
            v-if="store.loadingGeter"
          >
            <p>Loading...</p>
          </div>
          <div
            class="card-box p-5 flex items-start flex-col lg:flex-row gap-6 bg-white mb-5"
            v-for="(dataHotel, i) in filtereByName"
            :key="i"
            v-if="dataHotels"
          >
            <div class="card-img">
              <img
                :src="
                  dataHotel.property.photoUrls[0] ||
                  './../assets/img/Rect16.png'
                "
                alt="home-img"
                width="285px"
                height="200px"
              />
            </div>
            <div
              class="card-body flex flex-col justify-between items-start w-full"
            >
              <div class="card-header w-full">
                <div class="heading flex items-center justify-between w-full">
                  <h4 class="heading-trip-card mb-2">
                    {{
                      dataHotel.property.name.length <= 20
                        ? dataHotel.property.name
                        : dataHotel.property.name.slice(0, 20) + "..."
                    }}
                  </h4>
                  <span
                    class="mb-2 py-1 px-2 rounded-md font-medium"
                    v-if="dataHotel.property.isPreferred"
                    >Book now and receive 15% off</span
                  >
                  <span
                    class="mb-2 py-1 px-2 rounded-md font-medium orange"
                    v-else
                    >Receive 30% discount on a restaurant</span
                  >
                </div>
                <div class="flex items-center footer-span">
                  <div class="svg flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      v-for="(n, i) in Math.floor(
                        dataHotel.property.reviewScore / 2
                      ) > 10
                        ? 5
                        : Math.floor(dataHotel.property.reviewScore / 2)"
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
                  </div>
                  <span class="ml-3"
                    >{{ Math.floor(dataHotel.property.reviewCount) }} ({{
                      Math.floor(dataHotel.property.reviewCount) + " reviews"
                    }})</span
                  >
                </div>
              </div>
              <div class="card-actions flex flex-col justify-between w-full">
                <div class="card-actions-information">
                  <h5 class="mt-5 li-text">
                    Live a little and celbrate with champagne
                  </h5>
                  <div
                    class="description heading flex items-center justify-between mb-6"
                  >
                    <p class="li-text w-full lg:w-9/12">
                      {{ dataHotel.accessibilityLabel }}
                    </p>
                    <span
                      class="head-two py-1 px-2 rounded-md"
                      v-if="!dataHotel.property.isPreferred"
                      >5% off</span
                    >
                  </div>
                </div>
                <div
                  class="card-actions-action flex flex-row justify-between items-center"
                >
                  <router-link
                    :to="{
                      name: 'ProductDetails',
                      params: { id: dataHotel.hotel_id },
                    }"
                    @click="storeMyHotel(dataHotel)"
                  >
                    <button class="sign-in">See availability</button>
                  </router-link>
                  <div class="discount text-right">
                    <span
                      ><del
                        class="red-text mr-2"
                        v-if="dataHotel.property.priceBreakdown.excludedPrice"
                        >$1{{ i }}000</del
                      >
                      <strong
                        class="heading-home"
                        v-if="dataHotel.property.priceBreakdown.excludedPrice"
                      >
                        ${{
                          Math.floor(
                            dataHotel.property.priceBreakdown.excludedPrice
                              .value
                          )
                        }}</strong
                      ></span
                    >
                    <p class="heading-home mt-1.5 mb-4">
                      Includes taxes and fees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav class="flex justify-center" v-if="dataHotels">
            <ul class="flex items-center gap-1 mt-12 mb-10">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                >
                  <g filter="url(#filter0_d_25_579)">
                    <path
                      d="M26 50C20.3431 50 17.5147 50 15.7574 48.2426C14 46.4853 14 43.6569 14 38L14 22C14 16.3431 14 13.5147 15.7574 11.7574C17.5147 10 20.3431 10 26 10H42C47.6569 10 50.4853 10 52.2426 11.7574C54 13.5147 54 16.3431 54 22L54 38C54 43.6569 54 46.4853 52.2426 48.2426C50.4853 50 47.6569 50 42 50H26Z"
                      fill="white"
                      shape-rendering="crispEdges"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32.7524 29.7831L37.2502 25.8391C37.5831 25.5468 37.5831 25.0754 37.2502 24.7831C37.0916 24.6435 36.8752 24.565 36.6496 24.565C36.4239 24.565 36.2075 24.6435 36.0489 24.7831L30.9504 29.2544C30.6165 29.5463 30.6165 30.0184 30.9504 30.3104L36.0487 34.7816C36.2075 34.9212 36.4239 34.9998 36.6496 34.9998C36.8752 34.9998 37.0916 34.9212 37.2504 34.7816C37.5831 34.4893 37.5831 34.0178 37.25 33.7256L32.7524 29.7831Z"
                      fill="#C5C5C5"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_25_579"
                      x="0"
                      y="0"
                      width="68"
                      height="68"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_25_579"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_25_579"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </li>
              <li
                :class="['p-2.5 li-text', page_number == 1 ? 'active' : '']"
                @click="paginationFun(1)"
              >
                1
              </li>
              <li
                :class="['p-2.5 li-text', page_number == 2 ? 'active' : '']"
                @click="paginationFun(2)"
              >
                2
              </li>
              <li
                :class="['p-2.5 li-text', page_number == 3 ? 'active' : '']"
                @click="paginationFun(3)"
              >
                3
              </li>
              <li
                :class="['p-2.5 li-text', page_number == 4 ? 'active' : '']"
                @click="paginationFun(4)"
              >
                4
              </li>
              <li
                :class="['p-2.5 li-text', page_number == 5 ? 'active' : '']"
                @click="paginationFun(5)"
              >
                5
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                >
                  <g filter="url(#filter0_d_25_592)">
                    <path
                      d="M42 50C47.6569 50 50.4853 50 52.2426 48.2426C54 46.4853 54 43.6569 54 38L54 22C54 16.3431 54 13.5147 52.2426 11.7574C50.4853 10 47.6569 10 42 10H26C20.3431 10 17.5147 10 15.7574 11.7574C14 13.5147 14 16.3431 14 22L14 38C14 43.6569 14 46.4853 15.7574 48.2426C17.5147 50 20.3431 50 26 50H42Z"
                      fill="white"
                      shape-rendering="crispEdges"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M35.2476 29.7831L30.7498 25.8391C30.4169 25.5468 30.4169 25.0754 30.7498 24.7831C30.9084 24.6435 31.1248 24.565 31.3504 24.565C31.5761 24.565 31.7925 24.6435 31.9511 24.7831L37.0496 29.2544C37.3835 29.5463 37.3835 30.0184 37.0496 30.3104L31.9513 34.7816C31.7925 34.9212 31.5761 34.9998 31.3504 34.9998C31.1248 34.9998 30.9084 34.9212 30.7496 34.7816C30.4169 34.4893 30.4169 34.0178 30.75 33.7256L35.2476 29.7831Z"
                      fill="#2F80ED"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_25_592"
                      x="0"
                      y="0"
                      width="68"
                      height="68"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_25_592"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_25_592"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </li>
            </ul>
          </nav>
        </div>
        <!-- end search result  -->
      </div>
    </div>
    <div class="container mx-auto covid pb-16">
      <Covid />
    </div>
  </div>
</template>

<script setup>
// import
import { onMounted, ref, computed } from "vue";
import { initDropdowns } from "flowbite";
import { useRoute } from "vue-router";
import { useCounterStore } from "./../store/index.js";
// api-service integration
import api from "./../service/api";

// data
const currentPage = ref(1);
const route = useRoute();
const dataHotels = ref();
const loading = ref(false);
const going = ref([]);
const store = useCounterStore();
const searchByName = ref("");
const dataHotelsHotels = ref("");
const search_type = ref("city");
const min = ref();
const max = ref();
const page_number = ref(1);
const HotelLength = ref();
const dropdownRecommend = ref();
const disabled = ref(false);
const sort_by = ref("");
const DateOut = ref();
const currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
DateOut.value =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1 > 9
    ? currentDate.getMonth() + 1
    : "0" + (currentDate.getMonth() + 1)) +
  "-" +
  (currentDate.getDate() + 1 > 9
    ? currentDate.getDate() + 1
    : "0" + (currentDate.getDate() + 2));

// mounted
// initialize components based on data attribute selectors
onMounted(() => {
  initDropdowns();
  hotelData();
  sortBy();
  getGoing();
});

// methods
// get hotel data
const hotelData = async () => {
  store.SET_LOADING(true);
  api
    .get("/hotels/searchHotels", {
      params: {
        dest_id: route.params.id,
        search_type: "CITY",
        arrival_date: route.query.checkin,
        departure_date: route.query.checkout
          ? route.query.checkout
          : DateOut.value,
        adults: route.query.guests ? route.query.guests : "1",
        children_age: "0,17",
        room_qty: route.query.rooms ? route.query.rooms : "1",
        sort_by: "",
        page_number: page_number.value,
        price_min: min.value,
        price_max: max.value,
        languagecode: "en-us",
        currency_code: "AED",
      },
    })
    .then((response) => {
      // handle success
      dataHotels.value = response.data.data;
      dataHotelsHotels.value = response.data.data.hotels;
      HotelLength.value = dataHotels.value.length;
      store.SET_LOADING(false);
    })
    .catch((error) => {
      // handle error
      return error;
    });
};

// search destination
const getGoing = async () => {
  api
    .get("/hotels/searchDestination", {
      params: { query: "egypt" },
    })
    .then((response) => {
      // handle success
      going.value = response.data.data;
    })
    .catch((error) => {
      // handle error
    });
};

// sort by
const sortBy = async (name) => {
  api
    .get("/hotels/getSortBy", {
      params: {
        dest_id: route.params.id,
        search_type: "CITY",
        arrival_date: route.query.checkin,
        departure_date: route.query.checkout
          ? route.query.checkout
          : route.query.checkin,
        adults: "1",
        children_age: "1,17",
        room_qty: "1",
      },
    })
    .then((response) => {
      dropdownRecommend.value = response.data.data;
    })
    .catch((error) => {
      return error;
    });
};

// pagination [1,2,3,4,5]
const paginationFun = (id) => {
  page_number.value = id;
  hotelData();
};

// sort by value
const sort_byMethod = (sort) => {
  sort_by.value = sort;
  hotelData();
};

// filter by min and max
const minMax = (minV, maxV) => {
  min.value = minV;
  max.value = maxV;
  hotelData();
};

// store myHotel
const storeMyHotel = (data) => {
  store.myHotelAction(data);
};

// computed
// filter by name
let filtereByName = computed(() => {
  HotelLength.value = dataHotelsHotels.value.length;
  return dataHotelsHotels.value.filter((item) => {
    return item.property.name
      .toLowerCase()
      .includes(searchByName.value.toLowerCase());
  });
});
</script>

<style lang="scss" scoped>
.search-products {
  .button-drop {
    border: 1px solid var(--Gray-4, #bdbdbd);
  }
  .gradient {
    transform: translateY(-72px);
    height: 200px;
    background: linear-gradient(180deg, #2969bf 0%, #144e9d 100%);
    z-index: -1;
  }
  .services {
    max-width: 1100px !important;
    transform: translateY(-95px);
    .col-span-7:not(:last-of-type) {
      background: var(--Gray-6, #f2f2f2);
      padding: 11px 12px 12px 12px;
      height: 42px;
    }
    button {
      width: 100%;
    }
  }
  .card-actions {
    h5,
    p {
      text-align: left;
    }
  }
  .card-box {
    border-radius: 5px;
    border: 1px solid var(--Gray-5, #e0e0e0);
    .card-img {
      img {
        width: 285px;
        height: 100%;
        flex-shrink: 0;
        border-radius: 5px;
        background: url(<path-to-image>), lightgray 50% / cover no-repeat;
      }
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
  .search-text {
    background: var(--Gray-6, #f2f2f2);
    label {
      font-size: 16px;
      letter-spacing: 0.16px;
    }
    input {
      border: none;
      outline: none;
    }
  }
  .filter {
    border: 1px solid var(--Gray-5, #e0e0e0);
    .budget-label {
      border-radius: 6px 6px 0px 0px;
      background: var(--Gray-6, #f2f2f2);
      label {
        font-size: 16px;
        letter-spacing: 0.16px;
      }
    }
    input[type="checkbox"] {
      border-radius: 5px;
      border: 1px solid var(--Gray-4, #bdbdbd);
      background: #fff;
    }
    .own-budget {
      span {
        letter-spacing: 0.28px;
      }
    }
    .min-max {
      border: 1px dashed #e5e7eb;
      input::placeholder {
        color: #333;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 16.8px */
        letter-spacing: 0.24px;
      }
      .min,
      .max {
        border: 1px solid var(--Gray-5, #e0e0e0);
        background: #fff;
      }
    }
  }
  .border-box {
    button {
      border-radius: 0px;
      border: 1px solid var(--Gray-5, #e0e0e0);
      &:focus {
        border-radius: 4px;
        outline: none;
      }
    }
  }
  .heading {
    span {
      background: var(--Red, #eb5757);
      color: #fff;
      font-size: 13px;
      line-height: 18px; /* 138.462% */
      letter-spacing: 0.26px;
    }
    span.orange {
      background: var(--Orange, #f2994a);
    }
    span.head-two {
      width: 65px;
      background: var(--Green-1, #219653);
    }
  }
  .covid {
    margin-bottom: -80px;
  }
}
@media (max-width: 1200px) {
  .search-products {
    .border-box {
      button {
        padding: 8px;
      }
    }
  }
}
@media (max-width: 1023px) {
  .search-products {
    .card-body {
      width: 100% !important;
    }
    .border-box {
      button {
        padding: 8px 12px;
      }
    }
  }
}
</style>
