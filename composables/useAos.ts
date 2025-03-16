import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

export function useAos(options = {}) {
  onMounted(() => {
    AOS.init(options)
  })

  return {
    refresh: () => AOS.refresh(),
    refreshHard: () => AOS.refreshHard()
  }
} 