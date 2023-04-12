import http from '@/utils/http'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import AmRequestAddress from "@/providers/am-request-address";

type GetRemind = {
  userid: unknown
}
type PutRemind = {
  userid: unknown
  approver?: boolean
  applicant?: boolean
}
type Info = {
  [index: string]: unknown
}

export const useNewsStore = defineStore('news', () => {
  const info = ref<Info>({})
  function getRemindAction(payload: GetRemind){
    return http.get(AmRequestAddress.getNews, payload)
  }
  function putRemindAction(payload: PutRemind){
    return http.put(AmRequestAddress.updateNews, payload)
  }
  function updateInfo(payload: Info){
    info.value = payload
  }

  return {
    info,
    getRemindAction,
    putRemindAction,
    updateInfo
  }
})
