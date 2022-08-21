// format date to yyyy-mm-dd
const formatDate = (date) => {
  return date.toJSON().slice(0, 10)
}

// set labels based on current date
const myDate = new Date()
const firstDay = formatDate(myDate)
const secondDay = formatDate(new Date(myDate.setDate(myDate.getDate() + 1)))
const thirdDay = formatDate(new Date(myDate.setDate(myDate.getDate() + 2)))

// initialize chart
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [firstDay, secondDay, thirdDay],
    datasets: [{
      label: 'Weather Forecast for Manila City, Philippines',
      backgroundColor: 'rgb(100, 100, 255)',
      borderColor: 'rgb(100, 100, 200)',
      data: [60, 20, 40]
    }]
  },
})
