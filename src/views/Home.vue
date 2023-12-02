<template>
  <div class="home">
    <div class="container mx-auto">
      <!-- start img-box -->
      <div class="img mt-3 relative">
        <img src="./../assets/img/Rect2.png" alt="Rect2.png" class="w-full" />
        <div
          class="heading-body absolute top-1/2 left-1/2 text-white text-center"
        >
          <h1 class="mb-4 font-bold">Enjoy Your Dream Vacation</h1>
          <p class="font-normal text-xl">
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </p>
        </div>
      </div>
      <!-- end img-box -->

      <!-- start services -->
      <div class="services-box relative">
        <div
          class="services grid grid-cols-6 lg:flex gap-4 justify-between items-center absolute left-1/2 z-10"
        >
          <div class="drop-down-box col-span-2 lg:col-span-2">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="information flex items-center"
              type="button"
            >
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
                  d="M3.01675 7.07508C4.65842 -0.141583 15.3501 -0.13325 16.9834 7.08342C17.9417 11.3168 15.3084 14.9001 13.0001 17.1168C12.1935 17.8947 11.1165 18.3294 9.99592 18.3294C8.87529 18.3294 7.79835 17.8947 6.99175 17.1168C4.69175 14.9001 2.05842 11.3084 3.01675 7.07508V7.07508Z"
                  stroke="#828282"
                  stroke-width="1.5"
                />
              </svg>

              <span class="w-full text-left"> Where are you going? </span>
              <svg
                v-if="statusSvg"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M1.72027 6.03345L6.06694 1.68678C6.58027 1.17345 7.42027 1.17345 7.93361 1.68678L12.2803 6.03345"
                  stroke="#828282"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
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
                    :href="'/search/' + going.dest_id"
                    class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-2"
                  >
                    <span>{{ going.region }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- check in data -->
          <div
            class="information flex items-center col-span-2 lg:col-span-1 lg:w-36"
            @click="$refs.dateOne.click()"
          >
            <input type="date" ref="dateOne" class="hidden" :min="minDate" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.6665 1.66675V4.16675"
                stroke="#828282"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3335 1.66675V4.16675"
                stroke="#828282"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.9165 7.5752H17.0832"
                stroke="#828282"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z"
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
              />
            </svg>
            <span>Check in date</span>
          </div>
          <!-- Check out date -->
          <div
            class="information flex items-center col-span-2 lg:col-span-1 lg:w-36"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.6665 1.66675V4.16675"
                stroke="#828282"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3335 1.66675V4.16675"
                stroke="#828282"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.9165 7.5752H17.0832"
                stroke="#828282"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z"
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
              />
            </svg>
            <span>Check out date</span>
          </div>
          
          <!-- Guests -->
          <div
            class="information flex items-center col-span-2 lg:col-span-1 lg:w-36"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1870_84)">
                <path
                  d="M15.1166 18.0168C14.3833 18.2335 13.5166 18.3335 12.5 18.3335H7.49997C6.4833 18.3335 5.61663 18.2335 4.8833 18.0168C5.06663 15.8502 7.29163 14.1418 9.99997 14.1418C12.7083 14.1418 14.9333 15.8502 15.1166 18.0168V18.0168Z"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.4998 1.66675H7.49984C3.33317 1.66675 1.6665 3.33341 1.6665 7.50008V12.5001C1.6665 15.6501 2.6165 17.3751 4.88317 18.0167C5.0665 15.8501 7.2915 14.1417 9.99984 14.1417C12.7082 14.1417 14.9332 15.8501 15.1165 18.0167C17.3832 17.3751 18.3332 15.6501 18.3332 12.5001V7.50008C18.3332 3.33341 16.6665 1.66675 12.4998 1.66675ZM9.99984 11.8084C8.34984 11.8084 7.0165 10.4667 7.0165 8.81675C7.0165 7.16675 8.34984 5.83341 9.99984 5.83341C11.6498 5.83341 12.9832 7.16675 12.9832 8.81675C12.9832 10.4667 11.6498 11.8084 9.99984 11.8084Z"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9833 8.81683C12.9833 10.4668 11.6499 11.8085 9.99993 11.8085C8.34993 11.8085 7.0166 10.4668 7.0166 8.81683C7.0166 7.16683 8.34993 5.8335 9.99993 5.8335C11.6499 5.8335 12.9833 7.16683 12.9833 8.81683Z"
                  stroke="#828282"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1870_84">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <!-- <span>Guests</span> -->
            <input
              type="number"
              class="w-full border border-none bg-transparent p-0"
              placeholder="Guests"
              v-model="searchResultData.guests"
            />
          </div>
          <!-- Rooms -->
          <div
            class="information flex items-center col-span-2 lg:col-span-1 lg:w-36"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="transform translate-y-0.5"
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
              />
            </svg>
            <!-- <span>Rooms</span> -->
            <input
              type="number"
              class="w-full border border-none bg-transparent p-0"
              placeholder="Rooms"
              v-model="searchResultData.rooms"
            />
          </div>
          <!-- Search -->
          <div class="search col-span-2 lg:w-36">
            <a href="/search/-290692"> Search </a>
          </div>
        </div>
      </div>
      <!-- end services -->

      <!-- start check covid -->
      <Covid />
      <!-- end check covid -->

      <!-- start dream vacation -->
      <div class="dream-vacation">
        <h2 class="heading-auth mb-4">Enjoy your dream vacation</h2>
        <p class="heading-home mb-8">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
        <div class="name-vacation grid gap-5">
          <div
            class="vacation-box"
            v-for="(vacation, index) in vacation"
            :key="index + 'n'"
          >
            <img
              class="rounded-t-lg w-full"
              :src="'src/assets/img/' + vacation.img"
              alt=""
            />
            <div class="">
              <h5 class="mb-1.5 mt-3.5 heading-auth">
                {{ vacation.name }}
              </h5>
              <span class="heading-label"
                >{{ vacation.property }} properties</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- end dream vacation -->

      <!-- start inspiration trip -->
      <div class="inspiration-trip">
        <h2 class="heading-auth mb-6">Get inspiration for your next trip</h2>
        <div class="name-inspiration grid gap-5">
          <div
            class="vacation-box relative"
            v-for="(inspiration, index) in inspiration"
            :key="index + 'n'"
          >
            <img
              class="rounded-t-lg w-full"
              :src="'src/assets/img/' + inspiration.img"
              alt=""
            />
            <div class="body-card absolute px-5 text-white">
              <h5 class="mb-1.5 mt-3.5 heading-auth">
                {{ inspiration.name }}
              </h5>
              <span class="heading-label"
                >{{ inspiration.property }} properties</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- end inspiration trip -->

      <!-- start popularHotels -->
      <div class="dream-vacation hotels">
        <h2 class="heading-auth mb-6">Popular hotels</h2>
        <div class="name-vacation grid gap-5">
          <div
            class="vacation-box"
            v-for="(popularHotels, index) in popularHotels"
            :key="index + 'n'"
          >
            <img
              class="rounded-t-lg w-full"
              :src="'src/assets/img/' + popularHotels.img"
              alt=""
            />
            <div class="">
              <h5 class="mb-1.5 mt-3.5 heading-auth">
                {{ popularHotels.name }}
              </h5>
              <span class="heading-label"
                >{{ popularHotels.property }} properties</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- end popularHotels -->

      <!-- start download the mobile -->
      <div class="download relative">
        <img src="./../assets/img/Rect15.png" alt="Rect15" class="img-h" />
        <div class="content absolute flex justify-between">
          <div class="download-text">
            <p class="heading-auth mb-8">
              Download the mobile application for bonus coupons and travel codes
            </p>
            <button class="sign-in">Download mobile app</button>
          </div>
          <img
            src="./../assets/img/smartphone .png"
            alt="smartphone"
            class="hidden lg:block"
          />
        </div>
        <div class="explore text-center">
          <h4 class="heading-auth mb-4 mt-20">
            Explore the world with My Dream place
          </h4>
          <a href="" class="link">Discover new places and experiences</a>
        </div>
      </div>
      <!-- end download the mobile -->
    </div>
  </div>
