let CountrySelect, graph, canvas, loaderContainer, loaderDelay, loader;

const drawChart = (data) => {
  let ctx = graph.getContext('2d');
  let Fiveyears = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  let TwentyYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  let FortyYears = ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  let SixtyYears = ['1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  number = 5;
  if (number == 5) {
    Labels = Fiveyears;
  } else if (number == 20) {
    Labels = TwentyYears;
  } else if (number == 40) {
    Labels = FortyYears;
  } else if (number == 60) {
    Labels = SixtyYears;
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Labels,
      datasets: [
        {
          label: 'Population Count',
          data: [318386329, 320738994, 323071755, 325122128, 326838199, 328329953, 329484123],
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
              min: 200000000,
              max: 400000000,
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
  TimeSelect = document.querySelector('c-interval-switcher__item');
 
  canvas = document.querySelector('.js-graph');
  loaderContainer = document.querySelector('.js-load-container');

  getPopulationByYear('CHN');
};

document.addEventListener('DOMContentLoaded', function () {
  init();
});
