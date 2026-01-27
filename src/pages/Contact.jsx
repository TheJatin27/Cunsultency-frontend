export default function Contact() {
  return (
    <div className="bg-slate-950 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="text-white">
          <h1 className="text-4xl font-bold mb-6">Contact Our Experts [cite: 9]</h1>
          <p className="text-slate-400 text-lg mb-8">Reach out via WhatsApp or phone for immediate compliance support. [cite: 9]</p>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-4">
              <span className="text-2xl">📱</span>
              <div><p className="text-xs text-slate-500">Call Us</p><p className="font-bold">+91 12345 67890</p></div>
            </div>
          </div>
        </div>

        {/* The Form - Now High Visibility */}
        <form className="bg-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl space-y-4">
          <div>
            <label className="block text-slate-400 text-sm mb-2">Full Name</label>
            <input type="text" className="w-full bg-slate-100 text-slate-900 p-4 rounded-xl outline-none border-2 border-transparent focus:border-blue-500" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-slate-400 text-sm mb-2">Email Address</label>
            <input type="email" className="w-full bg-slate-100 text-slate-900 p-4 rounded-xl outline-none border-2 border-transparent focus:border-blue-500" placeholder="john@business.com" />
          </div>
          <div>
            <label className="block text-slate-400 text-sm mb-2">Message</label>
            <textarea className="w-full bg-slate-100 text-slate-900 p-4 rounded-xl h-32 outline-none border-2 border-transparent focus:border-blue-500" placeholder="How can we help?"></textarea>
          </div>
          <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-500 transition-all">
            Submit Inquiry [cite: 9]
          </button>
        </form>
      </div>
    </div>
  );
}