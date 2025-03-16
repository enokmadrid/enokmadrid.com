import { ref } from 'vue'

interface IconCard {
  id: string
  icon: string
  title: string
  description: string
}

export function useIconCards() {
  const cards = ref<IconCard[]>([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchCards() {
    loading.value = true
    error.value = null

    try {
      const response = await fetch('/api/icon-cards')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      cards.value = data as IconCard[]
    } catch (err) {
      error.value = err as Error
      console.error('Error fetching icon cards:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    cards,
    loading,
    error,
    fetchCards
  }
} 