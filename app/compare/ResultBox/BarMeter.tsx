import { data } from 'autoprefixer';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { XAxis, XYPlot, HorizontalBarSeries, VerticalGridLines } from 'react-vis';

export interface IBarMeterProps {
  startup: number,
  active: string,
  recovery: number;
}

export function BarMeter ({ startup, active, recovery }: IBarMeterProps) {
  // const activeFirst = parseInt(active.split('-')[0]);
  const activeLast = parseInt(active.split('-')[1]);

  return (
    <div className='w-full flex justify-center'>
      <XYPlot width={600} height={70} stackBy="x" xDomain={[0, 60]}>
        <VerticalGridLines tickTotal={60} style={{ stroke: '#fff' }} />
        <XAxis style={{ line: { stroke: '#fff' }, ticks: { stroke: '#fff' }, text: { fill: '#fff' } }}
          tickValues={[startup, activeLast, recovery]} />
        <HorizontalBarSeries barWidth={0.8} data={[{ y: 1, x: startup }]} color={'#14b68f'} />
        <HorizontalBarSeries barWidth={0.8} data={[{ y: 1, x: activeLast - startup }]} color={'#d01f5c'} />
        <HorizontalBarSeries barWidth={0.8} data={[{ y: 1, x: recovery - activeLast }]} color={'#0670c8'} />
        <HorizontalBarSeries barWidth={0.8} data={[{ y: 1, x: 40 }]} color={'#0e0e0c'} />
      </XYPlot>
    </div >
  );
}
