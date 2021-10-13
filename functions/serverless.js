const axios = require('axios')

const API_KEY = process.env.API_KEY
const API_END_POINT = process.env.API_END_POINT

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