import { getCentile, getDeviations, getSeries } from '../functions';

const getDataSeries = (displayType, deviations, colors) => {
  if (displayType === 'zscore') {
    return [
      getSeries('arearange', deviations.SD4_SD3, colors.SD2_3, true),
      getSeries('arearange', deviations.SD3_SD2, colors.SD1_2, true),
      getSeries('arearange', deviations.SD2_SD1, colors.SD0_1, true),
      getSeries('arearange', deviations.SD1_SD0, colors.SD0_1),
      getSeries('arearange', deviations.SD0_nSD1, colors.SD0_1),
      getSeries('arearange', deviations.nSD1_nSD2, colors.SD0_1),
      getSeries('arearange', deviations.nSD2_nSD3, colors.SD1_2),
      getSeries('arearange', deviations.nSD3_nSD4, colors.SD2_3),
      getSeries('line', deviations.SD0, colors.SD3_4, true)
    ];
  }
  return [
    getSeries('arearange', deviations.P01, colors.SD2_3),
    getSeries('arearange', deviations.P3, colors.SD1_2),
    getSeries('arearange', deviations.P15, colors.SD0_1),
    getSeries('arearange', deviations.P85, colors.SD1_2),
    getSeries('arearange', deviations.P97, colors.SD2_3),
    getSeries('line', deviations.P50, colors.SD3_4),
  ];
};

const getPlotLabel = (label, deviation, color) => ({
  color: 'white',
  width: 0,
  label: {
    text: label,
    align: 'right',
    style: {
      color,
      fontWeight: 'bold'
    }
  },
  value: deviation[deviation.length - 1][1],
  zIndex: 5
});

const getPlotLabels = (displayType, deviations, colors) => {
  if (displayType === 'zscore') {
    return [
      getPlotLabel('+3 SD', deviations.SD4_SD3, colors.SD2_3),
      getPlotLabel('+2 SD', deviations.SD3_SD2, colors.SD1_2),
      getPlotLabel('+1 SD', deviations.SD2_SD1, colors.SD0_1),
      getPlotLabel('Median', deviations.SD0, colors.SD3_4),
      getPlotLabel('-1 SD', deviations.nSD1_nSD2, colors.SD0_1),
      getPlotLabel('-2 SD', deviations.nSD2_nSD3, colors.SD1_2),
      getPlotLabel('-3 SD', deviations.nSD3_nSD4, colors.SD2_3)
    ];
  }
  return [
    getPlotLabel('3rd', deviations.P01, colors.SD2_3),
    getPlotLabel('15th', deviations.P3, colors.SD1_2),
    getPlotLabel('50th', deviations.P50, colors.SD0_1),
    getPlotLabel('85th', deviations.P85, colors.SD1_2),
    getPlotLabel('97th', deviations.P97, colors.SD2_3)
  ];
};

