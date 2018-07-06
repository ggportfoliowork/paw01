import axios from 'axios'

const APP_URL = process.env.APP_URL

export const HttpClient = axios.create({
  baseURL: "".concat('api/v1/'),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': window.User.token.type +' ' + window.User.token.token
  },
  validateStatus: (status) => {
    return status
  },
  transformResponse: [function (data, headers) {
    return JSON.parse(data);
  }],
})

export default HttpClient
