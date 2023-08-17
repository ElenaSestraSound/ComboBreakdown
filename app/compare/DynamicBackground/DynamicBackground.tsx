import * as React from 'react';
import Image from 'next/image';

export interface IDynamicBackgroundProps {
  left?: string,
  right?: string;
}

export function DynamicBackground ({ left, right }: IDynamicBackgroundProps) {
  return (
    <>
      {left &&
        <div className='absolute w-full right-1/2 bg-black transition ease-in-out delay-150 duration-300'>
          <Image className='opacity-10'
            src={`/cards/left/${left}.jpg`}
            alt={`An image of ${left}`}
            layout='responsive'
            width={100}
            height={100} />
        </div>
      }
      {right &&
        <div className='absolute top-50 w-full left-1/2 bg-black'>
          <Image className='opacity-10'
            src={`/cards/right/${right}.jpg`}
            alt={`An image of ${right}`}
            layout='responsive'
            width={100}
            height={100} />
        </div>
      }
    </>
  );
}
