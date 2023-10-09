import axios from 'axios'
import { ref } from 'vue'

const search = ref()
const data = ref()

const getWord = async () => {
  const response = await axios(
    `https://owlbot.info/api/v4/dictionary${search.value}`,
    {
      headers: {
        Authorization: 'Token SECRET_CODE_HERE',
      },
    },
  )
  data.value = response.data
}
const getStarWarCharacter = async () => {
  const response = await axios(
    `https://www.swapi.tech/api/people/?name=${search.value}`,
  )
  data.value = response.data
}
const getMovie = async () => {
  const response = await axios('http://www.omdapi.com', {
    params: {
      apikey: 'SECRET_CODE_HERE',
      s: search.value,
    },
  })
  data.value = response.data
}

/*
const instance = axios.create({
  baseURL: 'https://api.disneyapi.dev/',
})

const useApi = () => {
  const getCharacters = async () => {
    const { data } = await instance.get( url: '/characters', config {
      params: {
        page: page.value,
      },
    })
    page.value++
    return data
  }
  return { getCharacters } 
  return { instance }
}

export default useApi
*/
