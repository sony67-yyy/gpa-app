<template>
  <q-page padding>
    <q-btn
      label="SAVE ME"
      color="brown"
      text-color="yellow"
      icon="local_florist"
      unelevated
    ></q-btn>
    <q-btn outline label="NO BG" />
    <!-- เส้นแบ่งระหว่างปุ่ม -->
    <q-separator spaced size="16px" color="yellow"></q-separator>
    <q-btn round icon="share"></q-btn>
    <!-- ขึ้นบรรทัดใหม่ -->
    <q-space />
    <q-btn rounded label="Confirm"></q-btn>
    <q-separator spaced="16px"></q-separator>
    <q-btn-group push>
      <q-btn push label="Satang"></q-btn>
      <q-btn push label="Gift"></q-btn>
      <q-btn push label="Ice"></q-btn>
    </q-btn-group>
    <q-separator spaced="16px"></q-separator>
    <q-btn
      :loading="isSaving"
      color="green"
      :label="isSaving ? 'Saving...' : 'Saved'"
      @click="save"
    ></q-btn>
    <template v-slot:loading>
      <q-spinner-dots color="white" size="3rem" :thickness="5" class="on-left" />Saving...
    </template>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
const isSaving = ref(false)
const save = async () => {
  isSaving.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // นับเวลาถอยหลัง2วิ แล้วจะขึ้นคำว่า Data Saved
    console.log('Data Saved')
  } catch (error) {
    console.log('Error: ', error)
  } finally {
    isSaving.value = false
  }
}
</script>
