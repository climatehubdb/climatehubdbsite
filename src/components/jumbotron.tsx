function Jumbotron() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 bg-[url('/src/assets/iguaçu.webp')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>
      </div>
      <div className="relative z-10 text-white text-center p-4 mx-auto max-w-4xl pt-40">
        <div className="text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl mt-6">
            Estratégias Bioclimáticas
          </h1>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-4xl">
            Foz do Iguaçu
          </h2>
          <p className="mt-8 mb-6 text-xl leading-8 text-white">
            As estratégias bioclimáticas tem sido estudadas e garantem o uso de
            condições naturais ao máximo, aumentando o desempenho futuro e
            minimizando principalmente o uso de equipamentos de refrigeração e
            condicionamento de ar mecanizados.
          </p>
          <div className="flex items-center justify-center gap-x-6 pb-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
