import { Chart } from 'chart.js/auto';
import { useEffect, useRef } from 'react';

export default function BabyChart(){
  const canvasEl = useRef(null);

  useEffect(() => {
    if (canvasEl.current !== null) {
      const ctx = canvasEl.current;

      const babyLabels = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

      const babyData = {
        labels: babyLabels,
        datasets: [
          {
            label: '합계 출산율',
            data: [1.30, 1.19, 1.21, 1.24, 1.17, 1.05, 0.98, 0.92, 0.84, 0.81, 0.78, 0.72],
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
