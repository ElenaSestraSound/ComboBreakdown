import { BarChart, Bar, ReferenceLine, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { IBarMeterProps } from '@/utils/types';
import * as utils from './BarUtils';

export function BarMeter ({ startup, active, recovery }: IBarMeterProps) {
  const startupVal = startup ?? 0;
  const parsedActive = utils.parseActive(active);
  const isMultiActive = Array.isArray(parsedActive) ? true : false;
  const activeLast = Array.isArray(parsedActive) ? parsedActive[parsedActive.length - 1] : utils.getActiveValue(active);
  const activeVal = activeLast - startupVal;
  const recoveryVal = utils.getRecoveryValue(recovery, activeLast);
  const max = 100 - startupVal - activeVal - recoveryVal;

  const recoveryFill = (startupVal + activeVal > 0) ? utils.barColors.recoveryFill : utils.barColors.startupFill;
  const activeFill = isMultiActive ? utils.barColors.multiActiveFill : utils.barColors.activeFill;

  const xTicks = [
    startupVal > 0 ? startupVal : '-',
    startupVal + activeVal,
    startupVal + activeVal + recoveryVal
  ];

  const data = [{
    Startup: startupVal,
    Active: activeVal,
    Recovery: recoveryVal,
    Max: max,
  }];

  return (
    <div className='w-full flex justify-center z-10 mb-3'>
      <ResponsiveContainer width="100%" height={60}>
        <BarChart
          data={data}
          layout='vertical'
          margin={utils.barMargin}
        >
          <XAxis
            height={20}
            type="number"
            id="x"
            ticks={xTicks}
            tick={{ fill: '#ddd' }}
            tickSize={6}
            minTickGap={1}
            axisLine={{ stroke: utils.barColors.strokeColor }}
            tickLine={{ stroke: '#444' }}
            tickMargin={2}
            domain={[0, 100]}
            padding={{ left: 1, right: 2 }}
            style={{
              fontSize: '15px',
            }}
          />
          <YAxis type="category" dataKey="1" padding={{ top: 0, bottom: -6 }} />
          <Bar dataKey="Startup" stackId="a" fill={utils.barColors.startupFill} />
          <Bar dataKey="Active" stackId="a" fill={activeFill} />
          <Bar dataKey="Recovery" stackId="a" fill={recoveryFill} />
          <Bar dataKey="Max" stackId="a" fill={utils.barColors.emptyFill} />
          {utils.ticksArray.map(tick => {
            return (
              <ReferenceLine key={tick} x={tick} stroke={utils.barColors.strokeColor} strokeWidth={2} isFront />
            );
          })}
          {Array.isArray(parsedActive) && parsedActive.map(tick => {
            return (
              <ReferenceLine
                label={
                  { value: tick, dy: 5, dx: 0, fill: '#ddd', fontSize: 12 }
                }
                key={tick}
                x={tick - 1}
                stroke={utils.barColors.activeFill}
                strokeWidth={13} isFront />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
