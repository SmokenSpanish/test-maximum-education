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
    actions: {
        async getCities({ commit }) {
            try {
                const cities = await api.getCities();
                commit('setCities', cities);
            } catch (err) {
                console.log(err);
            }
        },
    },
    modules: {},
})

export default store