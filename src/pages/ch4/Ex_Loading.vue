<template>
  <div class="q-qa-md">
    <q-btn label="Load Data" @click="loadData"></q-btn>
  </div>
</template>
<script setup>
import { useQuasar } from 'quasar'
const $q = useQuasar()
const loadData = () => {
  $q.loading.show()
  // $q.loading.show({
  //   spinner: null,
  //   message: `<div class='text-center'>
  //       <img src='https://media.tenor.com/aGj-frNYMFEAAAAM/cat-cat-dance.gif'
  //       style='width: 150px; height: 150px; border-radius: 8px;'>
  //       <div class='q-mt-md text-h6'>แมวกำลังโหลด...</div>
  //       </div>`,
  //   html: true,
  //   backgroundColor: 'dark',
  //   messageColor: 'white',
  // })
  //import { useQuasar, QSpinnerFacebook } from 'quasar'
  // $q.loading.show({
  //   message: 'Loading Data...',
  //   spinner: QSpinnerFacebook,
  //   spinnerColor: 'yellow',
  //   spinnerSize: 200,
  //   backgroundColor: 'pink-2',
  //   messageColor: 'green-4',
  // })
  //นับถอยหลัง
  setTimeout(() => {
    //ขึ้นมาแล้วจะหายไป
    $q.loading.hide()
    $q.notify({
      type: 'positive',
      message: 'Load Data Success',
    })
  }, 5000)
}
</script>
