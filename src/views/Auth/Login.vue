<template>
  <div class="register container mx-auto">
    <Dream />
    <div class="register-body mx-auto mt-24">
      <form class="flex flex-col gap-6" @submit.prevent="loginAction()">
        <h1 class="heading-auth mb-4">Sign in</h1>
        <div class="email">
          <label class="heading-label" for="email"> Email address</label>
          <input
            type="email"
            required
            name="email"
            v-model="login.email"
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
              v-model="login.password"
              class="outline-none bg-transparent w-full border-none"
            />
            <i
              :class="['fa-regular', show ? 'fa-eye' : 'fa-eye-slash']"
              @click="show = !show"
            ></i>
          </div>
        </div>
        <p class="text-center text-red-600" v-if="login.status">
          There is something wrong with your data. Check it
        </p>
        <button type="submit" class="submit w-50">Sign in</button>
        <p class="paragraph">
          Don’t have an account?
          <a href="/register" class="cursor-pointer"> Register</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
// import
import Dream from "../../components/Dream.vue";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useCounterStore } from "../../store";

// data
const router = useRouter()
const store = useCounterStore()
const show = ref(false);
const showConfirm = ref(false);
const login = ref({
  email: "",
  password: "",
  status: false,
});

// methods
const loginAction = () => {
  let user = JSON.parse(localStorage.getItem('Auth_register'));
  if (user) {
    if (
      login.value.email == user.email &&
      login.value.password == user.password
    ) {
      router.push('/')
      store.LoginAuth(login.value)
    } else {
      login.value.status = true;
    }
  } else {
    login.value.status = true;
  }
  setTimeout(() => (login.value.status = false), 2000);
};
</script>

<style lang="scss" scoped>
.register {
  .register-body {
    width: 401px;
  }
}
</style>
