import { BarChart, Bar, Label, LabelList, ReferenceLine, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { IBarMeterProps } from '@/utils/types';
import { v4 as uuid } from 'uuid';
import * as utils from './BarUtils';

export function BarMeter ({ startup, active, recovery, properties }: IBarMeterProps) {
  const startupVal = startup ?? 0;
  const parsedActive = utils.parseActive(active);
  const activeDuration = utils.getActiveDuration(active);
  const isMultiActive = Array.isArray(parsedActive) ? true : false;
  const activeLast = Array.isArray(parsedActive) ? parsedActive[parsedActive.length - 1] : utils.getActiveValue(active);
  const activeVal = activeLast > 0 ? (activeLast - startupVal) : 0;
  const activeLabels = utils.parseActiveValue(active);
  const recoveryVal = utils.getRecoveryValue(recovery, activeLast);
  const isProjectile = properties.toLowerCase().includes('projectile') ? true : false;
  const projectileVal = recoveryVal / 2;
  const max = utils.barLength - startupVal - activeVal - recoveryVal;

  const recoveryFill = (startupVal + activeVal > 0) ? utils.barColors.recoveryFill : utils.barColors.startupFill;
  const activeFill = isMultiActive ? utils.barColors.multiActiveFill : utils.barColors.activeFill;
  const projectileFill = utils.barColors.multiActiveFill;

  const xTicks = [
    startupVal > 0 ? startupVal : '-',
    activeVal > 0 ? startupVal + activeVal : '-',
    startupVal + activeVal + recoveryVal
  ];

  const data = [{
    Startup: startupVal,
    Active: activeVal,
    ActiveLabel: activeDuration,
    Projectile: projectileVal,
    ProjectileRecovery: projectileVal,
    Recovery: recoveryVal,
    Max: max,
  }];

  return (
    <div className='w-full flex justify-center z-10 mb-3'>
      <ResponsiveContainer width="100%" height={60}>
        <BarChart
          data={data}
          key={uuid()}
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
            domain={[0, utils.barLength]}
            padding={{ left: 1, right: 2 }}
            style={{
              fontSize: '15px',
            }}
          />
          <YAxis type="category" dataKey="1" padding={{ top: 0, bottom: -6 }} />
          <Bar dataKey="Startup" label={{ position: 'insideRight', fill: '#ddd', fontSize: 12 }} stackId="a" fill={utils.barColors.startupFill} />
          <Bar dataKey="Active"
            stackId="a"
            fill={activeFill}>
            {(activeVal > 0) && (
              <LabelList dataKey="ActiveLabel" position="insideRight" fill="#ddd" fontSize="12" />
            )}
          </Bar>
          {isProjectile && (<>
            <Bar dataKey="Projectile"
              stackId="a"
              fill={projectileFill}>
              <LabelList dataKey="Projectile" position="insideRight" fill="#ddd" fontSize="12" />
            </Bar>
            <Bar dataKey="ProjectileRecovery" stackId="a" fill={recoveryFill}>
              <LabelList dataKey="Projectile" position="insideRight" fill="#ddd" fontSize="12" />
            </Bar>
          </>
          )}
          {!isProjectile && (<>
            <Bar dataKey="Recovery" stackId="a" fill={recoveryFill}>
              {(recoveryVal > 0) && (
                <LabelList dataKey="Recovery" position="insideRight" fill="#ddd" fontSize="12" />
              )}
            </Bar>
          </>)}
          <Bar dataKey="Max" stackId="a" fill={utils.barColors.emptyFill} />
          {utils.ticksArray.map(tick => {
            return (
              <ReferenceLine key={uuid()} x={tick} stroke={utils.barColors.strokeColor} strokeWidth={2} isFront />
            );
          })}
          {Array.isArray(parsedActive) && parsedActive.map((tick, index) => {
            return (
              <ReferenceLine
                key={uuid()}
                x={tick - 1}
                stroke={utils.barColors.activeFill}
                strokeWidth={25} isFront>
                <Label position="insideRight" fill="#ddd" fontSize="12">{activeLabels[index]}</Label>
              </ReferenceLine>
            );
          })}
          {Array.isArray(parsedActive) && parsedActive.map(btick => {
            return (<>
              <ReferenceLine key={uuid()} x={btick} stroke={utils.barColors.strokeColor} strokeWidth={2} isFront />
              <ReferenceLine key={uuid()} x={btick - 1} stroke={utils.barColors.strokeColor} strokeWidth={2} isFront />
              <ReferenceLine key={uuid()} x={btick - 2} stroke={utils.barColors.strokeColor} strokeWidth={2} isFront />
            </>
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
