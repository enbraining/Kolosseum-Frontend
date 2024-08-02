import { Chart } from 'chart.js/auto';
import { useEffect, useRef } from 'react';

export default function TestChart(){
  const canvasEl = useRef(null);

  useEffect(() => {
    if (canvasEl.current !== null) {
      const ctx = canvasEl.current;

      const babyLabels = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

      const babyData = {
        labels: babyLabels,
        datasets: [
          {
            label: '테스트',
            data: [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.2,
          },
        ],
      };

      const babyLineChart = new Chart(ctx, {
        type: 'line',
        data: babyData,
        options: {
            aspectRatio: 1,
            responsive: true,
            maintainAspectRatio: false
        }
      });

      return function cleanup() {
        babyLineChart.destroy();
      };
    }
  });

  return <canvas ref={canvasEl} />
};
