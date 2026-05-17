'use client';

import Image from 'next/image';

const categorias = [
  {
    nome: 'Bebidas',
    imagem: '/produtos/bebidas.png',
    descricao: 'Cervejas, refrigerantes, energéticos e muito mais.',
  },
  {
    nome: 'Mercearia',
    imagem: '/produtos/mercearia.png',
    descricao: 'Arroz, feijão, macarrão, farinhas e alimentos.',
  },
  {
    nome: 'Congelados',
    imagem: '/produtos/congelados.png',
    descricao: 'Pizza congelada, sorvetes e produtos gelados.',
  },
  {
    nome: 'Conveniência',
    imagem: '/produtos/conveniencia.png',
    descricao: 'Snacks, doces, chocolates e salgadinhos.',
  },
  {
    nome: 'Higiene',
    imagem: '/produtos/higiene.png',
    descricao: 'Sabonete, pasta de dente e produtos pessoais.',
  },
  {
    nome: 'Destilados',
    imagem: '/produtos/destilados.png',
    descricao: 'Whisky, vodka, gin e bebidas premium.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-yellow-500/20">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <Image
              src="/Logo.png"
              alt="Adega e Mercearia da Tia Irene"
              width={150}
              height={150}
              className="h-20 w-auto object-contain"
              priority
            />

            <div>

              <h1 className="text-3xl md:text-4xl font-black leading-none">
                Tia Irene
              </h1>

              <p className="text-yellow-500 text-sm md:text-base font-medium">
                ADEGA • MERCEARIA • DELIVERY
              </p>

            </div>

          </div>

          {/* BOTÃO */}
          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition text-black px-6 py-3 rounded-2xl font-bold shadow-2xl"
          >
            WhatsApp
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center">

        {/* BANNER */}
        <div className="absolute inset-0">

          <Image
            src="/banner.png"
            alt="Banner Tia Irene"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/70"></div>

        </div>

        {/* TEXTO */}
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

            <p className="mt-8 text-xl md:text-2xl text-zinc-300 leading-relaxed">

              Adega e Mercearia da Tia Irene • Embu das Artes

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="bg-yellow-500 hover:bg-yellow-400 transition text-black px-10 py-5 rounded-2xl text-lg font-black shadow-2xl">
                Ver Catálogo
              </button>

              <a
                href="https://wa.me/5511920082655"
                target="_blank"
                className="border-2 border-white hover:bg-white hover:text-black transition px-10 py-5 rounded-2xl text-lg font-bold"
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

            <h2 className="text-5xl md:text-6xl font-black text-yellow-500">
              Categorias
            </h2>

            <p className="mt-4 text-zinc-400 text-lg">
              Produtos organizados para facilitar seu pedido
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {categorias.map((categoria) => (

              <div
                key={categoria.nome}
                className="group bg-zinc-900 border border-zinc-800 hover:border-yellow-500 rounded-3xl overflow-hidden transition duration-300 hover:-translate-y-2 shadow-2xl"
              >

                {/* IMAGEM */}
                <div className="relative w-full h-[320px] overflow-hidden bg-black">

                  <Image
                    src={categoria.imagem}
                    alt={categoria.nome}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* CONTEÚDO */}
                <div className="p-8">

                  <h3 className="text-3xl font-black text-yellow-500 text-center">
                    {categoria.nome}
                  </h3>

                  <p className="mt-4 text-zinc-400 text-center leading-relaxed">
                    {categoria.descricao}
                  </p>

                  <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl text-lg font-bold">
                    Comprar
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* DELIVERY */}
      <section className="py-24 bg-black">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-zinc-900 border border-yellow-500 rounded-[32px] p-10 md:p-16 text-center shadow-2xl">

            <h2 className="text-5xl md:text-6xl font-black text-yellow-500">

              Delivery Rápido

            </h2>

            <p className="mt-8 text-zinc-300 text-xl leading-relaxed max-w-3xl mx-auto">

              Faça seu pedido pelo site ou WhatsApp e receba rapidamente
              em Embu das Artes.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <div className="bg-black border border-zinc-800 px-8 py-6 rounded-3xl">
                <p className="text-5xl">🚚</p>
                <p className="mt-3 font-bold text-lg">
                  Entrega Rápida
                </p>
              </div>

              <div className="bg-black border border-zinc-800 px-8 py-6 rounded-3xl">
                <p className="text-5xl">💳</p>
                <p className="mt-3 font-bold text-lg">
                  PIX e Cartão
                </p>
              </div>

              <div className="bg-black border border-zinc-800 px-8 py-6 rounded-3xl">
                <p className="text-5xl">🕒</p>
                <p className="mt-3 font-bold text-lg">
                  Atendimento até 03h
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-16 text-center bg-black">

        <div className="max-w-4xl mx-auto px-6">

          <h3 className="text-4xl font-black text-yellow-500">

            Adega e Mercearia da Tia Irene

          </h3>

          <p className="mt-6 text-zinc-400 text-lg">
            Rua Dezoito de Julho, 79 — Embu das Artes/SP
          </p>

          <p className="mt-3 text-zinc-400 text-lg">
            WhatsApp: 11 92008-2655
          </p>

          <p className="mt-3 text-zinc-400 text-lg">
            adegadatiairene@gmail.com
          </p>

        </div>

      </footer>

      {/* BOTÃO FIXO */}
      <a
        href="https://wa.me/5511920082655"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 transition text-black px-6 py-4 rounded-full font-black shadow-2xl z-50"
      >
        📱 Pedir Agora
      </a>

    </main>
  );
}