</template>

<script setup>
// import
import Covid from "./../components/Covid.vue";
import { onMounted, ref, reactive } from "vue";
import { initDropdowns } from "flowbite";
import { useCounterStore } from "./../store/index.js";
import api from "../service/api";

// data
const vacation = reactive([
  {
    img: "Rect1.png",
    name: "Australia",
    property: "2246",
  },
  {
    img: "Rect5.png",
    name: "Japan",
    property: "1278",
  },
  {
    img: "Rect8.png",
    name: "New Zealand",
    property: "480",
  },
  {
    img: "Rect10.png",
    name: "Greece",
    property: "320",
  },
]);

const popularHotels = reactive([
  {
    img: "Rect4.png",
    name: "Lakeside Motel Warefront",
    property: "2246",
  },
  {
    img: "Rect7.png",
    name: "Recce Graham resort",
    property: "1278",
  },
  {
    img: "Rect9.png",
    name: "Fireside Dinners",
    property: "480",
  },
  {
    img: "Rect12.png",
    name: "Oculous Inn Stay",
    property: "320",
  },
]);

const inspiration = reactive([
  {
    img: "Rect3.png",
    name: "Sydeny’s 10 most fashionable 5 star hotels",
    property:
      "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
  },
  {
    img: "Rect13.png",
    name: "Top cities for Vegan Travellers",
    property:
      "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
  },
  {
    img: "Rect14.png",
    name: "World’s top destinations during and post covid timeline",
    property:
      "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
  },
]);

