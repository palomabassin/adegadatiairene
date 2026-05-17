'use client'

const categorias = [
  {
    nome: 'Bebidas',
    imagem: 'LINK_BEBIDAS',
  },
  {
    nome: 'Mercearia',
    imagem: 'LINK_MERCEARIA',
  },
  {
    nome: 'Congelados',
    imagem: 'LINK_CONGELADOS',
  },
  {
    nome: 'Conveniência',
    imagem: 'LINK_CONVENIENCIA',
  },
  {
    nome: 'Higiene',
    imagem: 'LINK_HIGIENE',
  },
  {
    nome: 'Destilados',
    imagem: 'LINK_DESTILADOS',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/95 border-b border-yellow-500/20 backdrop-blur-md">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src="LINK_LOGO"
              alt="Logo"
              className="w-20 h-20 object-contain"
            />

            <div>

              <h1 className="text-3xl md:text-5xl font-black leading-none">
                Tia Irene
              </h1>

              <p className="text-yellow-400 tracking-[3px] text-xs md:text-sm mt-1">
                ADEGA • MERCEARIA • DELIVERY
              </p>

            </div>

          </div>

          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl font-black text-black shadow-2xl"
          >
            WhatsApp
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="relative h-[700px] md:h-[850px] flex items-center overflow-hidden">

        <img
          src="LINK_BANNER"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="max-w-2xl">

            <h2 className="text-5xl md:text-8xl font-black leading-none">
              TUDO O QUE VOCÊ
              <br />

              <span className="text-yellow-400">
                PRECISA
              </span>

              <br />

              ENTREGA RÁPIDA
            </h2>

            <p className="mt-6 text-zinc-300 text-xl md:text-2xl">
              Delivery até 03h da madrugada 🚀
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-yellow-400 hover:bg-yellow-300 transition text-black font-black px-8 py-4 rounded-2xl text-lg shadow-2xl">
                Ver Catálogo
              </button>

              <a
                href="https://wa.me/5511920082655"
                target="_blank"
                className="border-2 border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl text-lg font-black"
              >
                Pedir no WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORIAS */}
      <section className="py-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl md:text-6xl font-black text-yellow-400">
              Categorias
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Tudo o que você precisa em um só lugar
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {categorias.map((item, index) => (
              <div
                key={index}
                className="group bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-400 transition duration-300 shadow-2xl"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-full h-[520px] object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-4xl font-black text-yellow-400">
                    {item.nome}
                  </h3>

                  <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-black text-white text-lg">
                    Comprar
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* DELIVERY */}
      <section className="bg-black py-24 border-t border-yellow-500/20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl md:text-6xl font-black text-yellow-400">
            Delivery Rápido
          </h2>

          <p className="mt-6 text-zinc-300 text-xl">
            Receba seus produtos com rapidez e segurança.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

            <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
              <p className="text-6xl">🚚</p>
              <h3 className="mt-6 text-3xl font-black text-yellow-400">
                Entrega Rápida
              </h3>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
              <p className="text-6xl">💳</p>
              <h3 className="mt-6 text-3xl font-black text-yellow-400">
                PIX e Cartão
              </h3>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
              <p className="text-6xl">📱</p>
              <h3 className="mt-6 text-3xl font-black text-yellow-400">
                WhatsApp
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-16 text-center">

        <h3 className="text-4xl font-black text-yellow-400">
          Adega e Mercearia da Tia Irene
        </h3>

        <p className="mt-6 text-zinc-400">
          WhatsApp: 11 92008-2655
        </p>

        <p className="mt-2 text-zinc-500">
          adegadatiairene@gmail.com
        </p>

      </footer>

      {/* BOTÃO FIXO */}
      <a
        href="https://wa.me/5511920082655"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-black px-6 py-4 rounded-full font-black shadow-2xl z-50 transition"
      >
        📱 Pedir Agora
      </a>

    </main>
  )
}
