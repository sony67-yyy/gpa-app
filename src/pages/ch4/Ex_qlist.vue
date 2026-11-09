<template>
  <q-page class="q-ma-md">
    <q-list bordered separator class="rounded-borders" style="max-width: 600px; margin: 0 auto">
      <q-item-label header class="text-h6">My todo list</q-item-label>
      <q-item
        v-for="item in todolist"
        :key="item.id"
        clickable
        v-ripple
        :class="item.done ? 'bg-green-1' : 'bg-white'"
        @click="toggleTodo(item.id)"
      >
        <q-item-section avatar>
          <q-icon
            :name="item.done ? 'check_circle' : 'radio_button_unchecked'"
            :color="item.done ? 'positive' : 'grey-5'"
            size="28px"
          ></q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label :class="item.done ? 'text-strike text-grey-6' : 'text-dark'">{{
            item.title
          }}</q-item-label>
          <q-item-label caption lines="1">
            Due date: {{ item.dueData }} | {{ item.category }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-badge :color="getPriorityColor(item.priority)" :label="item.priority"></q-badge>
        </q-item-section>
      </q-item>
      <q-item v-if="todolist.length === 0">
        <q-item-section class="text-center text-grey">NO List</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
const todolist = ref([
  {
    id: 1,
    title: 'Frontend Class',
    done: false,
    dueData: '2026-09-07',
    category: 'Education',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Shoping',
    done: false,
    dueData: '2026-09-01',
    category: 'Education',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Sleep',
    done: false,
    dueData: '2026-02-14',
    category: 'Education',
    priority: 'low',
  },
])
const getPriorityColor = (priority) => {
  const colors = {
    high: 'negative',
    medium: 'warning',
    low: 'positive',
  }
  return colors[priority] || 'grey'
}
const toggleTodo = (id) => {
  const index = todolist.value.findIndex((todo) => todo.id === id)
  if (index !== -1) {
    todolist.value[index].done = !todolist.value[index].done
  }
}
</script>
<style scoped>
.text-strike {
  text-decoration: line-through;
}
</style>
