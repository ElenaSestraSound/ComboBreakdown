import * as React from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import useDynamicBackground from './useDynamicBackground';

export interface IDynamicBackgroundProps {
  left?: string,
  right?: string;
}

export function DynamicBackground ({ left, right }: IDynamicBackgroundProps) {
  const { currentSelection: currentLeft, show: leftShow } = useDynamicBackground(left);
  const { currentSelection: currentRight, show: rightShow } = useDynamicBackground(right);

  return (
    <>
      <Transition show={leftShow}
        enter="transition-all duration-1000 ease-in-out"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100 -translate-x-1/2"
        leave="transition-all duration-1000 ease-in-out"
        leaveFrom="opacity-100 -translate-x-1/2"
        leaveTo="opacity-0 -translate-x-full"
      >
        {currentLeft &&
          <div className='fixed w-full'>
            <Image className='opacity-40'
              src={`/dynamicBackground/left/${currentLeft}.png`}
              alt={`An image of ${currentLeft}`}
              layout='responsive'
              width={100}
              height={100} />
          </div>
        }
      </Transition>
      <Transition show={rightShow}
        enter="transition-all duration-1000 ease-in-out"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-1/2"
        leave="transition-all duration-1000 ease-in-out"
        leaveFrom="opacity-100 translate-x-1/2"
        leaveTo="opacity-0 translate-x-full"
      >
        {currentRight &&
          <div className='fixed w-full'>
            <Image className='opacity-40'
              src={`/dynamicBackground/right/${currentRight}.png`}
              alt={`An image of ${currentRight}`}
              layout='responsive'
              width={100}
              height={100} />
          </div>
        }
      </Transition>
    </>
  );
}
