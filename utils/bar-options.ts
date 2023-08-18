export const options = {
  scales: {
    x: {
      stacked: true,
      border: {
        display: false,
        color: 'rgba(120, 120, 120, 1)',
        width: 2
      },
      grid: {
        display: true,
        color: 'rgba(20, 10, 30, 1)',
        drawTicks: true,
        drawOnChartArea: true,
        tickLength: 0,
        lineWidth: 2,
        z: 1
      },
      ticks: {
        stepSize: 1,
        padding: 3,
        includeBounds: true,
        display: false,
      }
    },
    y: {
      display: false,
    },
  },
  layout: {
    padding: 0
  },
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y' as 'y',
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    },
  },
  animation: {
    duration: 200,
    easing: 'easeInExpo' as 'easeInExpo'
  },
};
