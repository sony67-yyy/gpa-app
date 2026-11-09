<!-- Crud (create, read, updete, delete) -->
<template>
  <!-- การแสดงผลหน้าจอสำหรับคอม และมือถือ -->
  <q-page class="q-pa-md" bg-grey-1>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-5">
        <q-card flat bordered>
          <q-card-section class="bg-primary text-white">
            <div class="text-subtitle1 text-weight-medium">HTTP Methods</div>
          </q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-blue"> 1.GET: List All </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  color="blue"
                  label="Fetch All"
                  @click="handleFetchAll"
                  :loading="isLoading"
                ></q-btn>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-blue"> 2.Create: ID: 101 </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  color="green"
                  label="Create post"
                  @click="handleCreate"
                  :loading="isLoading"
                ></q-btn>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-blue"> 3.Update: ID: 101 </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  color="orange"
                  label="Update post"
                  @click="handleUpdate"
                  :loading="isLoading"
                ></q-btn>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-blue"> 4.Delete: ID: 101 </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  color="negative"
                  label="Delete post"
                  @click="handleDelete"
                  :loading="isLoading"
                ></q-btn>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-blue">
                  5.Get Filter: ID: 101
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  color="purple"
                  label="Filter user2"
                  @click="handleFilter"
                  :loading="isLoading"
                ></q-btn>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-blue"> 6.Comment</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  color="teal"
                  label="Comment post"
                  @click="handleComments"
                  :loading="isLoading"
                ></q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
      <div class="col-12 col-md-7">
        <q-card flat bordered>
          <q-card-section class="bg-grey-9 text-white row justify-between item-center q-py-xs">
            <div class="text-subtitle2">
              <q-icon name="terminal"></q-icon>
              Live Data
            </div>
            <div class="text-caption text-grey-4">Total:{{ postItem.length }} records</div>
          </q-card-section>
          <!-- ตรวจสถานะกำลังโหลด -->
          <q-card-section v-if="isLoading" class="text-center q-pa-xl">
            <q-spinner-matrix color="primary" size="3rem"></q-spinner-matrix>
            <div class="q-mt-sm text-grey-6">Syncing data with server...</div>
          </q-card-section>
          <q-card-section v-else>
            <div v-if="comments.length > 0" class="q-mb-md">
              <q-banner dense class="bg-teal-1 text-teal-9 rounded-borders q-mb-sm">
                <q-icon name="comment"></q-icon>
                Comment of Post ID: 1
                <template v-slot:action>
                  <q-btn flat label="Close Comment" color="teal" @click="comments = []"></q-btn>
                </template>
              </q-banner>
              <q-list bordered seperator class="bg-white rounded-border">
                <q-itm v-for="com in comments" :key="com.id">
                  <q-item-section>
                    <q-item-label class="text-weight-bold">
                      {{ com.name }} ({{ com.email }})
                    </q-item-label>
                    <q-item-label caption>{{ com.body }}</q-item-label>
                  </q-item-section>
                </q-itm>
              </q-list>
            </div>
            <div v-if="postItem.length == 0" class="text-center q-pa-xl text-grey-5">
              <q-icon name="layers_clear" size="4rem"></q-icon>
              <div class="text-h6 q-mt-sm">No Data</div>
            </div>
            <div v-else class="row q-col-gutter-sm">
              <div v-for="item in postItem.slice(0, 6)" :key="item.id" class="col-12 col-sm-6">
                <q-card flat bordered class="bg-white text-dark">
                  <q-card-section class="q-pa-sm">
                    <q-badge :color="item.id > 100 ? 'gren' : 'blue'" class="q-ml-xs q-mb-xs"
                      >ID:{{ item.id }}</q-badge
                    >
                    <q-badge color="purple" class="qml-xs q-mb-xs">
                      User:{{ item.userId }}
                    </q-badge>
                    <div class="text-weight-bold text-subtitle2">{{ item.title }}</div>
                    <div class="text-caption text-grey-7 q-mt-xs">{{ item.body }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { usePostStore } from '@/stores/post-store'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'

const $q = useQuasar()
const store = usePostStore()
const { postItem, isLoading } = storeToRefs(store)
const comments = ref([])
console.log(postItem)
const handleFetchAll = async () => {
  comments.value = []
  await store.fetchAllPost()
  $q.notify({
    type: 'positive',
    messege: 'Data fetched success',
    position: 'bottom-right',
  })
}
const handleCreate = async () => {
  const newPostData = {
    title: 'New Post',
    body: 'body of new post',
    userId: 6767,
  }
  await store.createNewPost(newPostData)
  $q.notify({
    type: 'positive',
    messege: 'Data create success',
    icon: 'cloud_done',
  })
}
const handleUpdate = async () => {
  const newUpdateData = {
    title: 'update Post2',
    body: 'body of update post2',
    userId: 6767,
  }
  await store.createNewPost(newUpdateData)
  $q.notify({
    type: 'positive',
    messege: 'Data update success',
    icon: 'sync',
  })
}
const handleDelete = async (id) => {
  await store.deletePost(id)
  $q.notify({
    type: 'negative',
    messege: `Data Id: ${id} delete success`,
    icon: 'delete',
  })
}
const handleFilter = async (userId) => {
  comments.value = []
  await store.filterPost(userId)
  $q.notify({
    color: 'purple',
    textColor: 'white',
    messege: `Filter Id: ${userId} success`,
    icon: 'filter_list',
  })
}

const handleComments = async (id) => {
  const commentList = await store.fetchComments(id)
  if (commentList) {
    comments.value = commentList
    $q.notify({
      type: 'positive',
      messege: `Comment Id: ${id} delete success`,
      icon: 'forum',
    })
  }
}
</script>
