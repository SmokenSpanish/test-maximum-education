import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            cities: [],
            isPostSuccess: false
        }
    },
    mutations: {
        setCities(state, cities) {
            state.cities = cities;
        },
        setPostSuccsessTrue(state) {
            state.isPostSuccsess = true;
        }
    },
    actions: {},
    modules: {},
})

export default store