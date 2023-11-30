<template>
  <div class="checkout py-12">
    <div class="container mx-auto">
      <h2 class="heading-trip font-semibold">Secure your reservation</h2>
      <div class="covid">
        <Covid />
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-3 lg:col-span-2 md:col-span-3 ...">
          <!--start rom -->
          <div class="rom-one mb-8">
            <div
              class="rom-heading flex items-center gap-4 py-4 px-5 text-white font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M21.5835 4.79502L15.7618 2.61335C14.7935 2.25169 13.2068 2.25169 12.2385 2.61335L6.41685 4.79502C5.07518 5.29669 3.97852 6.88335 3.97852 8.30669V16.975C3.97852 18.3517 4.88852 20.16 5.99685 20.9884L11.0135 24.7334C12.6585 25.97 15.3652 25.97 17.0102 24.7334L22.0268 20.9884C23.1352 20.16 24.0452 18.3517 24.0452 16.975V8.30669C24.0218 6.88335 22.9252 5.29669 21.5835 4.79502ZM13.9185 8.20169C15.2952 8.20169 16.4152 9.32169 16.4152 10.6984C16.4152 12.0517 15.3535 13.1367 14.0118 13.1834H13.8952C12.4952 13.1367 11.4452 12.0517 11.4452 10.6984C11.4335 9.32169 12.5535 8.20169 13.9185 8.20169ZM16.5552 19.0867C15.8435 19.5534 14.9218 19.7984 14.0002 19.7984C13.0785 19.7984 12.1452 19.565 11.4452 19.0867C10.7802 18.6434 10.4185 18.0367 10.4068 17.3717C10.4068 16.7184 10.7802 16.0884 11.4452 15.645C12.8568 14.7117 15.1552 14.7117 16.5668 15.645C17.2318 16.0884 17.6052 16.695 17.6052 17.36C17.5935 18.0134 17.2202 18.6434 16.5552 19.0867Z"
                  fill="white"
                />
              </svg>
              <h6 class="text-lg">Room 1</h6>
              <p class="text-base">
                2 adults, 1 double bed and 1 twin bed, Non-smoking
              </p>
            </div>
            <div class="rom-body p-8">
              <form action="" method="">
                <div class="information-card flex flex-col">
                  <div class="name flex gap-5 mb-5">
                    <div class="first-name">
                      <label class="heading-label" for="">First name</label>
                      <input type="text" class="input mt-1" name="firstName" />
                    </div>
                    <div class="last-name">
                      <label class="heading-label" for="">Last name</label>
                      <input type="text" class="input mt-1" name="lastName" />
                    </div>
                  </div>
                  <div class="mobile flex items-end gap-5 mb-5">
                    <div class="mobile-body">
                      <label class="heading-label" for="">Mobile number</label>
                      <div class="flex items-center input inform">
                        <img src="./../assets/img/img1.png" alt="img1.png" />
                        <span>+61</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.2797 5.96655L8.93306 10.3132C8.41973 10.8266 7.57973 10.8266 7.06639 10.3132L2.71973 5.96655"
                            stroke="#4F4F4F"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <input type="text" class="input mt-1" name="" />
                  </div>
                </div>
                <div class="checkbox flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <p class="heading-home">
                    Receive text alerts about this trip.
                  </p>
                </div>
              </form>
            </div>
          </div>
          <!--end rom -->

          <!--start payment -->
          <div class="rom-one mb-8">
            <div
              class="rom-heading flex items-center gap-4 py-4 px-5 text-white font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M22.1667 17.5C19.5883 17.5 17.5 19.5883 17.5 22.1667C17.5 23.0417 17.745 23.87 18.1767 24.57C18.588 25.2612 19.1722 25.8335 19.8718 26.2303C20.5714 26.6272 21.3623 26.835 22.1667 26.8333C23.87 26.8333 25.3517 25.9233 26.1567 24.57C26.5883 23.87 26.8333 23.0417 26.8333 22.1667C26.8333 19.5883 24.745 17.5 22.1667 17.5ZM24.5817 21.665L22.0967 23.9633C21.9333 24.115 21.7117 24.1967 21.5017 24.1967C21.28 24.1967 21.0583 24.115 20.8833 23.94L19.7283 22.785C19.5656 22.6203 19.4743 22.3982 19.4743 22.1667C19.4743 21.9352 19.5656 21.713 19.7283 21.5483C20.0667 21.21 20.6267 21.21 20.965 21.5483L21.525 22.1083L23.3917 20.3817C23.7417 20.055 24.3017 20.0783 24.6283 20.4283C24.955 20.7783 24.9317 21.3267 24.5817 21.665Z"
                  fill="white"
                />
                <path
                  d="M25.6668 8.80602V9.33102C25.6668 9.97269 25.1418 10.4977 24.5002 10.4977H3.50016C2.8585 10.4977 2.3335 9.97269 2.3335 9.33102V8.79436C2.3335 6.12269 4.49183 3.96436 7.1635 3.96436H20.8252C23.4968 3.96436 25.6668 6.13436 25.6668 8.80602Z"
                  fill="white"
                />
                <path
                  d="M2.3335 13.4144V19.2011C2.3335 21.8728 4.49183 24.0311 7.1635 24.0311H14.4668C15.1435 24.0311 15.7268 23.4594 15.6685 22.7828C15.5052 20.9978 16.0768 19.0611 17.6635 17.5211C18.3168 16.8794 19.1218 16.3894 19.9968 16.1094C21.4552 15.6428 22.8668 15.7011 24.1152 16.1211C24.2907 16.1824 24.4783 16.201 24.6624 16.1751C24.8465 16.1493 25.0217 16.0798 25.1735 15.9725C25.3253 15.8652 25.4493 15.7232 25.5351 15.5583C25.6209 15.3934 25.6661 15.2103 25.6668 15.0244V13.4028C25.6668 12.7611 25.1418 12.2361 24.5002 12.2361H3.50016C2.8585 12.2478 2.3335 12.7728 2.3335 13.4144ZM9.3335 20.1228H7.00016C6.52183 20.1228 6.12516 19.7261 6.12516 19.2478C6.12516 18.7694 6.52183 18.3728 7.00016 18.3728H9.3335C9.81183 18.3728 10.2085 18.7694 10.2085 19.2478C10.2085 19.7261 9.81183 20.1228 9.3335 20.1228Z"
                  fill="white"
                />
              </svg>
              <h6 class="text-lg">Payment options</h6>
            </div>
            <div class="rom-body py-8">
              <div class="debt-card">
                <span class="mx-6 px-2 pb-2">Debit/Credit Card</span>
                <hr class="mt-2" />
              </div>
              <div class="total-card flex gap-1.5 p-8">
                <div
                  class="img p-1 flex items-center justify-center"
                  v-for="(cardImg, i) in cardImg"
                  :key="i"
                >
                  <img :src="cardImg" :alt="cardImg" />
                </div>
              </div>
              <form action="" methods="" class="px-8">
                <label for="">Name on card</label>
                <div class="name-card mt-1 flex items-center gap-4 mb-5">
                  <input type="text" name="name-card" class="input" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_2031)">
                      <path
                        d="M9.99996 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 9.99996C18.3333 5.41663 14.5833 1.66663 9.99996 1.66663C5.41663 1.66663 1.66663 5.41663 1.66663 9.99996C1.66663 14.5833 5.41663 18.3333 9.99996 18.3333Z"
                        stroke="#27AE60"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.45825 9.99993L8.81659 12.3583L13.5416 7.6416"
                        stroke="#27AE60"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2031">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <label for="">Debit/Credit card number</label>
                <div class="name-card mt-1 flex items-center gap-4 mb-5">
                  <input type="text" name="name-card" class="input" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_2031)">
                      <path
                        d="M9.99996 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 9.99996C18.3333 5.41663 14.5833 1.66663 9.99996 1.66663C5.41663 1.66663 1.66663 5.41663 1.66663 9.99996C1.66663 14.5833 5.41663 18.3333 9.99996 18.3333Z"
                        stroke="#27AE60"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.45825 9.99993L8.81659 12.3583L13.5416 7.6416"
                        stroke="#27AE60"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2031">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="expiration-date">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Select an option</label
                  >
                  <div class="select flex items-center gap-3 mb-5">
                    <select id="countries" class="input">
                      <option selected>April</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <select id="countries" class="input">
                      <option selected>2026</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      class="ml-1"
                    >
                      <g clip-path="url(#clip0_1_2031)">
                        <path
                          d="M9.99996 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 9.99996C18.3333 5.41663 14.5833 1.66663 9.99996 1.66663C5.41663 1.66663 1.66663 5.41663 1.66663 9.99996C1.66663 14.5833 5.41663 18.3333 9.99996 18.3333Z"
                          stroke="#27AE60"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.45825 9.99993L8.81659 12.3583L13.5416 7.6416"
                          stroke="#27AE60"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_2031">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div class="secure flex items-center gap-5 mb-5">
                  <div class="secure-code">
                    <input type="number" name="secure-code" class="input" />
                  </div>
                  <div class="billing">
                    <input
                      type="number"
                      name="secure-code"
                      class="input"
                      max="4"
                    />
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_2031)">
                      <path
                        d="M9.99996 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 9.99996C18.3333 5.41663 14.5833 1.66663 9.99996 1.66663C5.41663 1.66663 1.66663 5.41663 1.66663 9.99996C1.66663 14.5833 5.41663 18.3333 9.99996 18.3333Z"
                        stroke="#27AE60"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.45825 9.99993L8.81659 12.3583L13.5416 7.6416"
                        stroke="#27AE60"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2031">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </form>
            </div>
          </div>
          <!--end payment -->

          <!-- start Important information about your booking -->
          <div class="rom-one information-booking mb-8">
            <div
              class="rom-heading flex items-center gap-4 py-4 px-5 text-white font-medium"
            >
              <h6 class="text-lg heading-home">
                Important information about your booking
              </h6>
            </div>
            <div class="rom-body p-8">
              <ul class="mb-8">
                <li
                  v-for="(informBooking, i) in informBooking"
                  :key="i"
                  class="flex items-start gap-1 heading-para mb-1"
                >
                  <span>{{ i + 1 }}.</span>
                  <p>{{ informBooking.name }}</p>
                </li>
              </ul>
              <p class="li-text mb-6">
                By clicking the button below, I acknowledge that I have reviewed
                the <a href="" class="see-more"> Privacy Statement </a> and have
                reviewd and accept the
                <a href="" class="see-more"> Rules and Restrictions </a> and
                <a href="" class="see-more"> Terms </a> of Use.
              </p>
              <button class="sign-in mb-8">Complete Booking</button>
              <div class="personal-information flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 7.75C10.11 7.75 9.75 8.54 9.75 10V10.62H14.25V10C14.25 8.54 13.89 7.75 12 7.75Z"
                    fill="#219653"
                  />
                  <path
                    d="M11.998 15.0979C12.2897 15.0979 12.5695 14.9821 12.7758 14.7758C12.9821 14.5695 13.098 14.2897 13.098 13.9979C13.098 13.7062 12.9821 13.4264 12.7758 13.2201C12.5695 13.0138 12.2897 12.8979 11.998 12.8979C11.7063 12.8979 11.4265 13.0138 11.2202 13.2201C11.0139 13.4264 10.898 13.7062 10.898 13.9979C10.898 14.2897 11.0139 14.5695 11.2202 14.7758C11.4265 14.9821 11.7063 15.0979 11.998 15.0979Z"
                    fill="#219653"
                  />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.38 14.5C17.38 16.7 16.7 17.38 14.5 17.38H9.5C7.3 17.38 6.62 16.7 6.62 14.5V13.5C6.62 11.79 7.03 11 8.25 10.73V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V10.73C16.97 11 17.38 11.79 17.38 13.5V14.5Z"
                    fill="#219653"
                  />
                </svg>
                <p class="li-text">
                  We use secure transmission and encrypted storage to protect
                  your personal information
                </p>
              </div>
            </div>
          </div>
          <!-- end Important information about your booking -->
        </div>

        <div class="col-span-3 lg:col-span-1 md:col-span-3 ...">
          <div class="card-box flex flex-col gap-6 bg-white mb-5">
            <div class="card-img w-full">
              <img src="./../assets/img/Rect17.png" class="w-full" alt="" />
            </div>
            <div
              class="card-body flex flex-col justify-between items-start p-8 pt-0"
            >
              <div class="card-header">
                <h4 class="heading-trip-card mb-2 heading-auth">
                  Lakeside Motel Warefront
                </h4>
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
                  <h5 class="red-text mb-2 mt-4">Non refundable</h5>
                  <ul class="flex flex-col gap-2">
                    <li class="li-text">Check in: Sunday, March 18, 2022</li>
                    <li class="li-text">Check out: Tuesday, March 20, 2022</li>
                    <li class="li-text">2 night stay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- start rom -->
          <div class="rom-one price-details mb-8">
            <div
              class="rom-heading flex items-center gap-4 py-4 px-5 text-white font-medium"
            >
              <h6 class="heading-label">Price Details</h6>
            </div>
            <div class="rom-body">
              <ul class="px-4 py-6">
                <li class="flex justify-between items-center mb-3 li-text">
                  <span>1 room X 2 nights</span><span>$ 120.32</span>
                </li>
                <li class="flex justify-between items-center li-text">
                  <span>Tax and service fees</span><span>$ 8.32</span>
                </li>
              </ul>
              <hr />
              <div
                class="px-4 py-6 flex justify-between items-center heading-label total"
              >
                <span class="text-base">Total</span>
                <span class="text-base">$130</span>
              </div>
            </div>
          </div>
          <!-- end rom -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import
