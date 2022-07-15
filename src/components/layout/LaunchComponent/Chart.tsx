import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ListsType } from '../../../pages/Dashboard/LaunchPad/Lists/demo-data';

ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartJs = ({ poolDetails }: { poolDetails: ListsType }) => {
  const data = {
    labels: ['Liquidity', 'Presale', 'Burn', 'Unlocked', 'Locked'],
    datasets: [
      {
        label: 'Token Distribution',
        data: [poolDetails.liquidity, 10, 5, 5, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Doughnut
        data={data}
        width={200}
        height={200}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};
