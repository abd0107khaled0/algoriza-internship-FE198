import { defineStore } from 'pinia'
import createPersistedState from 'vuex-persistedstate';
export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: 'Eduardo',
        //Check if pinia works
        check: "test",
        lang: "en",
        //Loading
        loading: {
            ui: false,
            DataTable: false,
            customSection: false,
        },
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

    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        loginGetter: (state) => state.Auth = JSON.parse(localStorage.getItem("Auth"))
    },
    actions: {
        LoginAuth() {
        },
        SET_LOADING(state, { name, value }) {
            state.loading[name] = value
        }
    },
})
