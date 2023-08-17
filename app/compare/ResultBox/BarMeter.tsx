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
  name: string | undefined,
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

export function BarMeter ({ name = '', startup, active, recovery }: IBarMeterProps) {
  const activeLast = parseInt(active.split('-')[1]);
  const activeVal = activeLast - startup;
  const recoveryVal = recovery - activeLast;
  const max = 100 - startup - activeVal - recoveryVal;

  const data = {
    labels: [name],
    datasets: [{
      label: 'Startup',
      data: [startup],
      backgroundColor: [
        'rgba(60, 230, 60, 1)',
      ],
      stack: 'bar',
    }, {
      label: 'Active',
      data: [activeVal],
      backgroundColor: [
        'rgba(230, 60, 60, 1)',
      ],
      stack: 'bar'
    }, {
      label: 'Recovery',
      data: [recoveryVal],
      backgroundColor: [
        'rgba(60, 60, 230, 1)',
      ],
      stack: 'bar'
    }, {
      label: '-',
      data: [max],
      backgroundColor: [
        'rgba(50, 50, 50, 1)',
      ],
      stack: 'bar',
      legend: { display: false }
    }
    ]
  };

  return (
    <div className='w-full flex justify-center'>
      <Bar
        data={data}
        height={100}
        width={`100%`}
        options={options}
      />
    </div >
  );
}
