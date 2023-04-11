
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'
import http from '@/utils/http';
import AmRequestAddress from "@/providers/am-request-address";

interface Infos {
  [index: string]: unknown
}

export interface ChecksState {
  applyList: Infos[],
  checkList: Infos[]
}

const state: ChecksState = {
  applyList: [],
  checkList: []
};

const mutations: MutationTree<ChecksState> = {
  updateApplyList(state, payload){
    state.applyList = payload;
  },
  updateCheckList(state, payload){
    state.checkList = payload;
  }
};
const actions: ActionTree<ChecksState, State> = {
  getApply(context, payload){
    return http.get(AmRequestAddress.getChecks, payload);
  },
  postApply(context, payload){
    return http.post(AmRequestAddress.addChecks, payload);
  },
  putApply(context, payload){
    return http.put(AmRequestAddress.updateChecks, payload);
  }
};
const getters: GetterTree<ChecksState, State> = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}