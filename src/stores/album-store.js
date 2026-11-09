import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/boot/axios'

export const useAlbumStore = defineStore('album', () => {
  const albums = ref([])
  const loading = ref(false)
  const errMsg = ref('')
  async function loadAlbums() {
    loading.value = true
    errMsg.value = ''
    try {
      const response = await api.get('/albums')
      albums.value = response.data
    } catch (error) {
      if (error.response) {
        errMsg.value = `Server Error (${error.response.status})`
      } else if (error.request) {
        errMsg.value = 'Unable to connect to server'
      } else {
        errMsg.value = error.massage
      }
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return { albums, loading, errMsg, loadAlbums }
})
