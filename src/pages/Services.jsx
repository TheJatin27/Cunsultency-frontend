export default function Services() {
  const list = [
    { name: "GST Services", items: ["GSTR-3B & GSTR-1 [cite: 11]", "Annual Returns [cite: 11]", "Notices Handling [cite: 11]"], color: "blue" },
    { name: "Labour Compliance", items: ["EPF & ESIC [cite: 11]", "Minimum Wages [cite: 11]", "Gratuity [cite: 11]"], color: "emerald" },
    { name: "Payroll Management", items: ["Salary Processing [cite: 11]", "Payslips [cite: 11]", "ESI Challans [cite: 11]"], color: "purple" }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-16">Specialized Compliance Vertical [cite: 10]</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {list.map((service, idx) => (
            <div key={idx} className="bg-slate-900 border-t-4 border-blue-500 p-8 rounded-b-3xl">
              <h3 className="text-2xl font-bold mb-6">{service.name}</h3>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400">
                    <span className="text-emerald-500">✔</span> {item}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors">
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}