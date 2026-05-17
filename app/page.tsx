export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      {/* HEADER */}
      <header className="border-b border-yellow-600 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Tia Irene"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h1 className="text-3xl font-black text-yellow-400 tracking-wide">
                TIA IRENE
              </h1>

              <p className="text-sm text-gray-300 tracking-[4px] uppercase">
                Adega • Mercearia • Delivery
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-full transition-all"
          >
            WhatsApp
          </a>

        </div>
      </header>

      {/* HERO BANNER */}
      <section className="w-full">
        <img
          src="/banner.png"
          alt="Banner Tia Irene"
          className="w-full object-cover"
        />
      </section>

      {/* BENEFÍCIOS */}
      <section className="border-y border-yellow-700 bg-[#080808]">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-6">

          <div className="bg-[#111] border border-yellow-700 rounded-2xl p-5 text-center">
            <div className="text-4xl mb-2">🚚</div>

            <h3 className="text-yellow-400 font-bold text-xl">
              Entrega Rápida
            </h3>
          </div>

          <div className="bg-[#111] border border-yellow-700 rounded-2xl p-5 text-center">
            <div className="text-4xl mb-2">💳</div>

            <h3 className="text-yellow-400 font-bold text-xl">
              PIX e Cartão
            </h3>
          </div>

          <div className="bg-[#111] border border-yellow-700 rounded-2xl p-5 text-center">
            <div className="text-4xl mb-2">🛡️</div>

            <h3 className="text-yellow-400 font-bold text-xl">
              Compra Segura
            </h3>
          </div>

          <div className="bg-[#111] border border-yellow-700 rounded-2xl p-5 text-center">
            <div className="text-4xl mb-2">📲</div>

            <h3 className="text-yellow-400 font-bold text-xl">
              Atendimento WhatsApp
            </h3>
          </div>

        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <p className="text-yellow-500 tracking-[8px] uppercase text-sm font-bold">
            Produtos
          </p>

          <h2 className="text-6xl font-black uppercase">
            Categorias
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          <Categoria
            imagem="/produtos/bebidas.png"
            titulo="Bebidas"
          />

          <Categoria
            imagem="/produtos/mercearia.png"
            titulo="Mercearia"
          />

          <Categoria
            imagem="/produtos/congelados.png"
            titulo="Congelados"
          />

          <Categoria
            imagem="/produtos/conveniencia.png"
            titulo="Conveniência"
          />

          <Categoria
            imagem="/produtos/higiene.png"
            titulo="Higiene"
          />

          <Categoria
            imagem="/produtos/destilados.png"
            titulo="Destilados"
          />

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-yellow-700 py-8 text-center text-gray-400">

        <p className="text-lg">
          © Tia Irene Delivery
        </p>

        <p className="mt-2">
          Chama no WhatsApp e faça seu pedido!
        </p>

      </footer>

    </main>
  );
}

function Categoria({
  imagem,
  titulo,
}: {
  imagem: string;
  titulo: string;
}) {
  return (
    <div className="group bg-[#0b0b0b] border border-yellow-700 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">

      <img
        src={imagem}
        alt={titulo}
        className="w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-center text-2xl font-black uppercase text-white">
          {titulo}
        </h3>
      </div>

    </div>
  );
}
