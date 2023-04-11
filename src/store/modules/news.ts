
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'
import http from '@/utils/http';
import AmRequestAddress from "@/providers/am-request-address";

interface Info {
  [index: string]: unknown
}

export interface NewsState {
  info: Info
}

const state: NewsState = {
  info: {}
};

const mutations: MutationTree<NewsState> = {
  updateInfo(state, payload){
    state.info = payload
  }
};
const actions: ActionTree<NewsState, State> = {
  getRemind(context, payload){
    return http.get(AmRequestAddress.getNews, payload)
  },
  putRemind(context, payload){
    return http.put(AmRequestAddress.updateNews, payload)
  }
};
const getters: GetterTree<NewsState, State> = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}