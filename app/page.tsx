'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER (mantido igual) */}
      <header className="bg-black sticky top-0 z-50 border-b border-amber-400/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/imagem/Logo.png" alt="Tia Irene" className="h-16 w-auto" />
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">Tia Irene</h1>
              <p className="text-amber-400 text-sm -mt-1">ADEGA • MERCEARIA • DELIVERY</p>
            </div>
          </div>

          <a href="https://wa.me/5511920082655" target="_blank" className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition">
            📱 WhatsApp
          </a>
        </div>
      </header>

      {/* HERO (mantido) */}
      <section className="relative h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/imagem/banner.png')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6">
              TUDO QUE VOCÊ PRECISA,<br/>
              <span className="text-amber-400">ENTREGUE RÁPIDO</span>
            </h1>
            <p className="text-2xl text-zinc-300 mb-10">Adega e Mercearia da Tia Irene • Embu das Artes</p>
            <div className="flex gap-4">
              <button className="bg-amber-400 text-black px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-amber-300 transition">Ver Catálogo</button>
              <button className="border-2 border-white px-10 py-6 rounded-3xl text-xl hover:bg-white/10 transition">Falar no WhatsApp</button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS - IMAGENS CENTRALIZADAS E SEM CORTE */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4 text-amber-400">CATEGORIAS</h2>
          <p className="text-center text-zinc-400 mb-12">Tudo o que você precisa, entregue rápido!</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "BEBIDAS", img: "/imagem/bebidas.jpg", desc: "Cervejas, whiskys, energéticos..." },
              { name: "MERCEARIA", img: "/imagem/mercearia.jpg", desc: "Arroz, feijão, macarrão..." },
              { name: "CONGELADOS", img: "/imagem/congelados.jpg", desc: "Pizza, sorvetes, açaí..." },
              { name: "CONVENIÊNCIA", img: "/imagem/conveniencia.jpg", desc: "Snacks, chocolates, pipoca..." },
              { name: "HIGIENE", img: "/imagem/higiene.jpg", desc: "Papel, sabonete, desodorante..." }
            ].map((cat, i) => (
              <div key={i} className="group bg-zinc-800 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="h-60 bg-zinc-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src={cat.img} 
                    alt={cat.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-amber-400">{cat.name}</h3>
                  <p className="text-zinc-400 text-sm mb-6">{cat.desc}</p>
                  <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-2xl font-semibold transition">
                    Ver Produtos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 text-center text-zinc-400">
        <p className="text-xl">Adega e Mercearia da Tia Irene Delivery</p>
        <p>(11) 92008-2655 • Embu das Artes - SP</p>
      </footer>
    </div>
  );
}
