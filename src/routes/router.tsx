import { Routes, Route } from "react-router-dom";
import * as pages from "../pages"

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<pages.Home />} />
                <Route path="*" element={<pages.Error />} />
            </Routes>
        </>
    )
}

export default Router;