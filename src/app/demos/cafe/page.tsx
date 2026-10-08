export default function CafeDemo() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1810] font-sans">
      <header className="p-6 flex justify-between items-center max-w-4xl mx-auto border-b border-[#E8E4D9]">
        <h1 className="text-2xl font-serif font-bold tracking-tight">The Local Bean</h1>
        <button className="bg-[#2C1810] text-white px-4 py-2 rounded-md text-sm font-medium">Order Ahead</button>
      </header>
      <main className="max-w-4xl mx-auto p-6 py-20 text-center">
        <h2 className="text-5xl font-serif font-bold mb-6 text-[#2C1810]">Freshly roasted, every morning.</h2>
        <p className="text-lg text-[#5A453D] max-w-lg mx-auto mb-10">Your neighborhood coffee spot. Serving artisanal blends and fresh pastries from 6am to 4pm daily.</p>
        <div className="aspect-video bg-[#E8E4D9] rounded-xl flex items-center justify-center overflow-hidden">
          <p className="text-[#8C7A73]">[Cafe Image Placeholder]</p>
        </div>
      </main>
    </div>
  );
}
