import Image from "next/image";

const categorias = [
  {
    nome: "BEBIDAS",
    imagem: "/produtos/bebidas.png",
  },
  {
    nome: "MERCEARIA",
    imagem: "/produtos/mercearia.png",
  },
  {
    nome: "CONGELADOS",
    imagem: "/produtos/congelados.png",
  },
  {
    nome: "CONVENIÊNCIA",
    imagem: "/produtos/conveniencia.png",
  },
  {
    nome: "HIGIENE",
    imagem: "/produtos/higiene.png",
  },
  {
    nome: "DESTILADOS",
    imagem: "/produtos/destilados.png",
  },
];

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/95 border-b border-yellow-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={70}
              className="rounded-full"
            />

            <div>
              <h1 className="text-3xl font-black text-yellow-400 leading-none">
                TIA IRENE
              </h1>

              <p className="text-sm tracking-[4px] text-zinc-300">
                ADEGA • MERCEARIA • DELIVERY
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5511920082655"
            target="_blank"
            className="bg-green-500 hover:bg-green-400 transition px-8 py-3 rounded-full font-bold text-black shadow-lg shadow-green-500/30"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[30px] border border-yellow-500 shadow-2xl shadow-yellow-500/10">

            <Image
              src="/banner.png"
              alt="Banner"
              width={1600}
              height={700}
              className="w-full object-cover"
              priority
            />

          </div>

        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="mt-10 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="overflow-hidden rounded-[25px] border border-yellow-500 bg-zinc-950">

            <Image
              src="/banner2.png"
              alt="Benefícios"
              width={1600}
              height={240}
              className="w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* TÍTULO */}
      <section className="mt-20 text-center">

        <p className="text-yellow-400 tracking-[8px] font-bold text-sm">
          PRODUTOS
        </p>

        <h2 className="text-6xl font-black mt-2">
          CATEGORIAS
        </h2>

      </section>

      {/* GRID */}
      <section className="mt-14 px-5 pb-32">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categorias.map((item, index) => (
            <div
              key={index}
              className="
                bg-zinc-950
                border
                border-yellow-500
                rounded-[28px]
                overflow-hidden
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-yellow-500/20
                transition-all
                duration-300
                cursor-pointer
                group
              "
            >

              <div className="relative h-[340px]">

                <Image
                  src={item.imagem}
                  alt={item.nome}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

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
          w-20
          h-20
          flex
          items-center
          justify-center
          shadow-2xl
          shadow-green-500/40
          animate-bounce
        "
      >
        <span className="text-4xl">💬</span>
      </a>

    </main>
  );
}
