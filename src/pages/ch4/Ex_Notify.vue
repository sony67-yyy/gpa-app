<template>
  <div class="q-pa-md">
    <!-- ใสปุ่ม -->
    <q-btn label="Save" icon="save" @click="saveNote"></q-btn>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
const $q = useQuasar()
const saveNote = () => {
  $q.notify({
    // สี
    type: 'positive',
    //ข้อความ
    message: 'Save complete',
    //ตำแหน่งที่ปรากฎ
    position: 'top',
    //กำหนดเวลาที่แสดงผล
    timeout: 2000,
    icon: 'print',
  })
}
</script>
