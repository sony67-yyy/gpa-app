<template>
  <q-page>
    <q-btn color="primary" label="Load Albam" @click="albumStore.loadAlbums()"></q-btn>

    <!-- Loading -->
    <div v-if="albumStore.loading" class="q-mt-md">
      <q-spinner-dots color="primary" size="40px"></q-spinner-dots>
    </div>

    <!-- Error -->
    <q-banner v-else-if="albumStore.errMsg" class="bg-red1 text-negative q-mt-md rounded">
      <template #avatar>
        <q-icon name="error" color="negative"></q-icon>
      </template>
      {{ albumStore.errMsg }}
    </q-banner>

    <!-- API DATA -->
    <q-list v-else bordered separator class="q-mt-md">
      <q-item v-for="item in albumStore.albums" :key="item.id">
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption>Album ID: {{ item.id }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { useAlbumStore } from '@/stores/album-store'
const albumStore = useAlbumStore()
// import { ref } from 'vue'
// import { api } from '@/boot/axios'
// const albums = ref([])
// const loading = ref(false)
// const errMsg = ref('')
// async function loadAlbums() {
//   loading.value = true
//   errMsg.value = ''
//   try {
// const response = await api.get('https://jsonplaceholder.typicode.com/albums')
//     const response = await api.get('/albums')
//     albums.value = response.data
//   } catch (error) {
//     if (error.response) {
//       errMsg.value = `Server Error (${error.response.status})`
//     } else if (error.request) {
//       errMsg.value = 'Unable to connect to server'
//     } else {
//       errMsg.value = error.massage
//     }
//     console.error(error)
//   } finally {
//     loading.value = false
//   }
// }
</script>
<!-- https://jsonplaceholder.typicode.com ถ้าเราใส่ url หลัก อันนี้ผิดในโค้ดจะแสดงผลว่า Unable to connect to server-->
<!-- ส่วน /albums เป็นส่วนหลังที่ถ้าใส่ผิดเป็นคำอื่นที่ไม่มีที่ไป เช่น /albams1 , albums6767 จะแสดงผลว่า Server Error -->
