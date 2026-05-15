'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <header className="bg-black sticky top-0 z-50 border-b border-amber-400/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-2xl flex items-center justify-center text-5xl shadow-xl">🛒</div>
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">Tia Irene</h1>
              <p className="text-amber-400 text-sm -mt-1">ADEGA • MERCEARIA • DELIVERY</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-10 text-lg font-medium">
            <a href="#" className="hover:text-amber-400 transition">Início</a>
            <a href="#" className="hover:text-amber-400 transition">Loja</a>
            <a href="#" className="hover:text-amber-400 transition">Promoções</a>
            <a href="#" className="hover:text-amber-400 transition">Contato</a>
          </nav>

          <a href="https://wa.me/5511920082655" target="_blank"
             className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition">
            📱 Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* HERO - Estilo Premium */}
      <section className="relative h-screen bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400 text-amber-400 px-6 py-3 rounded-full mb-6 text-sm">
              🚀 DELIVERY EM ATÉ 35 MINUTOS
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6">
              TUDO QUE VOCÊ PRECISA<br/>
              <span className="text-amber-400">COM PREÇO BAIXO E ENTREGA RÁPIDA</span>
            </h1>
            
            <p className="text-2xl text-zinc-300 mb-10">
              Adega moderna + Mercearia completa<br/>
              Aberto até 03h nos fins de semana
            </p>

            <div className="flex gap-4">
              <button className="bg-amber-400 hover:bg-amber-300 text-black px-12 py-6 rounded-3xl text-xl font-semibold transition">
                Ver Catálogo Completo
              </button>
              <button className="border-2 border-white px-10 py-6 rounded-3xl text-xl hover:bg-white/10 transition">
                Pedir pelo WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">Nossas Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "🍺 Bebidas", "🍝 Mercearia", "🍕 Congelados", 
              "🍫 Conveniência", "🥛 Laticínios", "🧼 Higiene"
            ].map((cat, i) => (
              <div key={i} className="bg-zinc-800 hover:bg-zinc-700 p-8 rounded-3xl text-center transition cursor-pointer group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition">{cat.split(" ")[0]}</div>
                <p className="font-semibold text-lg">{cat.split(" ")[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-16 text-center border-t border-amber-400/20">
        <p className="text-2xl font-bold text-amber-400">Adega e Mercearia da Tia Irene Delivery</p>
        <p className="text-zinc-400 mt-3">(11) 92008-2655 • Rua Dezoito de Julho, 79 - Embu das Artes - SP</p>
        <p className="text-sm text-zinc-500 mt-8">© 2026 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
