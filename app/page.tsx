'use client';

export default function Home() {
  const categorias = [
    {
      nome: 'BEBIDAS',
      imagem:
        'https://i.imgur.com/SEU-LINK-BEBIDAS.png',
      descricao:
        'Heineken, Brahma, Budweiser, Coca-Cola, Guaraná e energéticos.',
      icon: '🍺',
    },
    {
      nome: 'MERCEARIA',
      imagem:
        'https://i.imgur.com/SEU-LINK-MERCEARIA.png',
      descricao:
        'Arroz, feijão, massas, molhos e produtos essenciais.',
      icon: '🛒',
    },
    {
      nome: 'CONGELADOS',
      imagem:
        'https://i.imgur.com/SEU-LINK-CONGELADOS.png',
      descricao:
        'Pizza, sorvetes, açaí e congelados premium.',
      icon: '❄️',
    },
    {
      nome: 'CONVENIÊNCIA',
      imagem:
        'https://i.imgur.com/SEU-LINK-CONVENIENCIA.png',
      descricao:
        'Snacks, chocolates, doces e salgadinhos.',
      icon: '🍫',
    },
    {
      nome: 'HIGIENE',
      imagem:
        'https://i.imgur.com/SEU-LINK-HIGIENE.png',
      descricao:
        'Shampoo, sabonete, creme dental e papel higiênico.',
      icon: '🧴',
    },
    {
      nome: 'DESTILADOS',
      imagem:
        'https://i.imgur.com/SEU-LINK-DESTILADOS.png',
      descricao:
        'Whisky, vodka, gin e bebidas premium.',
      icon: '🥃',
    },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <img
              src="https://i.imgur.com/SEU-LINK-LOGO.png"
              alt="Adega Tia Irene"
              className="w-20 h-20 object-contain"
            />

            <div>
              <h1 className="text-3xl font-black tracking-tight text-yellow-400">
                TIA IRENE
              </h1>

              <p className="text-zinc-400 text-sm tracking-[3px]">
                ADEGA • MERCEARIA • DELIVERY
              </p>
            </div>

          </div>

          {/* BOTÃO */}
          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl font-black text-black shadow-2xl"
          >
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO / BANNER */}
      <section className="relative min-h-screen flex items-center">

        {/* IMAGEM */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.imgur.com/SEU-LINK-BANNER.png')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* EFEITO */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <span className="text-yellow-400 font-black tracking-[4px] uppercase">
              Delivery até 03h
            </span>

            <h2 className="mt-6 text-6xl md:text-8xl font-black leading-none uppercase">
              Tudo o que você
              <span className="block text-yellow-400">
                precisa,
              </span>

              <span className="block text-red-600 italic">
                entregue rápido!
              </span>
            </h2>

            <p className="mt-8 text-2xl text-zinc-300 leading-relaxed">
              Adega e Mercearia da Tia Irene • Embu das Artes
            </p>

            <div className="mt-12 flex flex-wrap gap-6">

              <a
                href="#categorias"
                className="bg-yellow-400 hover:bg-yellow-300 transition px-12 py-5 rounded-2xl text-black font-black text-xl shadow-2xl"
              >
                Ver Catálogo
              </a>

              <a
                href="https://wa.me/5511920082655"
                target="_blank"
                className="border-2 border-white hover:bg-white hover:text-black transition px-12 py-5 rounded-2xl font-black text-xl"
              >
                Fazer Pedido
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-zinc-950 border-y border-yellow-500/10">

        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500/20 text-center">
            <p className="text-5xl">🚚</p>
            <h3 className="mt-4 font-black text-yellow-400 text-xl">
              Entrega Rápida
            </h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500/20 text-center">
            <p className="text-5xl">💳</p>
            <h3 className="mt-4 font-black text-yellow-400 text-xl">
              PIX e Cartão
            </h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500/20 text-center">
            <p className="text-5xl">🛡️</p>
            <h3 className="mt-4 font-black text-yellow-400 text-xl">
              Compra Segura
            </h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-yellow-500/20 text-center">
            <p className="text-5xl">📱</p>
            <h3 className="mt-4 font-black text-yellow-400 text-xl">
              Atendimento WhatsApp
            </h3>
          </div>

        </div>

      </section>

      {/* CATEGORIAS */}
      <section
        id="categorias"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-16">

          <span className="text-yellow-400 tracking-[4px] uppercase font-black">
            Produtos
          </span>

          <h2 className="mt-4 text-6xl font-black uppercase">
            Categorias
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {categorias.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900 rounded-[35px] overflow-hidden border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-3 shadow-[0_0_40px_rgba(255,180,0,0.08)]"
            >

              {/* IMAGEM */}
              <div className="relative h-[520px] overflow-hidden">

                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              </div>

              {/* CONTEÚDO */}
              <div className="p-8">

                <div className="flex items-center justify-between">

                  <h3 className="text-4xl font-black text-yellow-400">
                    {item.nome}
                  </h3>

                  <span className="text-4xl">
                    {item.icon}
                  </span>

                </div>

                <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
                  {item.descricao}
                </p>

                <button className="mt-8 w-full bg-red-700 hover:bg-red-600 transition py-5 rounded-2xl font-black text-xl uppercase tracking-wide shadow-xl">
                  Comprar
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-red-950 via-black to-black">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-6xl font-black uppercase leading-tight">
            Faça seu pedido
            <span className="block text-yellow-400">
              agora no WhatsApp
            </span>
          </h2>

          <p className="mt-8 text-2xl text-zinc-300">
            Entregamos rápido em Embu das Artes.
          </p>

          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="inline-block mt-12 bg-green-500 hover:bg-green-600 transition px-14 py-6 rounded-3xl text-black font-black text-2xl shadow-2xl"
          >
            📱 11 92008-2655
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-yellow-500/10 bg-black">

        <div className="max-w-7xl mx-auto px-6 py-14 text-center">

          <img
            src="https://i.imgur.com/SEU-LINK-LOGO.png"
            alt="Tia Irene"
            className="w-32 mx-auto mb-8"
          />

          <h3 className="text-4xl font-black text-yellow-400">
            Adega e Mercearia da Tia Irene
          </h3>

          <p className="mt-6 text-zinc-400 text-lg">
            Embu das Artes • São Paulo
          </p>

          <p className="mt-2 text-zinc-500">
            Delivery rápido até às 03h
          </p>

        </div>

      </footer>

      {/* BOTÃO FIXO */}
      <a
        href="https://wa.me/5511920082655"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 transition text-black px-8 py-5 rounded-full font-black text-xl shadow-[0_0_40px_rgba(0,255,120,0.5)] z-50"
      >
        WhatsApp
      </a>

    </main>
  );
}
