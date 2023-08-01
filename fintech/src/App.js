import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import ListComponent from "./components/ListComponent";
import InputComponent from "./components/InputComponent";
import AxiosComponent from "./components/AxiosComponent";
import StyledComponent from "./components/styledComponent";


function App() {
  return (

    // 라우팅으로 변경
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome></Welcome>}></Route>
      <Route path="/axios" element={<AxiosComponent />}></Route>
        <Route path="/input" element={<InputComponent />}></Route>
        <Route path="/list" element={<ListComponent />}></Route>
        <Route path="/style" element={<StyledComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;