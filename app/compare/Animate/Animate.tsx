import { Transition } from '@headlessui/react';
import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';

export interface IAnimateProps {
  children: ReactNode;
}

export default function Animate ({ children }: IAnimateProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Transition show={show}
      enter="transition-all ease-in-out duration-1000 delay-[200ms]"
      enterFrom="opacity-0 -translate-y-6"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}
