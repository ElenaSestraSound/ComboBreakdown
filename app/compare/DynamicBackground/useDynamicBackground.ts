import * as React from 'react';
import { useEffect, useState } from 'react';



export default function useDynamicBackground (character?: string) {
  const [firstSelection, setFirstSelection] = useState(true);
  const [currentSelection, setCurrentSelection] = useState(character);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (character) {
      if (firstSelection) {
        setCurrentSelection(character);
        setShow(true);
        setFirstSelection(false);
      } else {
        setShow(false);
        setTimeout(() => {
          setCurrentSelection(character);
          setShow(true);
        }, 1000);
      }
    }
  }, [character]);

  return {
    currentSelection,
    show
  };
}