const minDate = ref();
const currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
minDate.value =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1) +
  "-" +
  currentDate.getDate();

const searchResultData = ref({
  checkin: minDate.value,
  checkout: "",
  guests: "",
  rooms: "",
});



const store = useCounterStore();

const Auth = store.loginGetter;

const statusSvg = ref(true);

const going = ref([]);

// mounted
// initialize components based on data attribute selectors
onMounted(() => {
  initDropdowns();
  getGoing();
});

// methods
const toggle = function () {
  statusSvg.value = !statusSvg.value;
};

const getGoing = async () => {
  api
    .get("/hotels/searchDestination", {
      params: { query: "egypt" },
    })
    .then((response) => {
      // handle success
      going.value = response.data.data;
      console.log(going.value);
    })
    .catch((error) => {
      // handle error
    });
};
</script>

<style lang="scss" scoped>
.home {
  input::placeholder {
    color: var(--Gray-2, #4f4f4f);
    font-family: Work Sans;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.26px;
  }
  .img {
    .heading-body {
      transform: translate(-50%, -50%);
      h1 {
        font-size: 32px;
      }
      p {
        letter-spacing: 0.4px;
      }
    }
  }
  .services {
    bottom: -35px;
    transform: translateX(-50%);
    padding: 10px 13px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.15);
    width: 85%;
    .drop-down-box {
      // width: 180px;
      button {
        width: 100%;
      }
    }
  }
  .dream-vacation {
    margin-block-end: 60px;
    p {
      max-width: 610px;
    }
    .name-vacation {
      grid-template-columns: repeat(auto-fill, minmax(226px, 1fr));
      img {
        height: 220px;
        width: 295px;
      }
      h5 {
        font-size: 20px;
      }
      span {
        letter-spacing: 0.28px;
        word-spacing: 2px;
      }
    }
  }

  .inspiration-trip {
    margin-block-end: 60px;
    p {
      max-width: 610px;
    }
    .name-inspiration {
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      .vacation-box {
        img {
          height: 280px;
        }
        .body-card {
          bottom: 0%;
          transform: translateY(-10%);
        }
        h5 {
          font-size: 20px;
          color: #fff;
        }
        span {
          letter-spacing: 0.28px;
          color: #fff;
        }
      }
    }
  }
  .hotels {
    img {
      height: 300px !important;
    }
  }

  .download {
    overflow: hidden;
    img.img-h {
      height: 280px !important;
    }
    .content {
      top: -0.1%;
      .download-text {
        transform: translate(10%, 30%);
        p {
          color: #fff;
          width: 516px;
        }
        button {
          width: fit-content;
        }
      }
      img {
        transform: translateX(-90px);
        height: 100%;
        rotate: (-1deg);
        color: #fff;
      }
    }
  }
}
@media (max-width: 898px) {
  .home {
    .services-box {
      margin-bottom: 155px;
      .services {
        width: 100%;
        bottom: -110px;
      }
    }
    .download-text {
      p {
        font-size: 24px;
      }
    }
  }
}
@media (max-width: 995px) {
}
</style>
