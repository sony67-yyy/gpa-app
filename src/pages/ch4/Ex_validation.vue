<!-- แบบฟอร์ม -->
<!-- <template>
   <div class="q-pa-md"> 
     <q-form @submit="submitFrom">
     <q-form ref="myForm"></q-form>
      <q-input
        v-model="name"
        label="Your name"
        outlined
        :rules="[(val) => !!val || 'Name required']"
      ></q-input>
      <q-input
        v-model="age"
        label="Your age"
        outlined
        :rules="[
          (val) => (val !== null && val !== '') || 'Age requirted',
          (val) => (val >= 1 && val <= 120) || 'Age must be 1-120',
        ]"
      ></q-input>
      <q-btn type="submit" label="ADD" color="primary" class="q-pt-md"></q-btn>
    </q-form> 
  </div>
</template> -->
<!-- <script setup>
import { ref, nextTick } from 'vue'
const name = ref()
const age = ref()

const myForm = ref(null)

const submitFrom = () => {
    if (myForm.value) {
        myForm.value.validate().then(async (success) => {
            if (success) {
                console.log('Name: ' + name.value)
                console.log('Age: ' + age.value)
                name.value =''
                age.value = 1
                await nextTick();
                myForm.value.resetValidation()
            } else {
                console.log("Not validate")
            }
        })
     }
   //name.value = ''
   //age.value = ''
 }
</script>  -->

<!-- ของอาจารย์ -->
<template>
  <div class="q-pa-md">
    <q-form ref="myForm">
      <q-input
        v-model="name"
        type="text"
        label="Your Name"
        outlined
        :rules="[(val) => !!val || 'Name require']"
      />
      <q-input
        outlined
        v-model.number="age"
        type="number"
        label="Your Age (1-120)"
        :rules="[
          (val) => (val !== null && val !== '') || 'Age require',
          (val) => (val >= 1 && val <= 120) || 'Age must be 1-120',
        ]"
        hide-bottom-space
      />
      <q-btn color="primary" @click="onClicked" rounded label="ADD" class="q-mt-md" />
    </q-form>
  </div>
</template>
<script setup>
import { ref, nextTick } from 'vue'
const name = ref('')
const age = ref(1) // change default value
const myForm = ref(null)
const onClicked = () => {
  if (myForm.value) {
    myForm.value.validate().then(async (success) => {
      if (success) {
        console.log('Name: ' + name.value)
        console.log('Age: ' + age.value)
        name.value = ''
        age.value = 1
        await nextTick()
        myForm.value.resetValidation()
      } else {
        console.log('NOT validate')
      }
    })
  }
}
</script>
