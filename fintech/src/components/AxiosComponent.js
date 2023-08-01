import React from 'react'
import axios from 'axios'

const AxiosComponent = () => {

    // 비동기 방식!
    const handleClick = () => {
        console.log("start");
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then( (response)=> {
            console.log(response);
        });
        console.log("end");
    };


  return (
    <div>
        <button onClick={handleClick}>send Request</button>
    </div>
  );
};

export default AxiosComponent