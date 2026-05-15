export default function HomePage() {
  const categorias = [
    {
      nome: 'Bebidas',
      emoji: '🍺',
      descricao: 'Cervejas, whisky, vodka e refrigerantes',
    },
    {
      nome: 'Mercearia',
      emoji: '🛒',
      descricao: 'Arroz, feijão, macarrão e temperos',
    },
    {
      nome: 'Congelados',
      emoji: '🍕',
      descricao: 'Pizza congelada, sorvetes e açaí',
    },
    {
      nome: 'Conveniência',
      emoji: '🍫',
      descricao: 'Snacks, chocolates e doces',
    },
    {
      nome: 'Higiene',
      emoji: '🧼',
      descricao: 'Papel higiênico, sabonete e pasta de dente',
    },
  ]

  const promocoes = [
    {
      nome: 'Heineken 600ml',
      preco: 'R$ 9,99',
    },
    {
      nome: 'Pizza Congelada',
      preco: 'R$ 24,90',
    },
    {
      nome: 'KitKat',
      preco: 'R$ 3,99',
    },
    {
      nome: 'Coca-Cola 2L',
      preco: 'R$ 8,99',
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-yellow-600 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-yellow-500">
              Tia Irene
            </h1>
            <p className="text-sm text-red-500 font-bold">Delivery</p>
          </div>

          <nav className="hidden md:flex gap-8 font-semibold text-sm">
            <a href="#home" className="hover:text-yellow-500 transition">
              Início
            </a>
            <a href="#categorias" className="hover:text-yellow-500 transition">
              Categorias
            </a>
            <a href="#promocoes" className="hover:text-yellow-500 transition">
              Promoções
            </a>
            <a href="#contato" className="hover:text-yellow-500 transition">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-full font-bold"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-r from-black via-zinc-900 to-red-950"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-red-600 px-4 py-2 rounded-full text-sm font-bold">
              DELIVERY ATÉ 03:00
            </span>

            <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
              Adega e
              <span className="text-yellow-500 block">Mercearia</span>
              da Tia Irene
            </h2>

            <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
              Tudo o que você precisa, entregue rápido! Bebidas,
              congelados, mercearia, conveniência e muito mais.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511920082655"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 transition px-6 py-4 rounded-xl font-bold text-black"
              >
                Pedir no WhatsApp
              </a>

              <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition px-6 py-4 rounded-xl font-bold">
                Ver Promoções
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-yellow-500 p-1 rounded-3xl shadow-2xl shadow-red-900/40">
              <div className="bg-zinc-950 rounded-3xl p-10 text-center">
                <div className="text-8xl">🛒</div>
                <h3 className="mt-6 text-3xl font-black text-yellow-500">
                  Delivery Premium
                </h3>
                <p className="mt-4 text-zinc-400">
                  Compra online com entrega rápida em Embu das Artes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-5xl font-black text-yellow-500">
            Categorias
          </h2>
          <p className="mt-4 text-zinc-400">
            Tudo o que você precisa em um só lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          {categorias.map((categoria) => (
            <div
              key={categoria.nome}
              className="bg-zinc-900 border border-zinc-800 hover:border-yellow-500 transition rounded-3xl p-6 text-center hover:scale-105 duration-300"
            >
              <div className="text-6xl">{categoria.emoji}</div>

              <h3 className="mt-5 text-2xl font-bold text-yellow-500">
                {categoria.nome}
              </h3>

              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {categoria.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROMOÇÕES */}
      <section
        id="promocoes"
        className="bg-gradient-to-r from-red-950 via-black to-black py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-5xl font-black text-yellow-500">
                Promoções da Semana
              </h2>
              <p className="mt-3 text-zinc-400">
                Ofertas especiais com entrega rápida.
              </p>
            </div>

            <a
              href="https://wa.me/5511920082655"
              target="_blank"
              className="bg-red-600 hover:bg-red-700 transition px-6 py-4 rounded-xl font-bold"
            >
              Fazer Pedido
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {promocoes.map((produto) => (
              <div
                key={produto.nome}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition"
              >
                <div className="bg-gradient-to-br from-red-600 to-yellow-500 h-48 flex items-center justify-center text-7xl">
                  🛍️
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-yellow-500">
                    {produto.nome}
                  </h3>

                  <p className="mt-4 text-3xl font-black text-white">
                    {produto.preco}
                  </p>

                  <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-xl transition">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-zinc-900 border border-yellow-500 rounded-3xl p-10 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-5xl">🚚</div>
            <h3 className="mt-4 text-2xl font-black text-yellow-500">
              Delivery Rápido
            </h3>
            <p className="mt-3 text-zinc-400">
              Entrega rápida em Embu das Artes.
            </p>
          </div>

          <div>
            <div className="text-5xl">💳</div>
            <h3 className="mt-4 text-2xl font-black text-yellow-500">
              Pagamento Online
            </h3>
            <p className="mt-3 text-zinc-400">
              PIX, cartão e dinheiro na entrega.
            </p>
          </div>

          <div>
            <div className="text-5xl">🕒</div>
            <h3 className="mt-4 text-2xl font-black text-yellow-500">
              Atendimento Até 03h
            </h3>
            <p className="mt-3 text-zinc-400">
              Sexta a domingo até madrugada.
            </p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-black border-t border-zinc-800 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black text-yellow-500">
              Faça seu pedido agora
            </h2>

            <p className="mt-5 text-zinc-400 text-lg leading-relaxed">
              Atendimento rápido pelo WhatsApp. Tire dúvidas, faça pedidos
              e acompanhe promoções.
            </p>

            <div className="mt-10 space-y-4 text-lg">
              <p>
                📱 <strong>WhatsApp:</strong> 11 92008-2655
              </p>

              <p>
                📧 <strong>Email:</strong>{' '}
                adegadatiairene@gmail.com
              </p>

              <p>
                📍 <strong>Endereço:</strong> Rua Dezoito de Julho, 79 —
                Embu das Artes/SP
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
            <h3 className="text-3xl font-black text-yellow-500">
              Horário de Funcionamento
            </h3>

            <div className="mt-8 space-y-5 text-lg text-zinc-300">
              <div>
                <p className="font-bold text-white">Segunda a Quinta</p>
                <p>09h às 00h</p>
              </div>

              <div>
                <p className="font-bold text-white">Sexta a Domingo</p>
                <p>10h às 03h</p>
              </div>
            </div>

            <a
              href="https://wa.me/5511920082655"
              target="_blank"
              className="mt-10 block bg-green-500 hover:bg-green-600 transition text-center text-black font-black py-5 rounded-2xl"
            >
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        © 2026 Adega e Mercearia da Tia Irene — Todos os direitos reservados.
      </footer>
    </main>
  )
}
