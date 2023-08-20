'use client';

import { useState } from 'react';
import GlossaryListItem from './glossary-list-item';
import { GlossaryItem } from '@/utils/types';
import data from '@/public/glossary.json';

export default function Glossary () {
  const sortedData = sortByTerm(data);
  const filterLetters = 'abcdefghijklmnopqrstuvwxyz#'.split('');
  const [activeLetter, setActiveLetter] = useState('');
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(sortedData);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    let newFilteredData = [...sortedData];
    newFilteredData = newFilteredData.filter((item) => {
      return item.term.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
    });
    setActiveLetter('');
    setFilteredData(newFilteredData);
  };
  const handleLetterFilterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const filterLetter = e.currentTarget.hash.substring(1);
    let newFilteredData = [...sortedData];

    if (filterLetter === activeLetter) {
      setActiveLetter('');
    } else {
      newFilteredData = newFilteredData.filter((item) => {
        if (filterLetter !== '#') {
          return item.term.toLowerCase()[0].indexOf(filterLetter.toLowerCase()) !== -1;
        } else {
          return Number.isInteger(+item.term[0]);
        }
      });
      setActiveLetter(filterLetter);
    }
    setQuery('');
    setFilteredData(newFilteredData);
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-10 md:px-20 glossary-page">
      <div>
        <form>
          <label htmlFor="glossary-filter">Search Glossary</label>
          <input id="glossary-filter" type="text" value={query} onChange={handleSearchChange} className="py-1 p-2 my-2 w-full rounded" />
        </form>
        <ul className="filter-letters mb-8">
          {filterLetters.map((letter) => {
            return (<li key={letter}><a onClick={handleLetterFilterClick} href={`#${letter}`} className={activeLetter === letter ? `active` : ``}>{`${letter}`}</a></li>);
          })}
        </ul>
      </div>
      <ul className="w-full">
        {filteredData && filteredData.map((item) => {
          return (
            <li key={item.term}>
              <GlossaryListItem item={item}></GlossaryListItem>
            </li>
          );
        }
        )}
      </ul>
    </div>
  );
}

function sortByTerm (data: GlossaryItem[]) {
  return data.sort((a, b) => (a.term > b.term) ? 1 : -1);
}