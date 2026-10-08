export default function PlumbingDemo() {
  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans">
      <header className="bg-[#1E3A8A] text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider uppercase">ProFlow Plumbing</h1>
          <div className="font-bold">24/7: (555) 123-4567</div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#2563EB] font-bold uppercase text-sm tracking-wider mb-2 block">Emergency Services</span>
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">Fast, reliable plumbing when you need it most.</h2>
            <p className="text-gray-600 mb-8 text-lg">Licensed, insured, and ready to fix any leak, drain, or pipe issue in the tri-state area.</p>
            <button className="bg-[#DC2626] text-white font-bold px-6 py-3 rounded text-lg shadow-md hover:bg-[#B91C1C]">Get a Quote Now</button>
          </div>
          <div className="aspect-square bg-gray-100 border-4 border-[#1E3A8A] rounded shadow-lg flex flex-col items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-[#1E3A8A] flex items-center justify-center mb-4 text-white">🔧</div>
             <p className="font-bold text-gray-500">Professional Service</p>
          </div>
        </div>
      </main>
    </div>
  );
}
