import image81 from "@/assets/81.png";
import image82 from "@/assets/82.png";
import image83 from "@/assets/83.png";
import capa2 from "@/assets/capa2.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper8: IPaper = {
    name: "Containers como Material Alternativo para Construção de Casas Populares",
    author: "Natali Gabrieli Stankiewies",
    category: "fachada",
    link: "https://www.udc.edu.br/libwww/colegios/uploads/uploadsDiversos/files/CIVIL2020-22.pdf",
    imageSrc: capa2,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 8,
    ano: 2020,
    methodology: ['Medições in loco'],
    software: [],
    images: [{
        url: image82,
        caption: "Protótipo representativo de alvenaria."
    }, {
        url: image83,
        caption: "Protótipo representativo de container adaptado."
    }],
    objective: "Analisar a viabilidade da reutilização de containers marítimos como habitação popular alternativa, frente a alvenaria de vedação com blocos cerâmicos com estrutura de concreto armado, baseando-se em custos e desempenho.",
    methodologyDescription: [
        'Inicialmente foi feito o levantamento de dados embasado pelas características locais, podendo haver divergências para outras regiões, considerando custos e disponibilidade de materiais, mão-de-obra qualificada, transporte, entre outros fatores.',
        'Foi feito olevantamento de dados do SINAPI para a composição quantitativa de materiais e estimativa de mão de obra, porém os valores serão levantados de três fontes locais, seja para a aquisição de materiais de construção, de ambos os projetos e aquisição, transporte e adaptações dos containers.',
        'Foram construídos três protótipos de simulação: um representando a vedação em alvenaria com revestimento argamassado em ambas as faces, o segundo representando a chapa de aço corten (container) e o último representando a chapa de container adaptada com o isolamento termoacústico e o gesso acartonado',
        'Os protótipos foram expostos por noventa minutos sobre uma "caixa quente", confeccionada em MDF e revestida com papel alumínio, que abrigava 1 lâmpada incandescente infravermelha de 250 W, como fonte de calor.',
        'Foram realizadas também, medições de temperatura em uma edificação comercial de containers (figura 20), na cidade de Medianeira - Paraná'
    ],
    principalImage: {
        url: image81,
        caption: "Container's 277 Bar&Tabacaria."
    },
    results: [
        'A construção de alvenaria, concentra cerca de 44% do orçamento nas etapas de estrutura e vedação. Já na construção de containers, as etapas de compra e transporte (estrutura) e revestimento, correspondem a cerca de 74% de todo o valor.',
        'A fundação se mostra 50% mais econômica no método construtivo de containers, uma vez que não há descarga concentrada de pilares, já que a distribuição da carga e dos esforços aos quais a estrutura do container é submetida, acontece de maneira homogênea ao longo das paredes, que também são estruturais.',
        'Ao estudar mais detalhadamente os resultados de ambos os protótipos cuja utilização para habitação se faz possível, nota-se que a variação da Ti da caixa aolongo do tempo de exposição no ensaio da alvenaria, se mostrou 31% mais alta do que no ensaio do container adaptado, porém a variação da Te ao longo do mesmo tempo de exposição, foi 78% maior também na alvenaria.',
        'A construção em containers pula as etapas que mais geram resíduos, desperdícios e atrasos em uma obra de alvenaria, que são a estrutura e a vedação,se mostrando mais rápida, menos poluente e consequentemente mais sustentável.'
    ]
}