import { BarChart, Bar, ReferenceLine, XAxis, YAxis, ResponsiveContainer } from 'recharts';
export interface IBarMeterProps {
  startup: number,
  active: string,
  recovery: number;
}

export function BarMeter ({ startup, active, recovery }: IBarMeterProps) {
  const activeLast = parseInt(active.split('-')[1]);
  const activeVal = activeLast - startup;
  const recoveryVal = recovery - activeLast;
  const max = 100 - startup - activeVal - recoveryVal;
  const ticksArray = [...Array(101).keys()];
  const strokeColor = '#000000';

  const data = [{
    Startup: startup,
    Active: activeVal,
    Recovery: recoveryVal,
    Max: max,
    TicksArr: ticksArray
  }];

  return (
    <div className='w-full flex justify-center z-10 mb-8'>
      <ResponsiveContainer width="100%" height={70}>
        <BarChart
          data={data}
          layout='vertical'
          margin={{
            top: -7,
            right: 0,
            left: -60,
            bottom: 0,
          }}
        >
          <XAxis
            height={20}
            type="number"
            id="x"
            ticks={[startup, startup + activeVal, startup + activeVal + recoveryVal, 100]}
            tick={{ fill: '#ddd' }}
            tickSize={6}
            minTickGap={1}
            axisLine={{ stroke: strokeColor }}
            tickLine={{ stroke: '#6a6a6a' }}
            tickMargin={2}
            domain={[0, 100]}
            padding={{ left: 1, right: 2 }}
            style={{
              fontSize: '15px',
            }}
          />
          <YAxis type="category" dataKey="1" padding={{ top: 0, bottom: -6 }} />
          <Bar dataKey="Startup" stackId="a" fill="#33ee44" />
          <Bar dataKey="Active" stackId="a" fill="#ee3344" />
          <Bar dataKey="Recovery" stackId="a" fill="#3333de" />
          <Bar dataKey="Max" stackId="a" fill="#333333" />
          {ticksArray.map(tick => {
            return (
              <ReferenceLine key={tick} x={tick} stroke={strokeColor} strokeWidth={2} isFront />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
