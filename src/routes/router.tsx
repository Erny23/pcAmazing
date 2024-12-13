import { Routes, Route } from "react-router-dom";
import * as pages from "../pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<pages.home />} />
        <Route path="*" element={<pages.error />} />
      </Routes>
    </>
  );
};

export default Router;
