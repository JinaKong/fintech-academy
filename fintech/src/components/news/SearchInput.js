import React from 'react'

const SearchInput = ( {handleChange, handleClick} ) => {
  return (

    // 추가
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>검색</button>
    </div>
  );
};

export default SearchInput