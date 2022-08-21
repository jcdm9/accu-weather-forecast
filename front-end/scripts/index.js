let html = ''
const url = 'http://localhost:3000/api/accu-weather/264885'
axios
  .get(url)
  .then(result => {
    html += '<div class="row align-items-start">'
    result.data.dailyForecast.map((data, i) => {
      const weatherDate = moment(data.Date).format('ll')
      html += `
        <div class="col">
          <div class="card-body">
            <h5 class="card-title">${weatherDate}</h5>
            <p class="card-text">
              Temperature<br />
              min: ${data.Temperature.Minimum.Value}℉ max: <span id="max${i}">${data.Temperature.Maximum.Value}</span>℉
              <br />
              <h6 class="card-subtitle mb-2 text-muted">Morning</h6>
              <img src="./resource/img/${data.Day.Icon}-s.png">${data.Day.IconPhrase}
              <br />
              <br />
              <h6 class="card-subtitle mb-2 text-muted">Night</h6>
              <img src="./resource/img/${data.Night.Icon}-s.png">${data.Night.IconPhrase}
            </p>
          </div>
        </div>
      `
    })
    html += '</div>'
    document.getElementById('weather').innerHTML = html
  })
  .catch(e => {
    html = "<div class='col'>A problem occur getting weather information.</div>"
    document.getElementById('weather').innerHTML = html
  })
