<template>
  <div class="register container mx-auto">
    <Dream />
    <div class="register-body mx-auto mt-24">
      <form
        class="flex flex-col gap-6"
        method="post"
        @submit.prevent="registerAction"
      >
        <h1 class="heading-auth mb-4">Register</h1>
        <div class="email">
          <label class="heading-label" for="email"> Email address</label>
          <input
            type="email"
            required
            name="email"
            v-model="register.email"
            class="input mt-1 border-none"
          />
        </div>
        <div class="password-body">
          <label class="heading-label" for="password">Password</label>
          <div class="password input-box mt-1">
            <input
              :type="show ? 'text' : 'password'"
              required
              name="password"
              v-model="register.password"
              class="outline-none bg-transparent w-full border-none"
            />
            <i
              :class="['fa-regular', show ? 'fa-eye' : 'fa-eye-slash']"
              @click="show = !show"
            ></i>
          </div>
        </div>
        <div class="password-confirm-body">
          <label class="heading-label" for="confirm password"
            >Confirm password</label
          >
          <div class="confirm-password input-box mt-1">
            <input
              :type="showConfirm ? 'text' : 'password'"
              required
              name="confirm password"
              v-model="register.confirmPassword"
              class="outline-none bg-transparent w-full border-none"
            />
            <i
              :class="['fa-regular', showConfirm ? 'fa-eye' : 'fa-eye-slash']"
              @click="showConfirm = !showConfirm"
            ></i>
          </div>
        </div>
        <button type="submit" class="submit w-50">Submit</button>
        <p class="paragraph">
          Already have an account?
          <a href="/sign-in" class="cursor-pointer"> Sign in</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
// import
import Dream from "../../components/Dream.vue";
import { useCounterStore } from "./../../store/index";
import { ref } from "vue";
import { useRouter } from "vue-router";

// data
const router  = useRouter()
const store = useCounterStore();
const show = ref(false);
const showConfirm = ref(false);
const register = ref({
  email: "",
  password: "",
  confirmPassword: "",
  status: false,
});
console.log(register.value)

// methods
console.log(store.loginGetter)
const registerAction = () => {
  if (register.value.password == register.value.confirmPassword) {
    register.value.status = true;
    localStorage.setItem("Auth_register", JSON.stringify(register.value));
    localStorage.setItem("Auth", JSON.stringify(register.value));
    router.push('/')
  }
};
</script>

<style lang="scss" scoped>
.register {
  .register-body {
    width: 401px;
  }
}
</style>
