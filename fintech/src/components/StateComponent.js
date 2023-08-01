import { useState } from "react";

const StateComponent = () => {
  /* 
  변수 사용 -> 변경되어도 리렌더링되지 않음
  let username = "홍길동"; 
  */

  // State 사용 
  let [username] = useState("홍길동");

  

    return(
    <div>
      <p> state 관련 코드 작성 </p>
    </div>
    );
  };

  export default StateComponent;
  