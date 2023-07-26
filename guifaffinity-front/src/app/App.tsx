import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Header } from "../components/header";
import "./App.css";
import { Detail } from "../components/detail/Detail";

export const App = () => {
  return (
    <div className="app">
      <main className="mainContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
};
