import * as React from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';

export interface IDynamicBackgroundProps {
  left?: string,
  right?: string;
}

export function DynamicBackground ({ left, right }: IDynamicBackgroundProps) {
  const [firstSelectionLeft, setFirstSelectionLeft] = useState(true);
  const [firstSelectionRight, setFirstSelectionRight] = useState(true);
  const [currentLeft, setCurrentLeft] = useState(left);
  const [currentRight, setCurrentRight] = useState(right);
  const [leftShow, setLeftShow] = useState(false);
  const [rightShow, setRightShow] = useState(false);

  useEffect(() => {
    if (left) {
      if (firstSelectionLeft) {
        setCurrentLeft(left);
        setLeftShow(true);
        setFirstSelectionLeft(false);
      } else {
        setLeftShow(false);
        setTimeout(() => {
          setCurrentLeft(left);
          setLeftShow(true);
        }, 1000);
      }
    }
  }, [left]);

  useEffect(() => {
    if (right) {
      if (firstSelectionRight) {
        setRightShow(false);
        setTimeout(() => {
          setCurrentRight(right);
          setRightShow(true);
        }, 1000);
      } else {
        setCurrentRight(right);
        setRightShow(true);
        setFirstSelectionRight(false);
      }
    }
  }, [right]);

  return (
    <div>
      <Transition show={leftShow}
        enter="transition-all duration-1000 ease-in-out"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100 -translate-x-1/2"
        leave="transition-all duration-1000 ease-in-out"
        leaveFrom="opacity-100 -translate-x-1/2"
        leaveTo="opacity-0 -translate-x-full"
      >
        {currentLeft &&
          <div className='absolute w-full bg-black'>
            <Image className='opacity-10'
              src={`/cards/left/${currentLeft}.jpg`}
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
        {right &&
          <div className='absolute w-full bg-black'>
            <Image className='opacity-10'
              src={`/cards/right/${currentRight}.jpg`}
              alt={`An image of ${currentRight}`}
              layout='responsive'
              width={100}
              height={100} />
          </div>
        }
      </Transition>
    </div>
  );
}
