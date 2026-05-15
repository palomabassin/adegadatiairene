'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <header className="bg-black sticky top-0 z-50 border-b border-red-600/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-5xl">👑</div>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter text-amber-400">TIA IRENE</h1>
              <p className="text-sm text-red-500 -mt-1">ADEGA & MERCEARIA DELIVERY</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#" className="hover:text-amber-400 transition">Início</a>
            <a href="#" className="hover:text-amber-400 transition">Loja</a>
            <a href="#" className="hover:text-amber-400 transition">Promoções</a>
            <a href="#" className="hover:text-amber-400 transition">Contato</a>
          </nav>

          <a href="https://wa.me/5511920082655" target="_blank"
             className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-3">
            📱 Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* HERO BANNER - Estilo das imagens */}
      <section className="relative h-[90vh] bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 bg-red-600 px-6 py-2 rounded-full text-sm font-bold mb-6">
              ⏰ ATÉ 03:00 DA MADRUGADA
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6">
              ADEGA E MERCEARIA<br/>
              <span className="text-amber-400">DA TIA IRENE</span>
            </h1>
            
            <p className="text-3xl text-amber-400 mb-8">DELIVERY RÁPIDO</p>
            
            <p className="text-xl text-zinc-300 mb-10">
              Tudo que você precisa com preço baixo e entrega rápida!
            </p>

            <div className="flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 px-12 py-6 rounded-3xl text-xl font-semibold transition">
                VER CATÁLOGO
              </button>
              <button className="border-2 border-white px-10 py-6 rounded-3xl text-xl hover:bg-white/10 transition">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">CATEGORIAS</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "BEBIDAS", emoji: "🍺" },
              { name: "MERCEARIA", emoji: "🍝" },
              { name: "CONGELADOS", emoji: "🍕" },
              { name: "CONVENIÊNCIA", emoji: "🍫" },
              { name: "HIGIENE", emoji: "🧼" }
            ].map((cat, i) => (
              <div key={i} className="bg-zinc-800 hover:bg-zinc-700 p-8 rounded-3xl text-center transition cursor-pointer group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition">{cat.emoji}</div>
                <p className="font-bold text-xl">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 text-center text-zinc-400">
        <p className="text-xl">Adega e Mercearia da Tia Irene Delivery</p>
        <p>(11) 92008-2655 • Rua Dezoito de Julho, 79 - Embu das Artes - SP</p>
      </footer>
    </div>
  );
}
