'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-yellow-500 bg-black sticky top-0 z-50">

        <div className="flex items-center gap-4">
          <img
            src="https://i.imgur.com/W6bK9iD.png"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />

          <div>
            <h1 className="text-3xl font-black">
              Tia Irene
            </h1>

            <p className="text-yellow-400 text-sm">
              ADEGA • MERCEARIA • DELIVERY
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/5511920082655"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl font-bold text-black"
        >
          WhatsApp
        </a>

      </header>

      {/* BANNER */}
      <section className="relative h-[700px] flex items-center">

        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <h2 className="text-6xl md:text-8xl font-black leading-none">
            TUDO O QUE VOCÊ
            <br />
            <span className="text-yellow-400">
              PRECISA
            </span>
          </h2>

          <p className="mt-6 text-2xl text-zinc-300">
            Entrega rápida em Embu das Artes
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg">
              Ver Catálogo
            </button>

            <a
              href="https://wa.me/5511920082655"
              target="_blank"
              className="border border-white px-8 py-4 rounded-2xl font-bold"
            >
              Pedir Agora
            </a>

          </div>

        </div>

      </section>

      {/* PRODUTOS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-yellow-400 text-center mb-16">
          Categorias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* CARD */}
          {[
            {
              nome: 'Bebidas',
              imagem:
                'https://images.unsplash.com/photo-1566633806327-68e152aaf26d',
            },
            {
              nome: 'Mercearia',
              imagem:
                'https://images.unsplash.com/photo-1542838132-92c53300491e',
            },
            {
              nome: 'Congelados',
              imagem:
                'https://images.unsplash.com/photo-1513104890138-7c749659a591',
            },
            {
              nome: 'Conveniência',
              imagem:
                'https://images.unsplash.com/photo-1585238342024-78d387f4a707',
            },
            {
              nome: 'Higiene',
              imagem:
                'https://images.unsplash.com/photo-1583947582886-f40ec95dd752',
            },
            {
              nome: 'Destilados',
              imagem:
                'https://images.unsplash.com/photo-1569529465841-dfecdab7503b',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition duration-300 shadow-2xl"
            >

              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-[350px] object-cover"
              />

              <div className="p-6">

                <h3 className="text-3xl font-black text-yellow-400">
                  {item.nome}
                </h3>

                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold">
                  Comprar
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  )
}
