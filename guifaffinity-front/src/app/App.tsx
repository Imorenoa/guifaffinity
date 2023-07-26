import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Header } from "../components/header";
import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <main className="mainContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404: Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
};
