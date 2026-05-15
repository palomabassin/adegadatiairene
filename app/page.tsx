import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-yellow-500 bg-black sticky top-0 z-50">

        <Image
          src="/logo/logo.png"
          alt="Adega e Mercearia da Tia Irene"
          width={160}
          height={160}
          priority
        />

        <a
          href="https://wa.me/5511920082655"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-bold text-black transition shadow-xl"
        >
          WhatsApp
        </a>

      </header>

      {/* BANNER */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <Image
          src="/banners/banner.png"
          alt="Banner Adega Tia Irene"
          width={1920}
          height={1080}
          className="rounded-3xl w-full max-h-[500px] object-cover shadow-2xl"
          priority
        />

      </section>

      {/* CATEGORIAS */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-5xl font-black text-yellow-500 mb-4">
          Categorias
        </h2>

        <p className="text-zinc-400 text-lg mb-12">
          Tudo o que você precisa entregue rápido.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* BEBIDAS */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 hover:scale-105 duration-300 shadow-2xl">

            <img
              src="/produtos/bebidas.png"
              alt="Bebidas"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-6">

              <h3 className="text-3xl font-black text-yellow-500">
                Bebidas
              </h3>

              <p className="mt-3 text-zinc-400">
                Cervejas, refrigerantes, energéticos e whisky.
              </p>

              <p className="mt-4 text-3xl font-black text-white">
                A partir de R$ 5,99
              </p>

              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                Comprar
              </button>

            </div>

          </div>

          {/* MERCEARIA */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 hover:scale-105 duration-300 shadow-2xl">

            <img
              src="/produtos/mercearia.png"
              alt="Mercearia"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-6">

              <h3 className="text-3xl font-black text-yellow-500">
                Mercearia
              </h3>

              <p className="mt-3 text-zinc-400">
                Arroz, feijão, macarrão, farinha e muito mais.
              </p>

              <p className="mt-4 text-3xl font-black text-white">
                A partir de R$ 4,99
              </p>

              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                Comprar
              </button>

            </div>

          </div>

          {/* CONGELADOS */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 hover:scale-105 duration-300 shadow-2xl">

            <img
              src="/produtos/congelados.png"
              alt="Congelados"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-6">

              <h3 className="text-3xl font-black text-yellow-500">
                Congelados
              </h3>

              <p className="mt-3 text-zinc-400">
                Pizza congelada, sorvetes e açaí.
              </p>

              <p className="mt-4 text-3xl font-black text-white">
                A partir de R$ 12,99
              </p>

              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                Comprar
              </button>

            </div>

          </div>

          {/* CONVENIÊNCIA */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 hover:scale-105 duration-300 shadow-2xl">

            <img
              src="/produtos/conveniencia.png"
              alt="Conveniência"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-6">

              <h3 className="text-3xl font-black text-yellow-500">
                Conveniência
              </h3>

              <p className="mt-3 text-zinc-400">
                Chocolates, snacks, doces e salgadinhos.
              </p>

              <p className="mt-4 text-3xl font-black text-white">
                A partir de R$ 2,99
              </p>

              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                Comprar
              </button>

            </div>

          </div>

          {/* HIGIENE */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 hover:scale-105 duration-300 shadow-2xl">

            <img
              src="/produtos/higiene.png"
              alt="Higiene"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-6">

              <h3 className="text-3xl font-black text-yellow-500">
                Higiene
              </h3>

              <p className="mt-3 text-zinc-400">
                Papel higiênico, sabonete e pasta de dente.
              </p>

              <p className="mt-4 text-3xl font-black text-white">
                A partir de R$ 3,99
              </p>

              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                Comprar
              </button>

            </div>

          </div>

          {/* DESTILADOS */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 hover:scale-105 duration-300 shadow-2xl">

            <img
              src="/produtos/destilados.png"
              alt="Destilados"
              className="w-full h-[300px] object-cover"
            />

            <div className="p-6">

              <h3 className="text-3xl font-black text-yellow-500">
                Destilados
              </h3>

              <p className="mt-3 text-zinc-400">
                Whisky, vodka, gin e bebidas premium.
              </p>

              <p className="mt-4 text-3xl font-black text-white">
                A partir de R$ 19,99
              </p>

              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl font-bold text-white">
                Comprar
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* DELIVERY */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="bg-zinc-900 border border-yellow-500 rounded-3xl p-10 text-center shadow-2xl">

          <h2 className="text-5xl font-black text-yellow-500">
            Delivery Rápido
          </h2>

          <p className="mt-6 text-zinc-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Faça seu pedido pelo site ou WhatsApp e receba rapidamente em
            Embu das Artes.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <div className="bg-black border border-zinc-800 px-8 py-6 rounded-2xl">
              <p className="text-yellow-500 text-4xl">🚚</p>
              <p className="mt-3 font-bold">Entrega Rápida</p>
            </div>

            <div className="bg-black border border-zinc-800 px-8 py-6 rounded-2xl">
              <p className="text-yellow-500 text-4xl">💳</p>
              <p className="mt-3 font-bold">PIX e Cartão</p>
            </div>

            <div className="bg-black border border-zinc-800 px-8 py-6 rounded-2xl">
              <p className="text-yellow-500 text-4xl">🕒</p>
              <p className="mt-3 font-bold">Até 03h</p>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-12 text-center text-zinc-400">

        <h3 className="text-3xl font-black text-yellow-500">
          Adega e Mercearia da Tia Irene
        </h3>

        <p className="mt-4">
          Rua Dezoito de Julho, 79 — Embu das Artes/SP
        </p>

        <p className="mt-2">
          WhatsApp: 11 92008-2655
        </p>

        <p className="mt-2">
          adegadatiairene@gmail.com
        </p>

      </footer>

      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5511920082655"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-4 rounded-full shadow-2xl z-50 transition"
      >
        📱 Pedir Agora
      </a>

    </main>
  );
}/* =========================
   GRID DE PRODUTOS
========================= */

.products-section {
  width: 100%;
  padding: 80px 40px;
  background: #000;
}

.products-title {
  font-size: clamp(42px, 5vw, 72px);
  font-weight: 800;
  color: #ffb800;
  margin-bottom: 50px;
}

/* =========================
   GRID RESPONSIVO
========================= */

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  align-items: stretch;
}

/* =========================
   CARD
========================= */

.product-card {
  background: #111;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 184, 0, 0.15);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 184, 0, 0.5);
  box-shadow: 0 15px 40px rgba(255, 184, 0, 0.15);
}

/* =========================
   CONTAINER DA IMAGEM
========================= */

.product-image-wrapper {
  width: 100%;
  height: 420px;
  overflow: hidden;
  background: #000;
  position: relative;
}

/* =========================
   IMAGEM PADRONIZADA
========================= */

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

/* =========================
   CONTEÚDO
========================= */

.product-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.product-name {
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 800;
  color: #ffb800;
  line-height: 1;
}

.product-description {
  color: #d4d4d4;
  font-size: 16px;
  line-height: 1.6;
}

/* =========================
   BOTÃO
========================= */

.product-button {
  margin-top: auto;
  width: 100%;
  border: none;
  background: linear-gradient(
    135deg,
    #00d84a,
    #00b83e
  );
  color: #000;
  font-size: 18px;
  font-weight: 700;
  padding: 18px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.product-button:hover {
  transform: scale(1.02);
  filter: brightness(1.05);
}

/* =========================
   RESPONSIVIDADE
========================= */

@media (max-width: 768px) {
  .products-section {
    padding: 50px 20px;
  }

  .products-grid {
    gap: 20px;
  }

  .product-image-wrapper {
    height: 320px;
  }

  .product-name {
    font-size: 32px;
  }

  .product-button {
    font-size: 16px;
    padding: 16px;
  }
}
