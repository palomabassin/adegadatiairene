'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <header className="bg-black sticky top-0 z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl flex items-center justify-center text-4xl">🍷</div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Tia Irene</h1>
              <p className="text-amber-400 text-sm -mt-1">ADEGA • MERCEARIA</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#" className="hover:text-amber-400 transition">Início</a>
            <a href="#" className="hover:text-amber-400 transition">Loja</a>
            <a href="#" className="hover:text-amber-400 transition">Promoções</a>
            <a href="#" className="hover:text-amber-400 transition">Contato</a>
          </nav>

          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/5511920082655" 
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition"
            >
              <span className="text-xl">📱</span> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="h-screen bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center flex items-center relative">
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-6 text-sm">
              🚀 Delivery em até 35 minutos
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6">
              TUDO QUE VOCÊ PRECISA,<br />
              <span className="text-amber-400">ENTREGUE RÁPIDO</span>
            </h1>
            
            <p className="text-xl text-zinc-300 mb-10">
              Adega premium + Mercearia da Tia Irene<br />
              Embu das Artes • Atendimento familiar
            </p>

            <div className="flex gap-4">
              <button className="bg-amber-400 hover:bg-amber-300 text-black px-10 py-5 rounded-3xl text-lg font-semibold transition">
                Ver Catálogo
              </button>
              <button className="border border-white hover:bg-white/10 px-8 py-5 rounded-3xl text-lg transition">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 text-center text-zinc-400">
        <p className="text-lg">Adega e Mercearia da Tia Irene</p>
        <p>(11) 92008-2655 • Rua Dezoito de Julho, 79 - Jardim Vista Alegre - Embu das Artes, SP</p>
      </footer>
    </div>
  );
}