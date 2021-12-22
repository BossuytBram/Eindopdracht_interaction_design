let CountrySelect, graph, canvas, loaderContainer, loaderDelay, loader;

const drawChart = (data) => {
  let ctx = graph.getContext('2d');


  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']
      ,
      datasets: [
        {
          label: 'Population Count',
          data: data,
          borderColor: '#3B86FF',
          backgroundColor: '#3B86FF10',
          pointBackgroundColor: 'white',
          lineTension: 0.3,
          borderWidth: 2,
          pointRadius: 4,
        },
      ],
    },
    options: {
      defaultFontColor: (Chart.defaults.global.defaultFontColor = '#808495'),
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 50,
            },
          },
        ],
      },
      tooltips: {
        xPadding: 10,
        yPadding: 10,
        cornerRadius: 0,
      },
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          defaultFontFamily: (Chart.defaults.global.defaultFontFamily = "'Source Sans Pro', 'Helvetica', 'arial', 'sans-serif'"),
          boxWidth: 2,
        },
      },
      responsive: true,
    },
  });
  
};

const getData = (json) => {
  let data = [];

  json.map((country) => {
    data.push(country.value);
  });

  drawChart(data);
};

const getPopulationByYear = (country) => {
  const endpoint = `http://api.worldbank.org/v2/countries/${country}/indicators/SP.POP.TOTL?per_page=5000&format=json`;
  // const endpoint = `http://api.worldbank.org/v2/countries/IND/indicators/SP.POP.TOTL?per_page=5000&format=json`
  fetch(endpoint)
    .then((r) => r.json())
    .then((json) => {
      getData(json);
    })
    .catch((e) => console.error(e));
};

const init = () => {
  CountrySelect = document.querySelector('.js-country-select');
  graph = document.querySelector('.js-graph');

  CountrySelect.addEventListener('change', function (e) {
    getPopulationByYear(e.target.value);
  });

  canvas = document.querySelector('.js-graph');
  loaderContainer = document.querySelector('.js-load-container');

  getPopulationByYear('CHN');
};

document.addEventListener('DOMContentLoaded', function () {
  init();
});
