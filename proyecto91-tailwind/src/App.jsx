import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotificationsMesage from "./assets/NotificationsMesage";
import About from "./pages/About";
import Home from "./pages/Home";
import Categories from "./pages/categories";
import CategoryProduct from "./pages/categoryProduct";
import Header from "./assets/header"



function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline"></h1>
      <BrowserRouter>
        <Routes>

          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/categoryProduc" element={<CategoryProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories" element={<Header />} />
        </Routes>

      </BrowserRouter>
      <NotificationsMesage />
      <p>Puede existir mas contenido</p>
    </>
  );
}

export default App;
