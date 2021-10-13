const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const { API_KEY, API_END_POINT } = process.env

exports.handler = async function (event) {
  const { data } = await axios.get(API_END_POINT, {
    params: {
      apikey: API_KEY,
      ...JSON.parse(event.body),
    }
  })
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}