'use client';
import * as React from 'react';
import { MouseEvent, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Animate from '../Animate/Animate';
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
  const [localList, setLocalList] = useState<Details[]>(list);

  const [filter, setFilter] = useState('');

  const onClickHandler = (e: MouseEvent<HTMLElement>) => {
    const targetElement = e.target as HTMLElement;
    const targetDataIndex = parseInt(targetElement.attributes[0].value);
    setSelection({ name: list[targetDataIndex].name, index: targetDataIndex });
    setMenuShown(false);
  };

  useEffect(() => {
    setLocalList(list.filter(element => element.name.toLowerCase().includes(filter.toLowerCase())));
  }, [filter]);

  useEffect(() => {
    if (selection) {
      onChangeSelection(selection.index);
      setFilter('');
    }
  }, [selection]);

  return (
    <div className='relative'>
      <Animate>
        <div
          className='p-2 bg-purple-900 cursor-pointer hover:bg-purple-800 rounded-lg'
          onClick={() => setMenuShown(true)}
          data-testid='selector'
        >
          {menuShown ?
            <input
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              className='px-2 rounded bg-purple-900 text-white placeholder-white w-full focus-visible:outline-none '
              type='text'
              placeholder='Write here...' />
            : <span>{selection ? selection.name : title}</span>}

        </div>
      </Animate>
      {menuShown &&
        <div className='absolute top-[40px] w-full h-72 z-10 rounded-lg overflow-x-hidden overflow-y-auto'
          data-testid="selector-list">
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
