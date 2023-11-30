import { defineStore } from 'pinia'
import createPersistedState from 'vuex-persistedstate';
export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Eduardo',
        //Check if pinia works
        check: "test",
        lang: "en",
        //Success Messages
        success: {
            createContact: false,
        },
        //Errors
        error: null,
        errorsList: [],
        errors: {
            signup: null,
            public: null,
        },

        //Auth user
        token: null,
        Auth: {
            // avatar: null,
            email: '',
            password: '',
            status: '',
        },
        // loading
        loading: false

    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        loginGetter: (state) => state.Auth,
        loadingGeter: (state) => state.loading
    },
    actions: {

        LoginAuth(value) {
            this.Auth = value
        },
        SET_LOADING(value) {
            this.loading = value
        }
    },
    persist: true,
})
