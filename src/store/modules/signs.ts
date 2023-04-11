
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'
import http from '@/utils/http';
import AmRequestAddress from "@/providers/am-request-address";

interface Infos {
  [index:string]: unknown
}

export interface SignsState {
  infos: Infos
}

const state: SignsState = {
  infos: {}
};

const mutations: MutationTree<SignsState> = {
  updateInfos(state, payload){
    state.infos = payload;
  }
};
const actions: ActionTree<SignsState, State> = {
  getTime(context, payload){
    return http.get(AmRequestAddress.getUserTime, payload);
  },
  putTime(context, payload){
    return http.put(AmRequestAddress.updateUserTime, payload);
  }
};
const getters: GetterTree<SignsState, State> = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}