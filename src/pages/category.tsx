import SoftwareBar from "@/components/softwarebar";
import { papers } from "@/database/papers";
import { IPaper } from "@/interfaces/IPaper";
import { useSearchParams } from "react-router-dom";

const features = [
  { key: "methodology", name: "Metodologia" },
  { key: "author", name: "Autor" },
  {
    key: "ano",
    name: "Ano de publicação",
  },
  { key: "category", name: "Categoria" },
];

function Category() {
  const [searchParams] = useSearchParams();
  const idPaper = searchParams.get("id") ?? 0;
  const paper = papers.filter((paper) => paper.id === +idPaper)[0];

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 pt-32 pb-12 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {paper.name}
          </h2>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.key} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.key === "methodology"
                    ? paper.methodology.map((meth) => (
                        <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-2">
                          {meth}
                        </span>
                      ))
                    : (paper[feature.key as keyof IPaper] as string)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="flex flex-col p-8">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src={paper.principalImage.url}
            className="rounded-lg bg-gray-100"
            loading="lazy"
          />

          <figcaption className="text-center text-sm text-gray-600 mt-6">
            {paper.principalImage.caption}
          </figcaption>
        </figure>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-6 py-12">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h4 className="text-xl font-bold tracking-tight text-gray-900">
            Aviso sobre Direitos Autorais e Uso de Informações Acadêmicas
          </h4>

          <div className="mt-6">
            <blockquote className="text-justify text-base leading-8 text-gray-900 space-y-4">
              <p>
                Esta publicação contém informações detalhadas sobre o trabalho
                acadêmico descrito acima. Todos os dados e conteúdo apresentados
                referem-se exclusivamente a este projeto acadêmico. Os direitos
                autorais sobre o trabalho acadêmico são reservados e pertencem
                ao autor ou à instituição responsável. A reprodução,
                distribuição ou uso de qualquer parte do conteúdo para além do
                contexto específico deste trabalho pode infringir direitos
                autorais e outras regulamentações legais.
              </p>
              <p>
                Para informações adicionais sobre o trabalho acadêmico e suas
                diretrizes de uso, consulte a documentação associada ao projeto
                ou as orientações fornecidas pelo autor ou pela instituição.
                Certifique-se de seguir todas as normas estabelecidas para
                garantir a conformidade com os requisitos acadêmicos e legais
                aplicáveis.
              </p>
            </blockquote>
          </div>
        </div>
        <div className="bg-white p-12 text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <a
              className="text-lg font-semibold leading-8 text-gray-900 hover:underline"
              href={paper.link}
            >
              Acesse ao trabalho completo
            </a>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Objetivo
          </h3>

          <div className="mt-10">
            <blockquote className="text-justify text-xl leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>{paper.objective}</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Metodologia
          </h3>

          <div className="mt-10">
            <blockquote className="text-justify text-xl leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p className="pb-5">
                A seguir, são apresentados os principais pontos da metodologia
                adotada para o desenvolvimento deste trabalho, destacando as
                etapas e os procedimentos essenciais para sua execução. Cada
                fase foi planejada para garantir a consistência e a qualidade
                dos resultados, assegurando a relevância e a precisão das
                análises realizadas.
              </p>
              <ul className="list-disc pl-5 space-y-4">
                {paper.methodologyDescription?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </blockquote>
          </div>
        </div>
      </section>

      {paper.software.length && (
        <SoftwareBar
          title="Programas utilizados"
          sofwareList={paper.software}
        />
      )}

      <div className={`${paper.software.length ? "py-16" : ""} mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8`}>
        {paper.images.map((image) => (
          <figure className="max-w-full p-8">
            <img
              alt="Descrição da imagem"
              src={image.url}
              className="rounded-lg bg-gray-100 w-full h-auto object-cover"
              loading="lazy"
            />
            <figcaption className="text-center text-sm text-gray-600 mt-6">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <section className="relative isolate overflow-hidden bg-white px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Principais Resultados
          </h3>

          <div className="mt-10">
            <blockquote className="text-justify text-xl leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <ul className="list-disc pl-5 space-y-4">
                {paper.results?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
