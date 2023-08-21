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
  alignRight?: boolean;
};

export default function DropdownSelector ({ list, title, onChangeSelection, alignRight }: IDropdownSelectorProps) {
  const [selection, setSelection] = useState<Details | null>(null);
  const [menuShown, setMenuShown] = useState(false);
  const imagesRoute = alignRight ? '/cards/right' : '/cards/left';
  const [image, setImage] = useState(imagesRoute + '/fightingGround.jpg');
  const [localList, reOrderLocalList] = useState<Details[]>(list);

  const divClass = alignRight
    ? 'px-6 min-w-[245px] cursor-pointer h-20 bg-cover bg-center flex flex-col justify-center rounded-lg text-right'
    : 'px-6 min-w-[245px] cursor-pointer h-20 bg-cover bg-center flex flex-col justify-center rounded-lg';

  const onClickHandler = (e: MouseEvent<HTMLElement>) => {
    const targetElement = e.target as HTMLElement;
    const targetDataIndex = parseInt(targetElement.attributes[0].value);
    setSelection({ name: list[targetDataIndex].name, index: targetDataIndex });
    setMenuShown(false);
  };

  useEffect(() => {
    if (selection) {
      setImage(`${imagesRoute}/${selection.name.toLowerCase()}.jpg`);
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
      <Animate>
        <div
          className={divClass}
          style={{ "backgroundImage": `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${image})` }}
          onClick={() => {
            setMenuShown(prev => !prev);
          }}>
          <span
            className='text-3xl font-bold'
          >{selection ? selection.name.toUpperCase() : title}</span>
        </div>
      </Animate>
      {menuShown &&
        <div className='absolute top-0 w-full h-72 z-30'>
          {localList.map((character) => <div
            data-index={character.index} //don't move this property from first position
            className={divClass}
            style={{ "backgroundImage": `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${imagesRoute}/${character.name.toLowerCase()}.jpg)` }}
            key={uuid()}
            onClick={onClickHandler}>
            <span
              data-index={character.index} //don't move this property from first position
              className='text-3xl font-bold'
            >{character.name.toUpperCase()}</span></div>)}
        </div>
      }
    </div>
  );
}
