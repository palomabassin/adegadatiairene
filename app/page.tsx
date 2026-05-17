'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <header className="bg-black sticky top-0 z-50 border-b border-amber-400/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/imagem/Logo.png" alt="Tia Irene" className="h-16 w-auto" />
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">Tia Irene</h1>
              <p className="text-amber-400 text-sm -mt-1">ADEGA • MERCEARIA • DELIVERY</p>
            </div>
          </div>

          <a href="https://wa.me/5511920082655" target="_blank" className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-3">
            📱 WhatsApp
          </a>
        </div>
      </header>

      {/* BANNER */}
      <section className="relative h-screen bg-cover bg-center flex items-center" 
               style={{ backgroundImage: "url('/imagem/banner.png')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold leading-none mb-6">
              TUDO QUE VOCÊ PRECISA,<br/>
              <span className="text-amber-400">ENTREGUE RÁPIDO</span>
            </h1>
            <p className="text-2xl text-zinc-300 mb-10">Adega e Mercearia da Tia Irene • Embu das Artes</p>
            <div className="flex gap-4">
              <button className="bg-amber-400 text-black px-12 py-6 rounded-3xl text-xl font-semibold hover:bg-amber-300 transition">
                Ver Catálogo
              </button>
              <button className="border-2 border-white px-10 py-6 rounded-3xl text-xl hover:bg-white/10 transition">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS COM SUAS IMAGENS */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12 text-amber-400">CATEGORIAS</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="group bg-zinc-800 rounded-3xl overflow-hidden">
              <div className="h-64 bg-zinc-900 flex items-center justify-center p-6">
                <img src="/imagem/produtos/bebidas/bebidas.jpg" alt="Bebidas" className="max-h-full object-contain" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">Bebidas</h3>
              </div>
            </div>

            {/* Repita para as outras categorias */}
            {/* Exemplo para Mercearia */}
            <div className="group bg-zinc-800 rounded-3xl overflow-hidden">
              <div className="h-64 bg-zinc-900 flex items-center justify-center p-6">
                <img src="/imagem/produtos/mercearia/mercearia.jpg" alt="Mercearia" className="max-h-full object-contain" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">Mercearia</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
