import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Welcome from "./components/Welcome";
//import ListComponent from "./components/ListComponent";
//import AxiosComponent from "./components/AxiosComponent";
//import NewsPage from "./pages/NewsPage";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import MainPage from "./pages/MainPage";
import BalancePage from "./pages/BalancePage";
import QrCodePage from "./pages/QrCodePage";
import QrReaderPage from "./pages/QrReaderPage";

import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/news" element={<NewsPage />}></Route> */}
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/authResult" element={<AuthResultPage />}></Route>
        <Route path="/balance" element={<BalancePage />}></Route>
        <Route path="/qrcode" element={<QrCodePage />}></Route>
        <Route path="/qrreader" element={<QrReaderPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;