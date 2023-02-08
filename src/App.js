import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./layout/Auth";
import Layout from "./layout/Layout";
import ScrollToTop from "./utils/service/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
