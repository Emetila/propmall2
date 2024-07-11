import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import {ReactComponent as Filter} from '../../assets/icon/filter.svg';
import style from './style.module.css';

export const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.searchbar}>
        <CiSearch className={style.icon} />
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
          className={style.input}
        />
        <Filter className={style.icon} />
      </div>
        
    </div>
  );
};