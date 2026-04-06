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
import ComplianceRetainership from "../pages/ComplianceRetainership";
import StrategicAdvisory from "../pages/StrategicAdvisory";
import ComplianceAudit from "../pages/ComplianceAudit";
import EstablishmentSetup from "../pages/EstablishmentSetup";
import LabourCodeTransition from "../pages/LabourCodeTransition";
import PayrollStructuring from "../pages/PayrollStructuring";
import LabourLawAdvisory from "../pages/LabourLawAdvisory";
import PFESICCompliance from "../pages/PFESICCompliance";
import ContractLabourCompliance from "../pages/CLRACompliance";
import AuditInspectionReadiness from "../pages/AuditReadiness";
import LabourCodeAdvisory from "../pages/LabourLawAdvisory";

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
          <Route path="/ComplianceRetainership" element={<ComplianceRetainership />} />
          <Route path="/StrategicAdvisory" element={<StrategicAdvisory />} />
          <Route path="/ComplianceAudit" element={<ComplianceAudit />} />
          <Route path="/EstablishmentSetup" element={<EstablishmentSetup />} />
          <Route path="/LabourCodeTransition" element={<LabourCodeTransition />} />
          <Route path="/PayrollStructuring" element={<PayrollStructuring />} />
          <Route path="/LabourLawAdvisory" element={<LabourLawAdvisory />} />
          <Route path="/PFESICCompliance" element={<PFESICCompliance />} />
          <Route path="/ContractLabourCompliance" element={<ContractLabourCompliance />} />
          <Route path="/AuditInspectionReadiness" element={<AuditInspectionReadiness />} />
          <Route path="/LabourCodeAdvisory" element={<LabourCodeAdvisory />} />
          


        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
