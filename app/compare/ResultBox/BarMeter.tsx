import * as React from 'react';

export interface IBarMeterProps {
  startup: number,
  active: string,
  recovery: number;
}

export function BarMeter ({ startup, active, recovery }: IBarMeterProps) {
  return (
    <div className='w-full flex justify-center'>
      {/* TODO Fill with new chart library */}
    </div >
  );
}
