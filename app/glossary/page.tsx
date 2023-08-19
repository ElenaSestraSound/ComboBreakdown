'use client';

import { useState } from 'react';
import GlossaryListItem from './glossary-list-item';
import { GlossaryItem } from '@/utils/types';
import data from '@/public/glossary.json';

export default function Glossary () {
  const sortedData = sortByTerm(data);
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(sortedData);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    let newFilteredData = [...sortedData];
    newFilteredData = newFilteredData.filter((item) => {
      return item.term.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
    });
    setFilteredData(newFilteredData);
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-10 md:px-20 glossary-page">
      <div>
        <form>
          <label htmlFor="glossary-filter">Search Glossary</label>
          <input id="glossary-filter" type="text" value={query} onChange={handleSearchChange} className="py-1 p-2 mb-8 w-full rounded" />
        </form>
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