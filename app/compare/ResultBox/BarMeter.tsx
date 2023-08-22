import { BarChart, Bar, ReferenceLine, XAxis, YAxis, ResponsiveContainer } from 'recharts';
export interface IBarMeterProps {
  startup: number,
  active: string,
  recovery: number;
}

export function BarMeter ({ startup, active, recovery }: IBarMeterProps) {
  const startupVal = startup ?? 0;
  const activeLast = getActiveValue(active);
  const activeVal = activeLast - startupVal;
  const recoveryTemp = recovery ?? 0;
  const recoveryVal = recoveryTemp - activeLast;
  const max = 100 - startupVal - activeVal - recoveryVal;
  const ticksArray = [...Array(101).keys()];

  const strokeColor = '#000000';
  const startupFill = '#0AB48C';
  const activeFill = '#D71E5A';
  const recoveryFill = (startupVal + activeVal > 0) ? '#0A57C1' : startupFill;
  const emptyFill = '#333333';

  const data = [{
    Startup: startupVal,
    Active: activeVal,
    Recovery: recoveryVal,
    Max: max,
    TicksArr: ticksArray
  }];

  return (
    <div className='w-full flex justify-center z-10 mb-3'>
      <ResponsiveContainer width="100%" height={60}>
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
            ticks={[startupVal > 0 ? startupVal : '-', startupVal + activeVal, startupVal + activeVal + recoveryVal]}
            tick={{ fill: '#ddd' }}
            tickSize={6}
            minTickGap={1}
            axisLine={{ stroke: strokeColor }}
            tickLine={{ stroke: '#444' }}
            tickMargin={2}
            domain={[0, 100]}
            padding={{ left: 1, right: 2 }}
            style={{
              fontSize: '15px',
            }}
          />
          <YAxis type="category" dataKey="1" padding={{ top: 0, bottom: -6 }} />
          <Bar dataKey="Startup" stackId="a" fill={startupFill} />
          <Bar dataKey="Active" stackId="a" fill={activeFill} />
          <Bar dataKey="Recovery" stackId="a" fill={recoveryFill} />
          <Bar dataKey="Max" stackId="a" fill={emptyFill} />
          {ticksArray.map(tick => {
            return (
              <ReferenceLine key={tick} x={tick} stroke={strokeColor} strokeWidth={2} isFront />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </div >
  );
}

function getActiveValue (activeStr: string) {
  let res = 0;
  if (activeStr.includes('-')) {
    res = parseInt(activeStr.split('-')[1]);
  } else {
    res = parseInt(activeStr);
  }
  return res;
}