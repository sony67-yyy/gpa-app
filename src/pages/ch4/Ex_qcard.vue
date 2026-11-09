<template>
  <q-page padding>
    <q-card shadow-3 bg-grey-2 class="q-ma-md note-card">
      <q-card-section>
        <div class="text-h6">Mmy Note</div>
        <div class="text-body2">this is a body card.</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<style>
.note-card {
  /* ระดับขอบมน */
  border-radius: 16px;
  /* ทำให้พอเอาเมสืโอเวอร์จะเปลี่ยนสัญลักษณ์ตัวชี้เมาส์ */
  cursor: pointer;
}
.note-card:hover {
  /* เงาของกรอบ */
  box-shadow: 0 8px 12px pink !important;
}
</style>
