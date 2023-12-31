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

        //Auth user
        token: null,
        Auth: {
            email: '',
            password: '',
            status: '',
        },

        // loading
        loading: false,

        // my tips data
        myHotel: {},
        myTips: [],

    }),
    getters: {
        loginGetter: (state) => state.Auth,
        loadingGeter: (state) => state.loading,
        myTripsGetter: (state) => state.myTips,
        myHotelGetter: (state) => state.myHotel,

    },
    actions: {

        LoginAuth(value) {
            this.Auth = value
        },
        SET_LOADING(value) {
            this.loading = value
        },
        myHotelAction(value) {
            this.myHotel = value
        },
        myTripsAction(value) {
            this.myTips.push(value)
        },
    },
    persist: true,
})
