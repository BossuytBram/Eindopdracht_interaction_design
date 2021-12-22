let CountrySelect, graph, canvas, loaderContainer, loaderDelay, loader;

const drawChart = (data) => {
  let ctx = graph.getContext('2d');
  let Fiveyears = ['2016', '2017', '2018', '2019', '2020'];
  let TwentyYears = ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  let FortyYears = ['1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  let SixtyYears = ['1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  let CHN_numbers = [1410929362, 1407745000, 1402760000, 1396215000, 1387790000, 1379860000, 1371860000, 1363240000, 1354190000, 1345035000, 1337705000, 1331260000, 1324655000, 1317885000, 1311020000, 1303720000, 1296075000, 1288400000, 1280400000, 1271850000, 1262645000, 1252735000, 1241935000, 1230075000, 1217550000, 1204855000, 1191835000, 1178440000, 1164970000, 1150780000, 1135185000, 1118650000, 1101630000, 1084035000, 1066790000, 1051040000, 1036825000, 1023310000, 1008630000, 993885000, 981235000, 969005000, 956165000, 943455000, 930685000, 916395000, 900350000, 881940000, 862030000, 841105000, 818315000, 796025000, 774510000, 754550000, 735400000, 715185000, 698355000, 682335000, 665770000, 660330000, 667070000];
  let Real_CHN_numbers = CHN_numbers.reverse();
  let USA_numbers = [329484123, 328329953, 326838199, 325122128, 323071755, 320738994, 318386329, 316059947, 313877662, 311583481, 309327143, 306771529, 304093966, 301231207, 298379912, 295516599, 292805298, 290107933, 287625193, 284968955, 282162411, 279040000, 275854000, 272657000, 269394000, 266278000, 263126000, 259919000, 256514000, 252981000, 249623000, 246819000, 244499000, 242289000, 240133000, 237924000, 235825000, 233792000, 231664000, 229466000, 227225000, 225055000, 222585000, 220239000, 218035000, 215973000, 213854000, 211909000, 209896000, 207661000, 205052000, 202677000, 200706000, 198712000, 196560000, 194303000, 191889000, 189242000, 186538000, 183691000, 180671000];
  let Real_USA_numbers = USA_numbers.reverse();
  let IND_numbers = [1380004385, 1366417756, 1352642283, 1338676779, 1324517250, 1310152392, 1295600768, 1280842119, 1265780243, 1250287939, 1234281163, 1217726217, 1200669762, 1183209471, 1165486291, 1147609924, 1129623466, 1111523146, 1093317187, 1075000094, 1056575548, 1038058154, 1019483586, 1000900028, 982365248, 963922586, 945601828, 927403866, 909307018, 891273202, 873277799, 855334675, 837468938, 819682095, 801975250, 784360012, 766833411, 749428958, 732239498, 715384997, 698952837, 682995348, 667499815, 652408766, 637630085, 623102900, 608802595, 594770136, 581087255, 567868021, 555189797, 543084333, 531513834, 520400577, 509631509, 499123328, 488848139, 478825602, 469077191, 459642166];
  let Real_IND_numbers = IND_numbers.reverse();
  number = 20;
  if (number == 5) {
    Labels = Fiveyears;
  } else if (number == 20) {
    Labels = TwentyYears;
  } else if (number == 40) {
    Labels = FortyYears;
  } else if (number == 60) {
    Labels = SixtyYears;
  }
  let Data;
  let countryID = 'USA';
  if ((countryID == 'CHN')) {
     Data = Real_CHN_numbers;
  } else if ((countryID == 'USA')) {
    Data = Real_USA_numbers;
  } else if ((countryID == 'IND ')) {
    Data = Real_IND_numbers;
  }
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Labels,
      datasets: [
        {
          label: 'Population Count',
          data: Data,
          borderColor: '#3B86FF',
          backgroundColor: '#3B86FF10',
          pointBackgroundColor: 'white',
          lineTension: 0.3,
          borderWidth: 0,
          pointRadius: 2,
        },
      ],
    },
    options: {
      defaultFontColor: (Chart.defaults.global.defaultFontColor = '#808495'),
      scales: {
        yAxes: [
          {
            ticks: {
              min: 100000000,
              max: 1500000000,
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
