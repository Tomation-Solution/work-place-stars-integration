import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RequestADemo from "./pages/RequestADemo";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request-demo" element={<RequestADemo />} />
        <Route path="/*" element={<ErrorPage />} />
        {/* <Route path="/request" element={<RequestDemo />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
