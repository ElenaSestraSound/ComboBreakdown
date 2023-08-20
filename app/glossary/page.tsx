'use client';

import { useState, useMemo } from 'react';
import GlossaryListItem from './glossary-list-item';
import { GlossaryItem } from '@/utils/types';
import Pagination from '@/utils/Pagination';
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
    setCurrentPage(1);
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
    setCurrentPage(1);
  };
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]);

  return (
    <div className="max-w-4xl mx-auto  glossary-page bg-[url('/characterpage/juri.png')]">
      <div className="overlay h-full w-full py-10 px-10 md:px-20">
        <div>
          <form>
            <label htmlFor="glossary-filter">Search Glossary</label>
            <input id="glossary-filter" type="text" value={query} onChange={handleSearchChange} placeholder="Search..." className="py-1 p-2 mt-1 mb-2 w-full rounded" />
          </form>
          <ul className="filter-letters mb-8">
            {filterLetters.map((letter) => {
              return (<li key={letter}><a onClick={handleLetterFilterClick} href={`#${letter}`} className={activeLetter === letter ? `active` : ``}>{`${letter}`}</a></li>);
            })}
          </ul>
        </div>
        <ul className="w-full">
          {currentData && currentData.map((item) => {
            return (
              <li key={item.term}>
                <GlossaryListItem item={item}></GlossaryListItem>
              </li>
            );
          }
          )}
        </ul>
        <div className="w-full mt-3">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredData.length}
            pageSize={pageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}

function sortByTerm (data: GlossaryItem[]) {
  return data.sort((a, b) => (a.term > b.term) ? 1 : -1);
}