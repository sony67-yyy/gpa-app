// เอาไว้จัดการข้อมูลการล็อกอิน
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useAuthStore = defineStore(
  'auth',
  () => {
    // การทำงาน state
    const isLogin = ref(false)
    const username = ref('')
    const uid = ref(0)
    //ตรวจสถานะการพิมพ์
    const loginStatus = computed(() => {
      return isLogin.value ? 'Logged In' : 'Logged Out'
    })
    // ข้อความแสดงผลหลังลูกค้าไม่ล้อคอิน
    const welcomeMessage = computed(() => {
      return isLogin.value ? `Welcome ${username.value}` : 'Please Login'
    })
    // Action ข้อความแสดงผลหลังลูกค้าล้อคอินแล้ว
    const login = (name) => {
      isLogin.value = true
      username.value = name
      uid.value = 101
    }
    const logout = () => {
      isLogin.value = false
      username.value = ''
      uid.value = 0
    }
    return {
      isLogin,
      username,
      uid,
      loginStatus,
      welcomeMessage,
      login,
      logout,
    }
  },
  {
    persist: true,
  },
)
