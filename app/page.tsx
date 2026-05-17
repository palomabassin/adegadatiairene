'use client';

import Image from 'next/image';

const categorias = [
  {
    nome: 'Bebidas',
    imagem: '/produtos/bebidas.png',
  },
  {
    nome: 'Mercearia',
    imagem: '/produtos/mercearia.png',
  },
  {
    nome: 'Congelados',
    imagem: '/produtos/congelados.png',
  },
  {
    nome: 'Conveniência',
    imagem: '/produtos/conveniencia.png',
  },
  {
    nome: 'Higiene',
    imagem: '/produtos/higiene.png',
  },
  {
    nome: 'Destilados',
    imagem: '/produtos/destilados.png',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black border-b border-yellow-500/20">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <Image
              src="/Logo.png"
              alt="Tia Irene"
              width={120}
              height={120}
              className="h-20 w-auto"
              priority
            />

            <div>

              <h1 className="text-3xl font-black">
                Tia Irene
              </h1>

              <p className="text-yellow-500 text-sm">
                ADEGA • MERCEARIA • DELIVERY
              </p>

            </div>

          </div>

          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl text-black font-bold"
          >
            WhatsApp
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        {/* BANNER */}
        <div className="absolute inset-0">

          <Image
            src="/banner.png"
            alt="Banner"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>

        </div>

        {/* TEXTO */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

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

            <p className="mt-8 text-xl text-zinc-300">
              Adega e Mercearia da Tia Irene • Embu das Artes
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="bg-yellow-500 hover:bg-yellow-400 transition text-black px-10 py-5 rounded-2xl font-black">
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
                className="bg-zinc-900 border border-zinc-800 hover:border-yellow-500 rounded-3xl overflow-hidden transition duration-300 hover:-translate-y-2"
              >

                <div className="relative w-full h-[320px]">

                  <Image
                    src={categoria.imagem}
                    alt={categoria.nome}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8 text-center">

                  <h3 className="text-3xl font-black text-yellow-500">
                    {categoria.nome}
                  </h3>

                  <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold">
                    Comprar
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
