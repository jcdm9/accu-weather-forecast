const url = 'http://localhost:3000/api/accu-weather/264885'

axios
  .get(url)
  .then(res => {
    console.log(res.data)
  })
