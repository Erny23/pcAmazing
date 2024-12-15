import { Routes, Route } from "react-router-dom";
import Header from "../layout/header";
import * as pages from "../pages";

const Router = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<pages.home />} />
          <Route path="*" element={<pages.error />} />
        </Routes>
      </main>
    </>
  );
};

export default Router;
