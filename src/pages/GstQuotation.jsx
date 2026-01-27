import { useState } from "react";

export default function GstQuotation() {
  const [val, setVal] = useState(50);

  return (
    <div className="bg-slate-950 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Automated GST Quotation Tool [cite: 9, 13]</h2>
        
        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 text-white">
              <div>
                <label className="block text-sm font-medium mb-2 text-blue-400">Business Type [cite: 14]</label>
                <select className="w-full bg-slate-800 border border-slate-600 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Private Limited</option>
                  <option>LLP / Partnership</option>
                  <option>Proprietorship</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-blue-400">Turnover Range (₹ {val} Lakhs) [cite: 14]</label>
                <input 
                  type="range" min="1" max="100" 
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  onChange={(e) => setVal(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 text-center flex flex-col justify-center">
              <span className="text-blue-100 uppercase text-xs tracking-tighter mb-2">Estimated Monthly Quote [cite: 15]</span>
              <div className="text-5xl font-bold text-white">₹{val * 120 + 1500}*</div>
              <button className="mt-8 bg-white text-blue-900 font-bold py-3 rounded-xl hover:bg-blue-50 transition-all">
                Book Follow-up [cite: 15]
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}