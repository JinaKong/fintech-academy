import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Welcome from "./components/Welcome";
//import ListComponent from "./components/ListComponent";
//import AxiosComponent from "./components/AxiosComponent";
//import NewsPage from "./pages/NewsPage";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import MainPage from "./pages/MainPage";
import BalancePage from "./pages/BalancePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/news" element={<NewsPage />}></Route> */}
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/authResult" element={<AuthResultPage />}></Route>
        <Route path="/balance" element={<BalancePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;