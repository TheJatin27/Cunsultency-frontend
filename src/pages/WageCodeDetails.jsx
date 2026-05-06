import React, { useEffect, useState } from "react";

import {
  ArrowLeft,
  FileText,
  Gavel,
  ClipboardCheck,
  HelpCircle,
  BookOpen,
  Scale,
  Download,
  AlertCircle,
  Loader2
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import { db } from "../firebase";

import {
  collection,
  getDocs
} from "firebase/firestore";

const WageCodeDetails = () => {

  const navigate = useNavigate();
  const { slug } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // FETCH FIREBASE DATA
  useEffect(() => {

    const fetchData = async () => {
      try {

        const snap = await getDocs(collection(db, "eLibraryPages"));

        const pages = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const found = pages.find(
          (item) => item.slug === slug
        );

        setData(found);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [slug]);

  // LOADER
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2
          className="animate-spin text-[#0B1538]"
          size={40}
        />
      </div>
    );
  }

  // NO DATA
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-slate-700">
        Page Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">

      {/* HEADER */}
      <header className="bg-[#0B1538] text-white pt-24 pb-12 px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />

            <span className="text-sm font-bold uppercase tracking-widest">
              Back to E-Library
            </span>
          </button>

          <div className="flex items-center gap-4 mb-4">

            <div className="p-3 bg-orange-500 rounded-2xl shadow-lg">
              <Scale size={32} className="text-white" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase">
              {data.title}
            </h1>

          </div>

          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            {data.shortDescription}
          </p>

        </div>
      </header>

      {/* BODY */}
      <main className="max-w-5xl mx-auto px-8 lg:px-16 -mt-8">

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-12 space-y-12">

          {/* OVERVIEW */}
          <section>

            <SectionHeader
              icon={<BookOpen className="text-blue-600" />}
              title="1. Overview"
            />

            <div className="space-y-4 text-slate-600 leading-relaxed pl-12">

              <p>
                {data.overview}
              </p>

            </div>

          </section>

          {/* BARE ACT */}
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">

            <SectionHeader
              icon={<FileText className="text-orange-600" />}
              title="2. Bare Act (Latest)"
            />

            <div className="pl-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

              <p className="text-slate-600 text-sm">
                {data.bareActDescription}
              </p>

              <a
                href={data.bareActPdf}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#0B1538] text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-black transition-all whitespace-nowrap"
              >
                <Download size={16} />

                DOWNLOAD PDF
              </a>

            </div>

          </section>

          {/* AMENDMENTS + RULES */}
          <div className="grid md:grid-cols-2 gap-12">

            <section>

              <SectionHeader
                icon={<Gavel className="text-purple-600" />}
                title="3. Amendments"
              />

              <div className="pl-12 text-slate-600 text-sm space-y-2">

                <p>
                  {data.amendments}
                </p>

              </div>

            </section>

            <section>

              <SectionHeader
                icon={<ClipboardCheck className="text-emerald-600" />}
                title="4. Rules"
              />

              <div className="pl-12 text-slate-600 text-sm space-y-2">

                <p>
                  {data.rules}
                </p>

              </div>

            </section>

          </div>

          {/* PRACTICAL NOTES */}
          <section>

            <SectionHeader
              icon={<AlertCircle className="text-amber-600" />}
              title="5. Practical Notes"
            />

            <div className="pl-12 grid sm:grid-cols-2 gap-4">

              {data.practicalNotes?.map((note, i) => (

                <div
                  key={i}
                  className="flex gap-3 p-4 bg-orange-50/30 border border-orange-100 rounded-2xl text-xs font-semibold text-slate-700"
                >

                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1 flex-shrink-0" />

                  {note}

                </div>

              ))}

            </div>

          </section>

          {/* CHECKLIST */}
          <section className="border-t border-slate-100 pt-12">

            <SectionHeader
              icon={<ClipboardCheck className="text-blue-600" />}
              title="6. Compliance Checklist"
            />

            <div className="pl-12 grid sm:grid-cols-2 gap-y-3 gap-x-8">

              {data.complianceChecklist?.map((item, i) => (

                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-600 text-sm border-b border-slate-50 pb-2"
                >

                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[10px]">
                    ✓
                  </div>

                  {item}

                </div>

              ))}

            </div>

          </section>

          {/* FAQ */}
          <section className="bg-[#0B1538] p-8 lg:p-12 rounded-[2.5rem] text-white">

            <SectionHeader
              icon={<HelpCircle className="text-orange-400" />}
              title="7. FAQs"
              light
            />

            <div className="pl-12 space-y-6">

              {data.faqs?.map((faq, i) => (

                <FAQItem
                  key={i}
                  q={faq.question}
                  a={faq.answer}
                />

              ))}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
};

// SECTION HEADER
const SectionHeader = ({
  icon,
  title,
  light
}) => (

  <div className="flex items-center gap-4 mb-6">

    <div className={`p-2 rounded-xl ${
      light
        ? "bg-white/10"
        : "bg-slate-50 border border-slate-100"
    }`}>
      {React.cloneElement(icon, { size: 20 })}
    </div>

    <h2 className={`text-xl font-black uppercase tracking-tight ${
      light
        ? "text-white"
        : "text-slate-800"
    }`}>
      {title}
    </h2>

  </div>
);

// FAQ ITEM
const FAQItem = ({ q, a }) => (

  <div className="group cursor-pointer border-b border-white/10 pb-4">

    <p className="text-orange-400 font-bold text-sm mb-1 group-hover:text-white transition-colors tracking-tight uppercase">
      Q: {q}
    </p>

    <p className="text-slate-400 text-sm leading-relaxed">
      A: {a}
    </p>

  </div>
);

export default WageCodeDetails;