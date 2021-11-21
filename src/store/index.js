import { createStore } from 'vuex';
import * as api from '../utils/api';

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
        setPostSuccessTrue(state) {
            state.isPostSuccess = true;
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
        async sendData({ commit }, data) {
            try {
              const res = await api.sendData(data);
      
              if (res.success === false) {
                commit('setPostSuccessTrue');
              }
            } catch (err) {
              console.log(err);
            }
          }
        }
      });

export default store