import React, { useRef } from 'react';

const SearchBar = props => {
  const InputRef = useRef(null);

  const { onSearch } = props;

  const Search = () => {
    onSearch(InputRef.current.value);
  };

  return (
    <div className='container w-25 mb-4'>
      <div className='input-group'>
        <input
          type='search'
          ref={InputRef}
          onChange={Search}
          className='form-control rounded'
          placeholder='Search'
          aria-label='Search'
          aria-describedby='search-addon'
        />
      </div>
    </div>
  );
};

export default SearchBar;
