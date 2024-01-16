import { createStore } from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import state from './state';


const moduleA = {
    state,
    getters:{},
    actions,
    mutations
  }

const store=createStore({
    modules: {
        basic: moduleA,
      
      }
})
export default store;