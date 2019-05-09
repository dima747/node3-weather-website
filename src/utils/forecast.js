const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/ff2142ba7e135a48e1212115a42b6aa5/'+ latitude + ',' + longitude + '?units=si&lang=uk'

  request({ url, json: true}, (err, { body }) => {
    if (err) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        precipProbability: body.currently.precipProbability,
        summary: body.daily.data[0].summary
      })
    }
  })
}

module.exports = forecast
