import * as React from 'react';
import NextImage, { ImageLoader } from 'next/image';
import { Transition } from '@headlessui/react';
import useDynamicBackground from './useDynamicBackground';
import { useEffect, useState } from 'react';

export interface IDynamicBackgroundProps {
  left?: string,
  right?: string;
}

export function DynamicBackground ({ left, right }: IDynamicBackgroundProps) {
  const { currentSelection: currentLeft, show: leftShow } = useDynamicBackground(left);
  const { currentSelection: currentRight, show: rightShow } = useDynamicBackground(right);

  const [imgLeft, setImgLeft] = useState('');
  const [imgRight, setImgRight] = useState('');

  useEffect(() => {
    const imagePath = `/dynamicBackground/left/${currentLeft}.png`;
    const img = new Image();
    img.src = imagePath;
    img.onload = () => {
      console.log(`Image preloaded: ${imagePath}`);
      setImgLeft(imagePath);
    };
  }, [currentLeft]);

  useEffect(() => {
    const imagePath = `/dynamicBackground/right/${currentRight}.png`;
    const img = new Image();
    img.src = imagePath;
    img.onload = () => {
      console.log(`Image preloaded: ${imagePath}`);
      setImgRight(imagePath);
    };
  }, [currentRight]);

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
            <NextImage className='opacity-80'
              src={imgLeft}
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
            <NextImage className='opacity-80'
              src={imgRight}
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
