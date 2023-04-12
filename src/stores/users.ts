import http from '@/utils/http'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import AmRequestAddress from "@/providers/am-request-address";

type Token = string
type Infos = {
  [index: string]: unknown
}
type Login = {
  email: string
  pass: string
  [index: string]: unknown
}

export const useUsersStore = defineStore('users', () => {
  const token = ref<Token>('')
  const infos = ref<Infos>({})
  function loginAction(payload: Login) {
    return http.post(AmRequestAddress.login, payload)
  }
  function infosAction(){
    return http.get(AmRequestAddress.getUserInfos)
  }
  function updateToken(payload: Token){
    token.value = payload;
  }
  function updateInfos(payload: Infos){
    infos.value = payload;
  }
  function clearToken(){
    token.value = '';
  }

  return { 
    token, 
    infos, 
    loginAction, 
    infosAction,
    updateToken,
    updateInfos,
    clearToken 
  }
}, {
  persist: {
    paths: ['token']
  }
})
