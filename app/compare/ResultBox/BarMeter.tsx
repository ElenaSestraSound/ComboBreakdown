import * as React from 'react';

export interface IBarMeterProps {
  startup: number,
  active: string,
  recovery: number;
}

export function BarMeter ({ startup, active, recovery }: IBarMeterProps) {
  const activeFirst = active.split('-')[0];
  const activeLast = active.split('-')[1];
  return (
    <div className='flex justify-center'>
      <div>
        {startup}
      </div>
      <div>
        {activeFirst}
      </div>
      <div>
        {activeLast}
      </div>
      <div>
        {recovery}
      </div>
    </div>
  );
}
