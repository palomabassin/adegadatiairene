'use client';

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/95 border-b border-yellow-500/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="Adega Tia Irene"
              width={90}
              height={90}
              className="w-auto h-[70px] object-contain"
              priority
            />

            <div>
              <h1 className="text-2xl md:text-4xl font-black leading-none">
                Tia Irene
              </h1>

              <p className="text-yellow-400 text-xs md:text-sm tracking-[3px] mt-1">
                ADEGA • MERCEARIA • DELIVERY
              </p>
            </div>

          </div>

          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition px-5 md:px-8 py-3 rounded-2xl font-bold text-black shadow-2xl"
          >
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO BANNER */}
      <section className="relative w-full h-[500px] md:h-[750px] overflow-hidden">

        <Image
          src="/banner.png"
          alt="Banner Adega Tia Irene"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

          <div className="max-w-2xl">

            <h2 className="text-5xl md:text-7xl font-black leading-none">
              TUDO O QUE VOCÊ
              <br />
              <span className="text-yellow-400">
                PRECISA,
              </span>
              <br />
              ENTREGA RÁPIDA
            </h2>

            <p className="mt-6 text-zinc-300 text-lg md:text-2xl">
              Adega e Mercearia da Tia Irene • Embu das Artes
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-yellow-400 hover:bg-yellow-300 transition text-black font-bold px-8 py-4 rounded-2xl text-lg shadow-xl">
                Ver Catálogo
              </button>

              <a
                href="https://wa.me/5511920082655"
                target="_blank"
                className="border-2 border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl text-lg font-bold"
              >
                Falar no WhatsApp
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
              Produtos selecionados para você
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">

            {/* BEBIDAS */}
            <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition duration-300 shadow-2xl">

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src="/produtos/bebidas.png"
                  alt="Bebidas"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-3xl font-black text-yellow-400">
                  Bebidas
                </h3>

                <p className="text-zinc-400 mt-3">
                  Cervejas, refrigerantes, energéticos e muito mais.
                </p>

                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                  Comprar
                </button>

              </div>

            </div>

            {/* MERCEARIA */}
            <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition duration-300 shadow-2xl">

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src="/produtos/mercearia.png"
                  alt="Mercearia"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-3xl font-black text-yellow-400">
                  Mercearia
                </h3>

                <p className="text-zinc-400 mt-3">
                  Produtos essenciais para o dia a dia.
                </p>

                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                  Comprar
                </button>

              </div>

            </div>

            {/* CONGELADOS */}
            <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition duration-300 shadow-2xl">

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src="/produtos/congelados.png"
                  alt="Congelados"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-3xl font-black text-yellow-400">
                  Congelados
                </h3>

                <p className="text-zinc-400 mt-3">
                  Pizzas, sorvetes, açaí e congelados.
                </p>

                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                  Comprar
                </button>

              </div>

            </div>

            {/* CONVENIÊNCIA */}
            <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition duration-300 shadow-2xl">

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src="/produtos/conveniencia.png"
                  alt="Conveniência"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-3xl font-black text-yellow-400">
                  Conveniência
                </h3>

                <p className="text-zinc-400 mt-3">
                  Snacks, chocolates e produtos rápidos.
                </p>

                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                  Comprar
                </button>

              </div>

            </div>

            {/* HIGIENE */}
            <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition duration-300 shadow-2xl">

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src="/produtos/higiene.png"
                  alt="Higiene"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-3xl font-black text-yellow-400">
                  Higiene
                </h3>

                <p className="text-zinc-400 mt-3">
                  Produtos de higiene e cuidados pessoais.
                </p>

                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                  Comprar
                </button>

              </div>

            </div>

            {/* DESTILADOS */}
            <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition duration-300 shadow-2xl">

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src="/produtos/destilados.png"
                  alt="Destilados"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-3xl font-black text-yellow-400">
                  Destilados
                </h3>

                <p className="text-zinc-400 mt-3">
                  Whisky, vodka, gin e bebidas premium.
                </p>

                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                  Comprar
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-14 bg-black">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-4xl font-black text-yellow-400">
            Adega e Mercearia da Tia Irene
          </h3>

          <p className="mt-6 text-zinc-400 text-lg">
            WhatsApp: 11 92008-2655
          </p>

          <p className="mt-2 text-zinc-500">
            adegadatiairene@gmail.com
          </p>

        </div>

      </footer>

      {/* BOTÃO FLUTUANTE */}
      <a
        href="https://wa.me/5511920082655"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-black px-6 py-4 rounded-full font-black shadow-2xl z-50 transition"
      >
        📱 Pedir Agora
      </a>

    </main>
  );
}
