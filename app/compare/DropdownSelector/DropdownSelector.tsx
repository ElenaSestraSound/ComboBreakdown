'use client';
import * as React from 'react';
import { MouseEvent, useEffect, useState } from 'react';

type Details = {
  name: string,
  index: number;
};

export type IDropdownSelectorProps = {
  list: Details[],
  title: string,
  onChangeSelection: (selectedIndex: number) => void;
};

export default function DropdownSelector ({ list, title, onChangeSelection }: IDropdownSelectorProps) {
  const [selection, setSelection] = useState<Details | null>(null);
  const [menuShown, setMenuShown] = useState(false);

  const onClickHandler = (e: MouseEvent<HTMLElement>) => {
    const targetElement = e.target as HTMLElement;
    const targetId = parseInt(targetElement.id);
    setSelection({ name: list[targetId].name, index: targetId });
    setMenuShown(false);
  };

  useEffect(() => {
    if (selection) {
      onChangeSelection(selection.index);
    }
  }, [selection]);

  return (
    <div className='relative'>
      <div
        className='p-2 bg-purple-900 cursor-pointer hover:bg-purple-800'
        onClick={() => setMenuShown(prev => !prev)}>
        <span>{selection ? selection.name : title}</span>
      </div>
      {menuShown &&
        <div className='absolute top-0 w-full h-72 z-10'>
          {list.map((character, index) => <span
            className='block p-2 bg-purple-700 cursor-pointer hover:bg-purple-400'
            key={Date.now() + index}
            id={index.toString()}
            onClick={onClickHandler}
          >{character.name}</span>)}
        </div>
      }
    </div>
  );
}
