import Vuex from 'vuex'
import Vue from 'vue'
//引入getters与actions
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
     logined: false,
}


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})