const getPlotConfig = (
  indicatorConfig,
  appConfig,
  visits,
  selectedVisit,
  plotType,
  displayType,
  showMultiple,
  setVisit
) => {
  if (!indicatorConfig) return null;

  const { colors } = appConfig;
  const {
    ageBased,
    dataSet,
    xtitle,
    ytitle,
    measurement1,
    measurement2
  } = indicatorConfig;

  const deviations = getDeviations(dataSet, displayType);

  const patientVisits = visits.map(visit => [
    visit[measurement1],
    visit[measurement2]
  ]);
  const patientVisit = [
    [selectedVisit[measurement1], selectedVisit[measurement2]]
  ];

  const formatDivisor = ageBased ? 30.25 : 1;
  const minorFormatDivisor = ageBased ? (30.25 / 2) : 1;
  const zoomOffset = ageBased ? 30.25 * 5 : 5;


  return {
    title: {
      text: indicatorConfig.title,
      x: 0
    },
    chart: {
      zoomType: 'xy',
      resetZoomButton: {
        position: {
          x: -40,
          y: 10
        }
      },
      backgroundColor: 'white',

    },
    exporting: {
      fallbackToExportServer: false
    },
    credits: false,
    plotOptions: {
      scatter: {
        lineWidth: 2
      },
      marker: {
        enabled: false
      },
      series: {
        animation: false,
        // Prevent user from disabling series through clicking the legend
        events: {
          legendItemClick(e) {
            e.preventDefault();
          },
          click(e) {
            const index = this.xData.indexOf(e.point.x)
            setVisit(index);
          }

        }
      }
    },
    xAxis: {
      maxPadding: 0.04,
      gridLineWidth: 0,
      tickInterval: formatDivisor,
      minorTickInterval: minorFormatDivisor,
      minorTickPosition: 'outside',
      minorTickLength: 5,
      minorTickWidth: 1,
      minorGridLineWidth: 0,

      labels: {
        formatter() {
          // if chart is based on age, divide days by 30.25 to get months
          return Math.round(this.value / formatDivisor);
        }
      },
      title: {
        text: xtitle
      },
      plotLines: [
        {
          color: 'red',
          width: 1,
          value: selectedVisit[measurement1],
          dashStyle: 'shortdash',
          zIndex: 4
        }
      ]
    },
    yAxis: {
      gridLineWidth: 0,
      maxPadding: 0.08,
      tickInterval: 1,
      tickWidth: 1,
      minorTickInterval: 1,
      minorTickLength: 5,
      minorTickWidth: 1,
      minorGridLineWidth: 0,

      title: {
        text: ytitle
      },
      plotLines: [
        {
          color: 'red',
          width: 1,
          value: selectedVisit[measurement2],
          dashStyle: 'shortdash',
          zIndex: 4
        },
        ...getPlotLabels(displayType, deviations, colors)
      ]
    },
    tooltip: {
      formatter() {
        const x = ageBased
          ? Math.round(this.x / formatDivisor)
          : Math.round(this.x * 100) / 100;
        const y = Math.round(this.y * 100) / 100;

        if (showMultiple === 'multiple') {
          const visit = visits[this.point.index];
          const zscore = visit[plotType];

          return `
                    <b>${visit.index +
            1}: ${visit.eventDate
              .toISOString()
              .slice(0, 10)}</b> <br />
                    ${xtitle}: ${x} <br />
                    ${ytitle}: ${y} <br />
                    Z-score: ${zscore} <br />
                    Percentile: ${getCentile(zscore)}%`;
        }

        const zscore = selectedVisit[plotType];

        return `
          <b>${selectedVisit.index +
          1}: ${selectedVisit.eventDate.toISOString().slice(0, 10)}</b> <br />
          ${xtitle}: ${x} <br />
          ${ytitle}: ${y} <br />
          Z-score: ${zscore} <br />
          Percentile: ${getCentile(zscore)}%`;
      }
    },
    series: [
      // This is an empty series that adds the plotline to the legend.
      {
        color: '#FF0000',
        name: `Age: ${Math.round(selectedVisit.ageInDays / 30.25)} months, ${
          displayType === 'zscore'
            ? `Z-score: ${selectedVisit[plotType]}`
            : `Percentile: ${getCentile(selectedVisit[plotType])}%`
          }`,
        dashStyle: 'shortdash',
        marker: {
          enabled: false
        }
      },
      ...getDataSeries(displayType, deviations, colors),
      {
        data: showMultiple === 'multiple' ? patientVisits : patientVisit,
        marker: {
          symbol: 'circle'
        },
        color: '#428bca',
        lineWidth: 2,
        name: 'Patient',
        zIndex: 5,
        showInLegend: false
      }
    ],
    legend: {
      align: 'left',
      verticalAlign: 'top',
      x: 70,
      y: 30,
      floating: true,
      layout: 'vertical',
      borderColor: '#c3c3c3',
      borderWidth: 1,
      backgroundColor: 'white'
    }
  };
};

export default getPlotConfig;
