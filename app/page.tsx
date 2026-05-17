'use client';

import Image from 'next/image';

const categorias = [
  {
    nome: 'Bebidas',
    imagem: '/produtos/bebidas.jpg',
  },
  {
    nome: 'Mercearia',
    imagem: '/produtos/mercearia.jpg',
  },
  {
    nome: 'Congelados',
    imagem: '/produtos/congelados.jpg',
  },
  {
    nome: 'Conveniência',
    imagem: '/produtos/conveniencia.jpg',
  },
  {
    nome: 'Higiene',
    imagem: '/produtos/higiene.jpg',
  },
  {
    nome: 'Destilados',
    imagem: '/produtos/destilados.jpg',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="Adega Tia Irene"
              width={90}
              height={90}
              className="rounded-full object-cover"
              priority
            />

            <div>

              <h1 className="text-3xl font-black leading-none">
                Tia Irene
              </h1>

              <p className="text-yellow-500 text-sm mt-1">
                ADEGA • MERCEARIA • DELIVERY
              </p>

            </div>

          </div>

          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl text-black font-bold shadow-xl"
          >
            WhatsApp
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        {/* IMAGEM DE FUNDO */}
        <div className="absolute inset-0">

          <Image
            src="/banner.jpg"
            alt="Banner Adega Tia Irene"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>

        </div>

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <h1 className="text-5xl md:text-7xl font-black leading-none">

              TUDO O QUE VOCÊ
              <br />

              <span className="text-yellow-500">
                PRECISA,
              </span>

              <br />

              ENTREGA RÁPIDA

            </h1>

            <p className="mt-8 text-xl text-zinc-300 leading-relaxed">
              Adega e Mercearia da Tia Irene • Embu das Artes
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="bg-yellow-500 hover:bg-yellow-400 transition text-black px-10 py-5 rounded-2xl font-black shadow-2xl">
                Ver Catálogo
              </button>

              <a
                href="https://wa.me/5511920082655"
                target="_blank"
                className="border-2 border-white hover:bg-white hover:text-black transition px-10 py-5 rounded-2xl font-bold"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORIAS */}
      <section className="py-24 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center text-yellow-500 mb-16">
            Categorias
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {categorias.map((categoria) => (

              <div
                key={categoria.nome}
                className="bg-zinc-900 border border-zinc-800 hover:border-yellow-500 rounded-3xl overflow-hidden transition duration-300 hover:-translate-y-2 shadow-2xl"
              >

                {/* IMAGEM */}
                <div className="relative w-full h-[420px] overflow-hidden">

                  <Image
                    src={categoria.imagem}
                    alt={categoria.nome}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />

                </div>

                {/* CONTEÚDO */}
                <div className="p-8 text-center">

                  <h3 className="text-3xl font-black text-yellow-500">
                    {categoria.nome}
                  </h3>

                  <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold shadow-lg">
                    Comprar
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* DELIVERY */}
      <section className="py-24 bg-black border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-zinc-900 rounded-3xl border border-yellow-500/20 p-12 text-center shadow-2xl">

            <h2 className="text-5xl font-black text-yellow-500">
              Delivery Rápido
            </h2>

            <p className="mt-6 text-zinc-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Faça seus pedidos diretamente pelo site ou WhatsApp e receba rapidamente em Embu das Artes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

              <div className="bg-black border border-zinc-800 rounded-2xl p-8">

                <div className="text-5xl">
                  🚚
                </div>

                <h3 className="mt-4 text-2xl font-bold text-yellow-500">
                  Entrega Rápida
                </h3>

              </div>

              <div className="bg-black border border-zinc-800 rounded-2xl p-8">

                <div className="text-5xl">
                  💳
                </div>

                <h3 className="mt-4 text-2xl font-bold text-yellow-500">
                  PIX e Cartão
                </h3>

              </div>

              <div className="bg-black border border-zinc-800 rounded-2xl p-8">

                <div className="text-5xl">
                  🕒
                </div>

                <h3 className="mt-4 text-2xl font-bold text-yellow-500">
                  Atendimento até 03h
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-4xl font-black text-yellow-500">
            Adega e Mercearia da Tia Irene
          </h3>

          <p className="mt-6 text-zinc-400">
            Embu das Artes • São Paulo
          </p>

          <p className="mt-2 text-zinc-400">
            WhatsApp: 11 92008-2655
          </p>

          <p className="mt-2 text-zinc-400">
            adegadatiairene@gmail.com
          </p>

        </div>

      </footer>

      {/* BOTÃO FIXO */}
      <a
        href="https://wa.me/5511920082655"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-black font-black px-6 py-4 rounded-full shadow-2xl z-50 transition"
      >
        📱 Pedir Agora
      </a>

    </main>
  );
}
