import { ref } from 'vue'
import useApi from '@/composables/useApi'

const characters = ref([])
const currentCharacter = ref(null)
const firstLoad = ref(true)

const api = useApi()
const page = ref(1)

const useCharacters = () => {
  const fetchCharacters = async () => {
    /* const fetchCharacter = async api.instnave.get(url:'/characters')
    constole.log(message: response)*/
    const { data } = await api.instance.get('/characters', {
      params: {
        page: page.value,
      },
    })
    characters.value.push(...data.data)
    page.value++
  }

  const fetchCharacter = async (id) => {
    const { data } = await api.instance.get(`/characters/${id}`)
    currentCharacter.value = data
  }

  return {
    characters,
    fetchCharacters,
    fetchCharacter,
    currentCharacter,
    firstLoad,
  }
}

export default useCharacters
