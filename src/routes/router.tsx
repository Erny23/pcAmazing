import { Route, Routes } from "react-router-dom";
import * as pages from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<pages.error404 />} />
      <Route path="/" element={<pages.home />} />
    </Routes>
  )
}

export default Router;
