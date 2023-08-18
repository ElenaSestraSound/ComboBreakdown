import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { options } from '@/utils/bar-options';
export interface IBarMeterProps {
  startup: number,
  active: string,
  recovery: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarMeter ({ startup, active, recovery }: IBarMeterProps) {
  const activeLast = parseInt(active.split('-')[1]);
  const activeVal = activeLast - startup;
  const recoveryVal = recovery - activeLast;
  const max = 100 - startup - activeVal - recoveryVal;

  const data = {
    labels: ['bar'],
    datasets: [{
      label: 'Startup',
      data: [startup],
      backgroundColor: [
        'rgba(60, 230, 60, 0.85)',
      ],
      stack: 'bar',
    }, {
      label: 'Active',
      data: [activeVal],
      backgroundColor: [
        'rgba(230, 60, 60, 0.85)',
      ],
      stack: 'bar'
    }, {
      label: 'Recovery',
      data: [recoveryVal],
      backgroundColor: [
        'rgba(80, 80, 230, 0.85)',
      ],
      stack: 'bar'
    }, {
      label: '-',
      data: [max],
      backgroundColor: [
        'rgba(35, 15, 55, 1)',
      ],
      stack: 'bar',
      legend: { display: false }
    }
    ]
  };

  return (
    <div className='w-full flex justify-center z-10'>
      <Bar
        data={data}
        height={90}
        width={`100%`}
        options={options}
      />
    </div >
  );
}
