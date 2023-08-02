/*
<실습> 뉴스 검색 API 만들기
*/

import React, { useState } from "react";
import axios from "axios";
import AppHeader from "../components/common/AppHeader";
import SearchInput from "../components/news/SearchInput";
import NewsList from "../components/news/NewsList";

const NewsPage = () => {
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  const handleClick = () => {
    console.log(searchText);

    //추가 
    axios
    .get(`https://newsapi.org/v2/everything?q=${searchText}&from=2023-07-02&sortBy=publishedAt&apiKey=d30264fc191e4ef095b080b9e7673d29`
    )
    .then( ( {data} )=> {
        console.log(data.articles);
        setSearchResult(data.articles);
    });
  };

  return (
    <div>
      <AppHeader title={"뉴스검색"}></AppHeader>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList newsList={searchResult}></NewsList>
    </div>
  );
};

export default NewsPage;