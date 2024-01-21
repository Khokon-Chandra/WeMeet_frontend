import { createStore } from 'vuex';
import * as actions from './actions';
import * as adminActions from './admin/actions';
import * as adminMutations from './admin/mutations';
import adminState from './admin/state';
import * as mutations from './mutations';
import state from './state';


const moduleA = {
    state,
    getters:{},
    actions,
    mutations
  }
const moduleB = {
    state: adminState,
    getters:{},
    actions: adminActions,
    mutations: adminMutations
  }

const store=createStore({
    modules: {
        basic: moduleA,
        admin: moduleB,
      
      }
})

export default store;