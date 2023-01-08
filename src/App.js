import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DetailPage";
import SearchPage from "./Pages/SearchPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path=":movieId" element={<DetailPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