import { reactive } from "vue";

// data
const cardImg = reactive([
  "/src/assets/img/img2.png",
  "/src/assets/img/img1.png",
  "/src/assets/img/img5.png",
  "/src/assets/img/img4.png",
]);

const informBooking = reactive([
  {
    name: "This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay.",
  },
  {
    name: "Stay extensions will require a new reservation.",
  },
  {
    name: "Front desk staff will greet guests on arrival",
  },
  {
    name: "No refunds will be issued for late check-in or early check-out.",
  },
]);

// mounted

// methods

// computed
</script>

<style lang="scss" scoped>
.checkout {
  height: 1820px;
  background: #f4f4f4;
  h2 {
    font-size: 32px;
  }
  .covid {
    margin-top: -50px;
    margin-bottom: -10px;
  }
  .rom-one {
    .rom-heading {
      border-radius: 6px 6px 0px 0px;
      background: var(--Blue-1, #2f80ed);
    }
    .rom-body {
      border-radius: 0 0 6px 6px;
      background: #fff;
      .information-card {
        .name {
          input {
            display: flex;
            width: 240px;
            padding: 11px 12px 12px 12px;
            align-items: center;
            gap: 10px;
            &:focus {
              background: #fff;
            }
          }
        }
      }
      .mobile {
        .inform {
          width: 150px;
          padding: 10px 12px;
        }
        input {
          width: 338px;
        }
      }
    }
    input[type="checkbox"] {
      border-radius: 5px;
      border: 1px solid var(--Gray-4, #bdbdbd);
      background: #fff;
    }
    p.heading-home {
      font-size: 14px;
      letter-spacing: 0.28px;
    }
  }
  .debt-card {
    span {
      border-bottom: 3px solid var(--Blue-1, #2f80ed);
    }
  }
  .total-card {
    .img {
      border-radius: 5px;
      background: var(--Gray-6, #f2f2f2);
      width: 60px;
      height: 40px;
      img {
      }
    }
  }
  .name-card {
    input {
      width: 500px;
    }
  }
  .select {
    select {
      width: 150px;
    }
  }
  .secure {
    input {
      width: 240px;
    }
  }

  //   information-booking
  .information-booking {
    .rom-heading {
      border-radius: 6px 6px 0px 0px;
      background: var(--Yellow, #f2c94c);
      h6 {
        font-size: 18px;
      }
    }
  }
  p.li-text {
    line-height: 19.6px;
    a {
      line-height: 140%;
    }
  }
  button.sign-in {
    padding: 12px 18px;
    width: fit-content;
  }
  h4.heading-auth {
    font-size: 18px;
  }
  .card-box {
    border-radius: 6px;
  }
  .price-details {
    .rom-heading {
      border-radius: 6px 6px 0px 0px;
      background: #85e0ab;
      h6 {
        font-size: 16px;
        letter-spacing: 0.16px;
      }
    }
  }
}
</style>
