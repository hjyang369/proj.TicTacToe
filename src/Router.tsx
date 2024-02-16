import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Game from "./pages/game";
import Result from "./pages/result";
import Readiness from "./pages/readiness";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/readiness" element={<Readiness />} />
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
