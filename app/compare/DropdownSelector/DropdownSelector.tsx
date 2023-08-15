'use client';
import * as React from 'react';
import { MouseEvent, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
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
  const [localList, reOrderLocalList] = useState<Details[]>(list);

  const onClickHandler = (e: MouseEvent<HTMLElement>) => {
    const targetElement = e.target as HTMLElement;
    const targetDataIndex = parseInt(targetElement.attributes[0].value);
    setSelection({ name: list[targetDataIndex].name, index: targetDataIndex });
    setMenuShown(false);
  };

  useEffect(() => {
    if (selection) {
      onChangeSelection(selection.index);
      reOrderLocalList(prev => {
        const newList = prev.filter(elem => elem.name !== selection.name);
        newList.unshift(selection);
        return newList;
      });
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
          {localList.map((character) => <div
            data-index={character.index}
            className='block p-2 bg-purple-700 cursor-pointer hover:bg-purple-400'
            key={uuid()}
            onClick={onClickHandler}>
            <span
              data-index={character.index}
            >{character.name}</span></div>)}
        </div>
      }
    </div>
  );
}
