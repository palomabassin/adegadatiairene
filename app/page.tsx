import Image from "next/image";

const categorias = [
  {
    nome: "BEBIDAS",
    imagem: "/bebidas.png",
  },
  {
    nome: "MERCEARIA",
    imagem: "/mercearia.png",
  },
  {
    nome: "CONGELADOS",
    imagem: "/congelados.png",
  },
  {
    nome: "CONVENIÊNCIA",
    imagem: "/conveniencia.png",
  },
  {
    nome: "HIGIENE",
    imagem: "/higiene.png",
  },
  {
    nome: "DESTILADOS",
    imagem: "/destilados.png",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/95 border-b border-yellow-500">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
            />

            <div>
              <h1 className="text-4xl font-black text-yellow-400 leading-none">
                TIA IRENE
              </h1>

              <p className="text-sm tracking-[4px] text-zinc-300">
                ADEGA • MERCEARIA • DELIVERY
              </p>
            </div>

          </div>

          {/* MENU */}
          <nav className="hidden md:flex gap-10 font-semibold text-white">

            <a href="#" className="hover:text-yellow-400 transition">
              INÍCIO
            </a>

            <a href="#categorias" className="hover:text-yellow-400 transition">
              CATEGORIAS
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              PROMOÇÕES
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              SOBRE NÓS
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              CONTATO
            </a>

          </nav>

          {/* BOTÃO */}
          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="
              bg-green-500
              hover:bg-green-400
              transition
              px-8
              py-4
              rounded-full
              font-bold
              text-black
              shadow-lg
              shadow-green-500/20
            "
          >
            CHAMAR NO WHATSAPP
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="pt-36 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="
            overflow-hidden
            rounded-[35px]
            border
            border-yellow-500
            shadow-2xl
            shadow-yellow-500/10
          ">

            <Image
              src="/banner.png"
              alt="Banner"
              width={1600}
              height={800}
              className="w-full object-cover"
              priority
            />

          </div>

        </div>

      </section>

      {/* BANNER 2 */}
      <section className="mt-10 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="
            overflow-hidden
            rounded-[30px]
            border
            border-yellow-500
            bg-zinc-950
          ">

            <Image
              src="/banner2.png"
              alt="Benefícios"
              width={1600}
              height={300}
              className="w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* TITULO */}
      <section
        id="categorias"
        className="mt-24 text-center"
      >

        <p className="text-yellow-400 tracking-[10px] font-bold text-sm">
          PRODUTOS
        </p>

        <h2 className="text-7xl font-black italic">
          CATEGORIAS
        </h2>

      </section>

      {/* GRID */}
      <section className="mt-16 px-5 pb-32">

        <div className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-6
          items-start
        ">

          {categorias.map((item, index) => (
            <div
              key={index}
              className="
                bg-zinc-950
                border
                border-yellow-500
                rounded-[30px]
                overflow-hidden
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-yellow-500/20
                transition-all
                duration-300
                group
              "
            >

              {/* IMAGEM */}
              <div className="relative h-[320px] overflow-hidden">

                <Image
                  src={item.imagem}
                  alt={item.nome}
                  fill
                  className="
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

              </div>

              {/* TEXTO */}
              <div className="p-5 text-center">

                <h3 className="text-3xl font-black">
                  {item.nome}
                </h3>

                <button
                  className="
                    mt-5
                    border
                    border-yellow-500
                    text-yellow-400
                    px-5
                    py-3
                    rounded-full
                    font-bold
                    hover:bg-yellow-500
                    hover:text-black
                    transition
                  "
                >
                  VER PRODUTOS
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/5511920082655"
        target="_blank"
        className="
          fixed
          bottom-6
          right-6
          z-50
          bg-green-500
          hover:bg-green-400
          transition
          rounded-full
          w-24
          h-24
          flex
          items-center
          justify-center
          shadow-2xl
          shadow-green-500/40
          animate-bounce
        "
      >
        <span className="text-5xl">💬</span>
      </a>

      {/* FOOTER */}
      <footer className="border-t border-yellow-500 py-10 text-center text-zinc-400">

        <p className="text-lg">
          © 2025 Tia Irene Delivery
        </p>

        <p className="mt-2">
          Adega • Conveniência • Delivery
        </p>

      </footer>

    </main>
  );
}
