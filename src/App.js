import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Auth from "./layout/Auth";
import Layout from "./layout/Layout";
import ScrollToTop from "./utils/service/ScrollToTop";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
     <ToastContainer />
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
