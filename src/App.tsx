import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RequestADemo from "./pages/RequestADemo";
import ErrorPage from "./pages/ErrorPage";
import OurTeam from "./pages/about/OurTeam";
import PerformanceManagement from "./pages/services/PerformanceManagement";
import CorporateStrategy from "./pages/services/CorporateStrategy";
import InternationalMarketEntry from "./pages/services/InternationalMarketEntry";
import ProcessImprovementAndAutomation from "./pages/services/ProcessImprovementAndAutomation";
import ValuesMissionVison from "./pages/about/ValuesMissionVison";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* for mobile only since I can't drop pop up form*/}
        <Route path="/request-demo" element={<RequestADemo />} /> 


        {/* Services */}
        <Route path="/services/corporate-strategy" element={<CorporateStrategy />} />
        <Route path="/services/international-market-entry" element={<InternationalMarketEntry />} />
        <Route path="/services/performance-mangement" element={<PerformanceManagement />} />
        <Route path="/services/process-improvement-and-automation" element={<ProcessImprovementAndAutomation />} />

        {/* About */}
        <Route path="/about-team" element={<OurTeam />} />
        <Route path="/solutions/values-mission-vision" element={<ValuesMissionVison />} />
        <Route path="/*" element={<ErrorPage />} />
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
