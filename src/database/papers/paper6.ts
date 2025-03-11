import image61 from "@/assets/61.png";
import image62 from "@/assets/62.png";
import image63 from "@/assets/63.png";
import capa2 from "@/assets/capa2.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper6: IPaper = {
    name: "Sistema construtivo em Wood Frame: Desempenho Térmico das Vedações Verticais e Potencial de Aplicação para Habitação Social em Foz do Iguaçu-PR",
    author: "Bárbara Brauhardt",
    category: "fachada",
    link: "https://dspace.unila.edu.br/handle/123456789/5471",
    imageSrc: capa2,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 6,
    ano: 2016,
    methodology: ['Medições in loco'],
    software: [],
    images: [{
        url: image62,
        caption: "Corte Seção transversal do painel de Wood Frame analisado."
    }, {
        url: image63,
        caption: "Planta do painel em Wood Frame analisado."
    }],
    objective: "Elaborar um estudo comparativo do desempenho térmico dos painéis de vedação entre o sistema construtivo em alvenaria convencional e o sistema construtivo em Wood Frame e, além disso, analisar a viabilidade de aplicação do último sistema na construção de habitações de interesse social na cidade de Foz do Iguaçu-PR",
    methodologyDescription: [
        'Revisão Bibliográfica, que incluiu o estudo do déficit habitacional e soluções para o problema habitacional, além do estudo do sistema construtivo Wood Frame.',
        'Realização de estudo de caso, onde foi possível obter informações sobre o sistema construtivo Wood Frame aplicado na produção de habitação social no estado do Paraná',
        'Cálculo das propriedades térmicas dos materiais, baseado nas Normas Técnicas Brasileiras - ABNT',
        'Realização e analise de simulação computacional, através do programa THERM 7.4'
    ],
    principalImage: {
        url: image61,
        caption: "Corte seção transversal do painel de Wood Frame com núcleo em lã de vidro e câmara de ar não ventilada."
    },
    results: [
        'De forma geral, os painéis em Wood Frame apresentaram um bom desempenho térmico, quando comparados à alvenaria, principalmente nas propriedades de resistência e transmitância térmica.',
        'Acredita-se que o Wood Frame pode ser sim uma opção viável na produção de habitação social em Foz do Iguaçu, por ser um sistema consolidado em países de primeiro mundo e por apresentar muitas vantagens quando comparado aos sistemas convencionais.',
        'Como a resistência térmica é maior para as paredes em Wood Frame, devido à baixa condutividade térmica das camadas constituintes, os resultados das simulações comprovam os menores valores para o fluxo térmico (W/m2), tanto para verão quanto para inverno, principalmente para o painel WFb (parede em Wood Frame com lã de vidro e câmara de ar) e WFc (parede em Wood Frame com lã de vidro).'
    ]
}