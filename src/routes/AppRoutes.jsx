import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import GstQuotation from "../pages/GstQuotation";
import Knowledge from "../pages/Knowledge";
import Contact from "../pages/Contact";
import MinimumWages from "../pages/MinimumWages";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gst-quotation" element={<GstQuotation />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/minimum-wages" element={<MinimumWages />} />


        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
