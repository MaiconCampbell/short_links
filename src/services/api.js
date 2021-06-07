import axios from 'axios'

export const key = '3e8808951a5c4cf18407f26cd6206ef5ae65574a'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  }
})

export default api