import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; 
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { 
  Calendar, ChartLine, Shield, Users, Search, 
  CheckCircle, FileText, Scale, Mail, Phone, 
  TrendingUp, Calculator, AlertTriangle, Cpu, ArrowRight
} from 'lucide-react';

const DynamicButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 rounded-full font-bold text-xs tracking-wide transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 overflow-hidden group border-2 ${
        variant === 'primary' 
          ? 'bg-[#1f1916] text-[#f7ede2] border-[#1f1916] shadow-[0_6px_20px_rgba(31,25,22,0.12)] hover:bg-[#d47f63] hover:border-[#d47f63] hover:shadow-[0_10px_25px_rgba(233,150,122,0.25)]' 
          : 'bg-white text-[#1f1916] border-[#e9967a] hover:bg-[#fff9f6]'
      } ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

const StructuralCard = ({ children, className = '', accentColor = 'border-l-[#e9967a]' }) => {
  return (
    <div
      className={`bg-white border-2 border-[#fbdad0]/60 border-l-4 ${accentColor} rounded-2xl p-6 relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(233,150,122,0.1)] shadow-[0_4px_15px_rgba(31,25,22,0.02)] ${className}`}
    >
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#e9967a]/5 blur-[60px] rounded-full pointer-events-none" />
      {children}
    </div>
  );
};

