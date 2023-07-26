import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>404: Not Found</div>} />
    </Routes>
  );
};
