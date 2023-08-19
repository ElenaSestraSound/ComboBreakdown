import * as React from 'react';
import NextImage, { ImageLoader } from 'next/image';
import { Transition } from '@headlessui/react';
import useDynamicBackground from './useDynamicBackground';
import { useEffect } from 'react';

export interface IDynamicBackgroundProps {
  left?: string,
  right?: string;
}

export function DynamicBackground ({ left, right }: IDynamicBackgroundProps) {
  const { currentSelection: currentLeft, show: leftShow } = useDynamicBackground(left);
  const { currentSelection: currentRight, show: rightShow } = useDynamicBackground(right);

  const preloadImage = (src: string) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.onload = resolve;
      image.onerror = reject;
    });
  };

  useEffect(() => {
    const imgPath = `/dynamicBackground/left/${currentLeft}.png`;
    preloadImage(imgPath);
  }, [currentLeft]);

  useEffect(() => {
    const imgPath = `/dynamicBackground/left/${currentRight}.png`;
    preloadImage(imgPath);
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
            <NextImage className='opacity-80'
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