const LabourforgeCinematic = () => {
  const navigate = useNavigate();
  const [activeMatrixTab, setActiveMatrixTab] = useState('payroll');
  const [newsFeed, setNewsFeed] = useState([
    {
      title: "Designing Compliant Payroll Structures for a Changing Labour Law Landscape",
      shortDescription: "<p>Supporting organizations in aligning payroll, contracts, and statutory compliance with evolving labour regulations.</p>",
      category: "CORE ARCHITECTURE ARCHETYPE",
      actionType: "none"
    }
  ]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [fadeStatus, setFadeStatus] = useState(true);

  // Rotating header phrases states
  const phrases = [
    "Industry-Level Payroll Advisory",
    "Strategic Labour Compliance",
    "Designing Compliant Payroll Structures"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const serviceRoutes = {
    payroll: '/PayrollStructuring',
    pfesic: '/PFESICCompliance',
    labourLaw: '/LabourLawAdvisory',
    contractLabour: '/ContractLabourCompliance',
    audit: '/AuditInspectionReadiness',
    labourCode: '/LabourCodeAdvisory'
  };

  const coreMatrixData = {
    payroll: {
      title: "Payroll Structuring & Management",
      desc: "Understand the fundamentals of designing a legally compliant and business-friendly salary structure. Learn how different salary components, statutory obligations, and business requirements work together to create an effective payroll framework.",
      points: [
        <><strong>Key Concepts:</strong> Payroll structuring involves balancing business objectives, employee compensation, and statutory compliance. It focuses on designing a salary structure that is compliant, cost-effective, tax-efficient, and aligned with applicable labour laws while ensuring transparency and payroll accuracy.</>,
        <><strong>Labour Forge Framework:</strong> Every organization has unique payroll requirements. The Labour Forge Framework follows a systematic approach to evaluate business needs, assess statutory obligations, and design payroll structures that are compliant, practical, and aligned with evolving labour laws.</>,
        <><strong>Common Challenges:</strong> Organizations often face payroll challenges due to evolving labour laws, changing statutory requirements, and inconsistent salary structures. Common issues include compliance gaps, incorrect statutory deductions, minimum wage deviations, higher payroll costs, reduced employee take-home pay, and increased audit risks.</>,
        <><strong>Resources:</strong> Access a curated collection of practical resources designed to support payroll professionals, HR teams, and business leaders. These include compliance checklists, sample formats, payroll templates, reference guides, and other tools to simplify payroll planning and statutory compliance.</>,
        <><strong>Latest Updates:</strong> Stay informed with the latest amendments, circulars, notifications, and best practices related to payroll structuring and statutory compliance.</>,
        <><strong>Need Expert Assistance?:</strong> Every organization has unique payroll requirements. Labour Forge Advisors helps businesses design compliant, cost-effective payroll structures aligned with labour laws, statutory regulations, and business objectives.</>
      ],
      route: serviceRoutes.payroll
    },
    pfesic: {
      title: "PF & ESIC Compliance",
      desc: "Effective management of PF and ESIC compliance is essential for every covered establishment. Labour Forge helps organizations understand statutory obligations, maintain compliance, and reduce risks associated with payroll processing, inspections, and regulatory reporting.",
      points: [
        <><strong>Key Concepts:</strong> PF and ESIC compliance extends beyond monthly contributions. It includes employee coverage, wage applicability, statutory registrations, timely filings, benefit administration, and ongoing adherence to changing labour laws and regulatory guidelines.</>,
        <><strong>Labour Forge Framework:</strong> Our approach focuses on evaluating statutory applicability, validating payroll compliance, managing registrations and monthly obligations, and ensuring timely filings with complete documentation. The framework is designed to minimize compliance risks while supporting smooth payroll operations.</>,
        <><strong>Common Challenges:</strong> Organizations often face issues such as incorrect employee coverage, contribution errors, delayed statutory filings, UAN/IP registration gaps, inspection observations, and frequent regulatory changes that may result in financial liabilities and compliance risks.</>,
        <><strong>Resources:</strong> Access practical compliance resources, contribution references, due date calendars, checklists, official forms, and implementation guides to support day-to-day PF and ESIC administration.</>,
        <><strong>Latest Updates:</strong> Stay informed with the latest EPFO and ESIC notifications, circulars, contribution-related changes, wage revisions, and compliance updates issued by the respective authorities.</>,
        <><strong>Need Expert Assistance?:</strong> Whether you require support with registrations, monthly compliance, payroll validation, statutory audits, or inspection readiness, Labour Forge Advisors provides practical, business-oriented PF and ESIC compliance solutions.</>
      ],
      route: serviceRoutes.pfesic
    },
    labourLaw: {
      title: "Labour Law Advisory",
      desc: "Labour law compliance requires continuous monitoring of Central and State legislations, regulatory updates, and industry-specific obligations. Labour Forge provides practical advisory services to help organizations understand legal requirements, reduce compliance risks, and build sustainable HR and payroll practices.",
      points: [
        <><strong>Practice Areas:</strong> Our advisory services cover labour laws, payroll compliance, statutory registrations, employment documentation, workforce policies, contractor compliance, inspections, and day-to-day compliance queries, ensuring practical solutions aligned with business requirements.</>,
        <><strong>Our Advisory Approach:</strong> Every organization has unique compliance requirements. We assess existing practices, identify compliance gaps, interpret applicable laws, recommend practical solutions, and support organizations in implementing compliant and business-friendly processes.</>,
        <><strong>Common Challenges:</strong> Organizations frequently encounter changing labour laws, varying state-specific requirements, documentation gaps, contractor compliance issues, inspection notices, and uncertainty in interpreting statutory provisions, leading to operational and legal risks.</>,
        <><strong>Resources:</strong> Explore practical guides, compliance checklists, statutory references, policy templates, government notifications, and implementation resources designed to simplify labour law compliance.</>,
        <><strong>Latest Updates:</strong> Stay updated with the latest labour law amendments, government notifications, judicial developments, and compliance circulars issued by Central and State authorities.</>,
        <><strong>Need Expert Assistance?:</strong> Whether you need ongoing compliance support, policy review, advisory on labour laws, or assistance with complex statutory matters, Labour Forge Advisors offers practical guidance tailored to your organization's needs.</>
      ],
      route: serviceRoutes.labourLaw
    },
    contractLabour: {
      title: "Contract Labour Compliance",
      desc: "Managing a contract workforce requires balancing operational flexibility with statutory compliance. Labour Forge helps organizations establish compliant contractor engagement practices, manage Principal Employer responsibilities, and strengthen workforce governance while minimizing legal and operational risks.",
      points: [
        <><strong>Key Focus Areas:</strong> Our services cover contractor compliance, Principal Employer obligations, statutory documentation, licensing requirements, wage compliance, payroll validation, and ongoing monitoring to support a legally compliant contract labour framework.</>,
        <><strong>Labour Forge Framework:</strong> We evaluate the engagement model, determine applicable legal requirements, review existing compliance practices, identify potential gaps, and recommend practical solutions to strengthen contractor governance and regulatory compliance.</>,
        <><strong>Common Challenges:</strong> Organizations often face challenges related to contractor documentation, statutory compliance, wage payments, licence management, record maintenance, inspection readiness, and clearly defining the responsibilities of the Principal Employer and Contractor.</>,
        <><strong>Resources:</strong> Access practical compliance checklists, document lists, statutory references, sample registers, agreement formats, and implementation guides to support effective contract labour management.</>,
        <><strong>Latest Updates:</strong> Stay informed with the latest labour law amendments, government notifications, judicial developments, and regulatory updates impacting contract labour compliance across industries.</>,
        <><strong>Need Expert Assistance?:</strong> Whether you engage a single contractor or manage a large outsourced workforce, Labour Forge Advisors provides practical advisory and compliance support to help organizations manage contract labour with confidence and regulatory compliance.</>
      ],
      route: serviceRoutes.contractLabour
    },
    audit: {
      title: "Compliance Audit & Inspection Readiness",
      desc: "Regulatory inspections and compliance audits require more than maintaining statutory records. Labour Forge helps organizations assess compliance preparedness, strengthen documentation, and establish systematic processes to confidently respond to audits and regulatory inspections.",
      points: [
        <><strong>Key Focus Areas:</strong> Our services focus on compliance health checks, statutory documentation, payroll verification, register maintenance, contractor compliance, inspection preparedness, and identifying compliance gaps before they become business risks.</>,
        <><strong>Labour Forge Framework:</strong> We review existing compliance practices, assess statutory records and documentation, identify potential risks, recommend corrective actions, and support organizations in strengthening their overall compliance readiness.</>,
        <><strong>Common Challenges:</strong> Organizations often encounter incomplete documentation, outdated statutory records, payroll discrepancies, compliance gaps, inspection notices, and difficulty responding to regulatory authorities within prescribed timelines.</>,
        <><strong>Resources:</strong> Access practical audit checklists, document checklists, statutory register references, compliance trackers, inspection preparation guides, and other implementation resources to strengthen audit readiness.</>,
        <><strong>Latest Updates:</strong> Stay informed with the latest regulatory developments, inspection trends, government notifications, and compliance requirements affecting payroll, labour laws, and statutory obligations.</>,
        <><strong>Need Expert Assistance?:</strong> Whether preparing for a statutory inspection, internal compliance review, client audit, or due diligence exercise, Labour Forge Advisors provides practical support to help organizations strengthen compliance, reduce risks, and improve audit readiness.</>
      ],
      route: serviceRoutes.audit
    }
  };

  const dynamicRiskVectors = [
    { 
      title: "Incorrect Salary Structuring", 
      color: "border-l-[#e9967a]", 
      desc: "Poorly designed salary structures may lead to statutory non-compliance, increased payroll costs, and reduced employee take-home pay.",
      label: "Payroll Compliance Risk"
    },
    { 
      title: "PF & ESIC Compliance Gaps", 
      color: "border-l-[#3d5a80]", 
      desc: "Incorrect employee coverage, wage classification, or contribution calculations can result in statutory liabilities and inspection observations.",
      label: "Social Security Compliance"
    },
    { 
      title: "Weak Documentation & Records", 
      color: "border-l-[#d47f63]", 
      desc: "Missing registers, incomplete employee records, and inadequate documentation can create challenges during audits and labour inspections.",
      label: "Documentation Risk"
    },
    { 
      title: "Labour Law Compliance Challenges", 
      color: "border-l-[#3d5a80]", 
      desc: "Keeping pace with Central and State labour law changes can be difficult without a structured compliance framework and periodic reviews.",
      label: "Regulatory Compliance"
    },
    { 
      title: "Contractor Compliance Gaps", 
      color: "border-l-[#1f1916]", 
      desc: "Inadequate monitoring of contractor obligations may expose organizations to legal, financial, and Principal Employer liabilities.",
      label: "Vendor Compliance Risk"
    }
  ];

  // Dynamic Typewriter / Phrase Rotator Logic
  useEffect(() => {
    let timer;
    const currentFullText = phrases[phraseIndex];

    if (!isDeleting) {
      if (displayedText !== currentFullText) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 50);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 5000);
      }
    } else {
      if (displayedText !== '') {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 30);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  useEffect(() => {
    const quillCdnId = "quill-snow-cdn";
    if (!document.getElementById(quillCdnId)) {
      const link = document.createElement("link");
      link.id = quillCdnId;
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/react-quill-new@3.3.3/dist/quill.snow.css";
      document.head.appendChild(link);
    }

    const fontCdnId = "google-fonts-home";
    if (!document.getElementById(fontCdnId)) {
      const fontLink = document.createElement("link");
      fontLink.id = fontCdnId;
      fontLink.rel = "stylesheet";
      fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Open+Sans:wght@400;600;700&family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap";
      document.head.appendChild(fontLink);
    }

    const newsRef = collection(db, "news");
    const q = query(newsRef, orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const articles = [];
      snapshot.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() });
      });
      if (articles.length > 0) {
        setNewsFeed(articles);
      }
    }, (error) => {
      console.error("Error fetching dynamic live news streams: ", error);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (newsFeed.length <= 1) return;

    const rotationInterval = setInterval(() => {
      setFadeStatus(false);
      setTimeout(() => {
        setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsFeed.length);
        setFadeStatus(true);
      }, 300); 
    }, 8000);

    return () => clearInterval(rotationInterval);
  }, [newsFeed]);

  useEffect(() => {
    const handleTabSync = (event) => {
      const targetedKey = event.detail;
      if (targetedKey && coreMatrixData[targetedKey]) {
        setActiveMatrixTab(targetedKey);
      }
    };

    window.addEventListener("changeMatrixTab", handleTabSync);
    return () => {
      window.removeEventListener("changeMatrixTab", handleTabSync);
    };
  }, []);

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const localScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 64;
      const offset = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 15;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7ede2] text-[#1f1916] font-sans antialiased overflow-x-hidden relative selection:bg-[#ffcad4] selection:text-[#1f1916]">
      
      {/* Top Construction Notice Alert Banner */}
      <div className="bg-[#1f1916] text-[#f7ede2] border-b border-[#e9967a]/40 text-center py-2 px-4 text-xs font-semibold flex items-center justify-center gap-2 relative z-[60]">
        <AlertTriangle size={14} className="text-[#e9967a] shrink-0" />
        <span>
          <strong>Site Under Construction:</strong> A few State Minimum Wages are currently being updated and will be available soon. Thank you for your patience.
        </span>
      </div>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[65vw] h-[65vw] bg-gradient-to-br from-[#e9967a]/35 to-[#ffdac1]/40 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-tr from-[#3d5a80]/15 to-[#e9967a]/25 blur-[150px] rounded-full" />
        <div className="absolute top-[35%] left-[25%] w-[40vw] h-[40vw] bg-[#ffdac1]/50 blur-[110px] rounded-full" />
      </div>

      {/* Adjusted top offset so the banner doesn't cover the navbar */}
      <nav className="fixed top-9 inset-x-0 h-16 bg-[#f7ede2]/80 backdrop-blur-xl border-b-2 border-[#e9967a]/20 z-50 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => localScrollTo('home-section')}>
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1f1916] to-[#e9967a] flex items-center justify-center font-bold text-[#f7ede2] text-[10px] tracking-tighter shadow-md">
            LF
          </div>
          <span className="text-xs font-black tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#1f1916] to-[#d47f63]">
            Labourforge
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[11px] font-bold tracking-wider text-[#1f1916]/70">
          <button onClick={() => localScrollTo('home-section')} className="hover:text-[#e9967a] transition-colors bg-transparent border-none font-bold text-[11px] tracking-wider cursor-pointer text-[#1f1916]/70">Home</button>
          <button onClick={() => localScrollTo('risk-vectors')} className="hover:text-[#e9967a] transition-colors bg-transparent border-none font-bold text-[11px] tracking-wider cursor-pointer text-[#1f1916]/70">Risk Analysis</button>
          <button onClick={() => localScrollTo('modern-showcase')} className="hover:text-[#e9967a] transition-colors bg-transparent border-none font-bold text-[11px] tracking-wider cursor-pointer text-[#1f1916]/70">Capabilities</button>
          <button onClick={() => localScrollTo('matrix-dashboard')} className="hover:text-[#e9967a] transition-colors bg-transparent border-none font-bold text-[11px] tracking-wider cursor-pointer text-[#1f1916]/70">Compliance Engine</button>
        </div>
        <DynamicButton variant="secondary" className="!px-4 !py-1.5 !text-[11px] !shadow-none !border" onClick={() => handleServiceClick('/book-consultation')}>
          Initialize Briefing
        </DynamicButton>
      </nav>

      {/* ================= 1. THE HERO SECTOR ================= */}
      <section id="home-section" className="relative flex flex-col justify-center items-center text-center px-6 z-10 pt-32 pb-4 overflow-hidden">
        
        {/* Animated Glittering & Sparkling Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none layer-glitter-starfield" />
        <div className="absolute inset-0 z-0 pointer-events-none layer-glitter-starfield-fast" />

        <div className="max-w-4xl space-y-4 relative z-10 w-full min-h-[180px] md:min-h-[220px] flex flex-col justify-center items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border-2 border-[#e9967a] text-[10px] tracking-widest text-[#1f1916] uppercase font-black shadow-sm mx-auto">
            <Cpu size={10} className="text-[#e9967a]" /> PAYROLL COMPLIANCE SOLUTIONS
          </div>
          
          {/* Constantly Changing Words via Typing Rotation Effect */}
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-[#1f1916] tracking-tight leading-[1.2] max-w-3xl text-center px-2">
            <span className="inline-block border-r-4 border-[#e9967a] pr-1 bg-clip-text text-transparent bg-gradient-to-r from-[#1f1916] via-[#d47f63] to-[#e9967a] animate-cursor">
              {displayedText}
            </span>
          </h1>

          <p className="text-[#1f1916]/80 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed tracking-wide">
            Helping organizations design payroll structures that balance statutory compliance, business objectives, employee benefits, and long-term payroll efficiency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <DynamicButton onClick={() => handleServiceClick('/book-consultation')}>
              <Calendar size={14} /> Book a Consultation <ArrowRight size={14} className="ml-1" />
            </DynamicButton>
            <DynamicButton variant="secondary" onClick={() => localScrollTo('matrix-dashboard')}>
              Explore Focus Areas
            </DynamicButton>
          </div>
        </div>

        {/* Fully Centered Slide Down Scroll Component Element Area */}
        <div className="flex flex-col items-center justify-center w-full mt-6 text-[9px] tracking-widest uppercase font-black text-[#3d5a80] relative z-10">
          <span>Scroll to Discover</span>
          <div className="w-px h-6 bg-gradient-to-b from-[#3d5a80] to-transparent mt-1" />
        </div>
      </section>

      {/* ================= 2. PANORAMIC SYSTEMIC THESIS ================= */}
      <section className="relative z-20 bg-white border-y-2 border-[#e9967a]/20 py-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-widest text-[#e9967a] uppercase block mb-1">LABOUR FORGE PHILOSOPHY</span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#1f1916] leading-tight">
                Design First,<br/>Comply Always.
              </h2>
            </div>
            <div className="lg:col-span-7 border-l-4 border-[#1f1916] lg:pl-8 py-1">
              <p className="text-[#1f1916]/90 text-base md:text-lg font-normal leading-relaxed italic">
                “Effective compliance is the outcome of thoughtful payroll design, robust documentation, and disciplined execution.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. RISK VECTOR IDENTIFICATION ================= */}
      <section id="risk-vectors" className="relative z-20 py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <span className="text-[10px] font-bold tracking-widest text-[#3d5a80] uppercase block">COMPLIANCE CHALLENGES</span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-[#1f1916]">Where Organizations Struggle</h2>
          <p className="text-[#1f1916]/70 max-w-md mx-auto text-xs md:text-sm font-normal">Common payroll and labour compliance challenges that expose organizations to operational and regulatory risks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dynamicRiskVectors.map((item, index) => (
            <StructuralCard key={index} accentColor={item.color} className={index === 3 ? "md:col-span-2" : ""}>
              <div className="flex flex-col justify-between h-full space-y-4">
                <div className="space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-[#fff5f2] border border-[#e9967a]/40 flex items-center justify-center text-[10px] text-[#e9967a] font-bold">
                    0{index + 1}
                  </div>
                  <div className="text-lg font-bold text-[#1f1916] tracking-tight">{item.title}</div>
                  <p className="text-xs text-[#1f1916]/80 font-normal leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#d47f63] tracking-wider uppercase pt-3 border-t border-[#fbdad0]/60">
                  <AlertTriangle size={12} /> {item.label}
                </div>
              </div>
            </StructuralCard>
          ))}
        </div>
      </section>

      {/* ================= 4. PROCEDURAL TRANSITION MAP ================= */}
      <section className="relative z-20 bg-[#1f1916] text-white py-12 border-b-4 border-[#e9967a]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-bold tracking-widest text-[#e9967a] uppercase block">The Evolution Blueprint</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white">Getting Ready for Labour Codes</h2>
            <p className="text-[#fbdad0] text-xs md:text-sm max-w-md mx-auto font-light">
              With labour codes expected to be implemented soon, start aligning your systems today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {[
              { num: "01", title: "Assess current structure", desc: "Review existing payroll & labour compliance framework details systematically.", route: serviceRoutes.labourCode },
              { num: "02", title: "Identify gaps & risks", desc: "Map contractor risks & non-compliances proactively across enterprise sectors.", route: serviceRoutes.audit },
              { num: "03", title: "Redesign payroll & policies", desc: "Update salary structures & policy documentation to absolute standard specifications.", route: serviceRoutes.payroll },
              { num: "04", title: "Support implementation", desc: "Smooth transition with hands-on execution support directly from modern teams.", route: serviceRoutes.labourCode }
            ].map((step, idx) => (
              <div 
                key={idx} 
                onClick={() => handleServiceClick(step.route)}
                className="bg-white text-[#1f1916] p-5 rounded-xl text-left relative shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between pt-6 border-t-4 border-[#e9967a]"
              >
                <div>
                  <div className="w-8 h-8 bg-[#1f1916] text-[#e9967a] rounded-lg flex items-center justify-center font-black text-xs mb-3 -mt-10 border-2 border-white shadow-md">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-[#1f1916] mb-1.5">{step.title}</h3>
                  <p className="text-[11px] md:text-xs text-neutral-500 leading-relaxed font-normal">{step.desc}</p>
                </div>
                <div className="text-[9px] font-bold text-[#e9967a] uppercase tracking-wider mt-3 flex items-center gap-1">
                  Initialize Module <ArrowRight size={10} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <p className="text-base md:text-xl font-medium tracking-tight">
              Start early. Adjust gradually. <span className="text-[#e9967a] font-black underline underline-offset-4">Stay compliant.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ================= 5. THE INSTITUTIONAL FOCUS PANELS ================= */}
      <section id="modern-showcase" className="relative z-20 py-12 bg-[#fffdfb] border-b-2 border-[#e9967a]/20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-[#e9967a] uppercase block">The Institutional Vision</span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-[#1f1916] leading-tight">
              About <span className="text-[#d47f63]">Labourforge</span>
            </h2>
            <p className="text-neutral-700 font-bold text-sm md:text-base leading-relaxed">
              Bringing structure and clarity to payroll & labour law compliance
            </p>
            <p className="text-neutral-600 font-normal text-xs md:text-sm leading-relaxed">
              Labourforge was established with a clear objective to bring structure, clarity, and <span className="text-[#e9967a] font-bold">practical understanding</span> to payroll and labour law compliance layers.
            </p>
            <div className="border-l-4 border-[#e9967a] bg-[#fff5f2] p-4 rounded-r-xl font-bold text-xs md:text-sm shadow-sm">
              Payroll is not just an administrative task; it's a critical compliance and risk management function protecting the entire corporate frame.
            </div>
          </div>

          <div className="lg:col-span-6 w-full space-y-4">
            <div className="bg-white border-2 border-[#fbdad0] rounded-2xl p-5 shadow-sm">
              <h3 className="text-lg font-bold text-[#1f1916] mb-1.5">The Reality</h3>
              <p className="text-neutral-600 font-normal text-xs md:text-sm leading-relaxed">
                Compliance challenges don't arise from intent—they come from gaps in structuring, interpretation, and execution cycles.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Calculator, title: "Payroll Structuring", route: serviceRoutes.payroll },
                { icon: TrendingUp, title: "Salary Alignment", route: serviceRoutes.payroll },
                { icon: FileText, title: "Documentation & Policies", route: serviceRoutes.labourLaw },
                { icon: Shield, title: "Audit Support", route: serviceRoutes.audit }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleServiceClick(item.route)}
                  className="bg-white border-2 border-[#fbdad0]/60 rounded-xl p-4 hover:border-[#e9967a] cursor-pointer transition-colors duration-300"
                >
                  <item.icon size={20} className="text-[#e9967a] mb-1.5" />
                  <span className="text-[11px] md:text-xs font-bold text-[#1f1916] block">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 6. INTERACTIVE COMPLIANCE MATRIX ================= */}
      <section id="matrix-dashboard" className="relative z-20 bg-[#efe3d6] py-12 px-6 md:px-12 border-b-2 border-[#e9967a]/20">
        <div className="max-w-6xl mx-auto">
          
          <div className="w-full bg-[#1f1916] rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row justify-between items-center text-white shadow-2xl relative overflow-hidden border-2 border-white">
            <div className="relative z-10 text-center md:text-left space-y-1.5">
              <span className="text-[10px] font-bold text-[#e9967a] tracking-widest uppercase block">Strategic Imperative</span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">Our Focus Areas</h2>
              <p className="text-[#fbdad0] text-xs md:text-sm max-w-lg font-normal">
                Payroll & compliance solutions built precisely for exceptional balance sheet clarity, tracking control & ongoing enterprise confidence.
              </p>
            </div>
            <div className="relative z-10 flex gap-3 mt-4 md:mt-0">
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20"><ChartLine size={20} /></div>
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20"><Shield size={20} /></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] font-bold tracking-widest text-[#3d5a80] uppercase block mb-0.5">Functional Matrix</span>
              <h3 className="text-xl md:text-2xl font-black tracking-tight text-[#1f1916]">Compliance Solutions</h3>
              <p className="text-neutral-600 text-[11px] md:text-xs font-normal leading-relaxed mb-4">
                Select a service below to explore how Labour Forge helps organizations manage payroll, statutory compliance, labour laws, and regulatory requirements.
              </p>
              
              {Object.keys(coreMatrixData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveMatrixTab(key)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-[11px] font-bold tracking-wider capitalize transition-all duration-300 border-2 flex items-center justify-between group cursor-pointer ${
                    activeMatrixTab === key 
                      ? 'bg-white text-[#1f1916] border-[#e9967a] shadow-md' 
                      : 'bg-white/40 text-neutral-500 border-transparent hover:bg-white/80 hover:text-[#1f1916]'
                  }`}
                >
                 <span>{coreMatrixData[key].title}</span>
                  <ArrowRight size={12} className={`transition-transform duration-300 ${activeMatrixTab === key ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 w-full">
              <div className="w-full bg-white border-2 border-[#e9967a]/30 rounded-2xl p-5 md:p-6 shadow-[0_20px_45px_rgba(31,25,22,0.06)] relative">
                
                <div className="flex items-center justify-between pb-4 border-b border-[#fbdad0]/60 mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#e9967a]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f2cc8f]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3d5a80]" />
                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest pl-1.5">System Running</span>
                  </div>
                  <div className="text-[9px] text-[#3d5a80] bg-[#f0f4ff] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider border border-[#3d5a80]/20 shadow-sm">
                    Strategic Shield Secure
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider block mb-0.5">Operational Integration Block</span>
                    <h4 className="text-[#1f1916] text-lg md:text-xl font-black tracking-tight">
                      {coreMatrixData[activeMatrixTab].title}
                    </h4>
                  </div>

                  <div className="bg-[#fffbf8] border border-[#fbdad0] rounded-xl p-4">
                    <span className="text-[9px] text-[#e9967a] font-bold uppercase tracking-wider block mb-0.5">Functional Impact Parameters</span>
                    <p className="text-neutral-700 text-xs font-normal leading-relaxed">
                      {coreMatrixData[activeMatrixTab].desc}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider block mb-1">Automated Compliance Target Metrics</span>
                    {coreMatrixData[activeMatrixTab].points.map((point, i) => (
                      <div key={i} className="flex items-center justify-between text-[11px] p-3 rounded-lg bg-white border border-[#fbdad0]/60 shadow-sm">
                        <div className="text-neutral-700 font-medium">{point}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <DynamicButton className="w-full sm:w-auto !py-2 !px-5 !text-[11px]" onClick={() => handleServiceClick(coreMatrixData[activeMatrixTab].route)}>
                      Initialize Full Pipeline <ArrowRight size={12} />
                    </DynamicButton>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 7. WHY CHOOSE LABOURFORGE ================= */}
      <section className="relative z-20 py-12 px-6 max-w-6xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase block">The Pillar</span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-[#1f1916]">Your Partner in Payroll & Labour Compliance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Reliable Integration", subtitle: "Accurate & Well-Researched Content", accent: "border-t-[#e9967a]", desc: "Every configuration blueprint, structural salary adjustment, and advisory documentation matrix is built upon deeply verified statutory case precedents." },
            { title: "Practical Application", subtitle: "Built for Everyday Compliance", accent: "border-t-[#3d5a80]", desc: "We clear technical roadblocks out of human resource parameters entirely, structuring fluid frameworks tailored around real everyday workflows." },
            { title: "Professional Rigor", subtitle: "Designed for HR & Payroll Pros", accent: "border-t-[#d47f63]", desc: "Deliberately customized blueprints giving chief human resource officers, corporate legal councils, and financial directors complete operational peace of mind." }
          ].map((item, idx) => (
            <div key={idx} className={`space-y-2 text-left p-6 bg-white border border-[#fbdad0]/60 border-t-4 ${item.accent} rounded-xl shadow-[0_10px_30px_rgba(31,25,22,0.01)] group hover:shadow-[0_15px_35px_rgba(233,150,122,0.05)] transition-all duration-300`}>
              <span className="text-[10px] font-bold text-[#e9967a] block uppercase tracking-widest">{item.subtitle}</span>
              <h3 className="text-lg font-bold text-[#1f1916] group-hover:text-[#3d5a80] transition-colors duration-300">{item.title}</h3>
              <p className="text-neutral-600 text-xs font-normal leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 8. SYSTEM CTA & FOOTER BLOCK ================= */}
      <footer id="contact-section" className="relative z-20 bg-white pt-10 pb-6 border-t-2 border-[#e9967a]/20 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-gradient-to-t from-[#ffdac1]/40 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center px-6 space-y-6 relative z-10">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-widest text-[#3d5a80] uppercase block">Secure. Compliant. Confident</span>
            <h2 className="text-2xl md:text-5xl font-black tracking-tight text-[#1f1916]">Let's review your payroll setup.</h2>
            <p className="text-neutral-600 text-sm md:text-base font-normal max-w-md mx-auto leading-relaxed">
              We run a deep diagnostic review of your existing processes to identify gaps, reduce risk and strengthen compliance.
            </p>
          </div>

          <div className="bg-[#fffbf8] border-2 border-[#e9967a]/40 p-5 md:p-6 rounded-2xl max-w-md mx-auto space-y-4 shadow-2xl">
            <h4 className="text-xs font-bold tracking-wide text-[#1f1916]/80 uppercase">Request Technical Structural Discovery</h4>
            
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              <DynamicButton className="w-full" onClick={() => handleServiceClick('/contact')}>
                <Mail size={14} /> Contact Us
              </DynamicButton>
              
              <DynamicButton variant="secondary" className="w-full !border-2" onClick={() => window.open('https://wa.me/9910975012', '_blank')}>
                <Phone size={14} className="text-emerald-600" /> WhatsApp Bridge
              </DynamicButton>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold text-[#1f1916]/40 tracking-widest uppercase pt-6 border-t border-neutral-200">
            <div>© Labourforge · Structuring Compliance, Protecting Value</div>
            <div className="flex gap-4">
              <span className="hover:text-[#3d5a80] transition-colors cursor-pointer">Security Sandbox</span>
              <span className="hover:text-[#3d5a80] transition-colors cursor-pointer">Legal Framework Specs</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles for Parallax Starfield Layer Backgrounds and Blinking Typing Cursor */}
      <style>{`
        @keyframes blinkCursor {
          from, to { border-color: transparent }
          50% { border-color: #e9967a; }
        }
        .animate-cursor {
          animation: blinkCursor 0.8s step-end infinite;
        }

        /* PARALLAX SPARKLING CANVAS ENGINE */
        @keyframes starfieldSparkle {
          0%, 100% { opacity: 0.15; transform: scale(0.9) rotate(0deg); }
          50% { opacity: 0.85; transform: scale(1.12) rotate(45deg); }
        }

        .layer-glitter-starfield {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M10,15 L12,12 L15,10 L12,8 L10,5 L8,8 L5,10 L8,12 Z' fill='%23e9967a' opacity='0.7'/%3E%3Ccircle cx='65' cy='30' r='1.5' fill='%23ffffff'/%3E%3Cpath d='M45,70 L46.5,67 L49,65 L46.5,63 L45,60 L43.5,63 L41,65 L43.5,67 Z' fill='%23d47f63' opacity='0.6'/%3E%3Ccircle cx='85' cy='80' r='1' fill='%23e9967a'/%3E%3C/svg%3E");
          animation: starfieldSparkle 4.5s infinite ease-in-out;
        }

        .layer-glitter-starfield-fast {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ccircle cx='20' cy='85' r='1.2' fill='%23e9967a'/%3E%3Cpath d='M90,25 L91.5,22 L94,20 L91.5,18 L90,15 L88.5,18 L86,20 L88.5,22 Z' fill='%23ffffff' opacity='0.8'/%3E%3Ccircle cx='50' cy='20' r='1' fill='%23d47f63'/%3E%3Cpath d='M15,45 L16,43 L18,42 L16,41 L15,39 L14,41 L12,42 L14,43 Z' fill='%23e9967a' opacity='0.5'/%3E%3C/svg%3E");
          animation: starfieldSparkle 3.2s infinite ease-in-out 1.5s;
        }

        /* Standard rich content text styles */
        .prose.ql-editor p { margin-bottom: 0.25rem; color: #4b5563; line-height: 1.5; }
        .prose.ql-editor .ql-font-inter { font-family: 'Inter', sans-serif; }
        .prose.ql-editor .ql-font-poppins { font-family: 'Poppins', sans-serif; }
        .prose.ql-editor .ql-font-roboto { font-family: 'Roboto', sans-serif; }
        .prose.ql-editor .ql-font-open-sans { font-family: 'Open Sans', sans-serif; }
        .prose.ql-editor .ql-font-arial { font-family: Arial, sans-serif; }
        .prose.ql-editor .ql-font-arial-black { font-family: "Arial Black", Gadget, sans-serif; }
        .prose.ql-editor .ql-font-comic-sans { font-family: "Comic Sans MS", cursive, sans-serif; }
        .prose.ql-editor .ql-font-courier-new { font-family: "Courier New", Courier, monospace; }
        .prose.ql-editor .ql-font-georgia { font-family: Georgia, serif; }
        .prose.ql-editor .ql-font-impact { font-family: Impact, Charcoal, sans-serif; }
        .prose.ql-editor .ql-font-lucida-sans { font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif; }
        .prose.ql-editor .ql-font-tahoma { font-family: Tahoma, Geneva, sans-serif; }
        .prose.ql-editor .ql-font-times-new-roman { font-family: "Times New Roman", Times, serif; }
        .prose.ql-editor .ql-font-trebuchet { font-family: "Trebuchet MS", Helvetica, sans-serif; }
        .prose.ql-editor .ql-font-verdana { font-family: Verdana, Geneva, sans-serif; }

        .prose.ql-editor .ql-size-10px { font-size: 10px; }
        .prose.ql-editor .ql-size-12px { font-size: 12px; }
        .prose.ql-editor .ql-size-14px { font-size: 14px; }
        .prose.ql-editor .ql-size-[#16px] { font-size: 16px; }
        .prose.ql-editor .ql-size-18px { font-size: 18px; }
        .prose.ql-editor .ql-size-20px { font-size: 20px; }
        .prose.ql-editor .ql-size-24px { font-size: 24px; }
        .prose.ql-editor .ql-size-32px { font-size: 32px; }
      `}</style>
    </div>
  );
};

export default LabourforgeCinematic;