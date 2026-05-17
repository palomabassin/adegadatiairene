"use client";

const categorias = [
  {
    nome: "Bebidas",
    imagem: "https://i.imgur.com/6l0mG7L.png",
  },
  {
    nome: "Mercearia",
    imagem: "https://i.imgur.com/yQ7Yk7m.png",
  },
  {
    nome: "Congelados",
    imagem: "https://i.imgur.com/VQh8YjM.png",
  },
  {
    nome: "Conveniência",
    imagem: "https://i.imgur.com/5hM3M0f.png",
  },
  {
    nome: "Higiene",
    imagem: "https://i.imgur.com/G1l7c2V.png",
  },
  {
    nome: "Destilados",
    imagem: "https://i.imgur.com/0d8K6wM.png",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <img
              src="https://i.imgur.com/6u7lB7F.png"
              alt="Logo"
              className="w-20 h-20 object-contain"
            />

            <div>
              <h1 className="text-4xl font-black text-amber-400 leading-none">
                TIA IRENE
              </h1>

              <p className="text-zinc-300 tracking-[4px] text-sm">
                ADEGA • MERCEARIA • DELIVERY
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full font-bold text-black text-lg shadow-lg"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.imgur.com/Q0L1j2A.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40">

          <div className="max-w-3xl">

            <h2 className="text-6xl md:text-8xl font-black leading-none">
              <span className="text-white">
                TUDO O QUE VOCÊ
              </span>

              <br />

              <span className="text-amber-400">
                PRECISA,
              </span>

              <br />

              <span className="text-red-600 italic">
                ENTREGUE RÁPIDO!
              </span>
            </h2>

            <p className="mt-8 text-2xl text-zinc-300">
              Adega e Mercearia da Tia Irene • Embu das Artes
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">

              <button className="bg-amber-400 hover:bg-amber-300 text-black px-10 py-5 rounded-full text-xl font-bold transition">
                Ver Catálogo
              </button>

              <a
                href="https://wa.me/5511920082655"
                target="_blank"
                className="border-2 border-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-black transition"
              >
                Fazer Pedido
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-zinc-950 border-y border-amber-500/20">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8">

          <div className="bg-zinc-900 rounded-3xl p-6 text-center border border-amber-500/20">
            <div className="text-5xl mb-3">🚚</div>
            <h3 className="text-amber-400 font-bold text-2xl">
              Entrega Rápida
            </h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 text-center border border-amber-500/20">
            <div className="text-5xl mb-3">💳</div>
            <h3 className="text-amber-400 font-bold text-2xl">
              PIX e Cartão
            </h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 text-center border border-amber-500/20">
            <div className="text-5xl mb-3">🛡️</div>
            <h3 className="text-amber-400 font-bold text-2xl">
              Compra Segura
            </h3>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 text-center border border-amber-500/20">
            <div className="text-5xl mb-3">📲</div>
            <h3 className="text-amber-400 font-bold text-2xl">
              Atendimento WhatsApp
            </h3>
          </div>

        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="py-24 bg-black">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-center text-amber-400 tracking-[10px] mb-4 font-bold">
            PRODUTOS
          </p>

          <h2 className="text-center text-7xl font-black mb-20">
            CATEGORIAS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

            {categorias.map((item) => (
              <div
                key={item.nome}
                className="group rounded-[35px] overflow-hidden bg-zinc-950 border border-amber-500/30 hover:scale-105 transition duration-300"
              >

                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="w-full h-[500px] object-cover"
                />

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-amber-500/20 bg-black py-10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-3 text-amber-400 font-bold text-2xl">
            👑 Tia Irene Delivery
          </div>

          <div className="text-zinc-400 text-lg">
            Chama no WhatsApp e faça seu pedido!
          </div>

          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full font-bold text-black text-xl"
          >
            WhatsApp
          </a>

        </div>
      </footer>

    </main>
  );
}
