import image71 from "@/assets/71.png";
import image72 from "@/assets/72.png";
import image73 from "@/assets/73.png";
import capa2 from "@/assets/capa2.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper7: IPaper = {
    name: "Análise Térmica de Parede Externa em Ligth Stell Framing",
    author: "Andrey Edygoras Bombassaro",
    category: "fachada",
    link: "https://www.udc.edu.br/libwww/colegios/uploads/uploadsDiversos/files/CIVIL2020-3.pdf",
    imageSrc: capa2,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 7,
    ano: 2020,
    methodology: ['Medições in loco'],
    software: [],
    images: [{
        url: image72,
        caption: "Câmara térmica."
    }, {
        url: image73,
        caption: "Representação do corte das camadas dos painéis."
    }],
    objective: "Avaliar experimentalmente a variação térmica entre os painéis compostos de diferentes materiais e composições do sistema LSF em paredes externas.",
    methodologyDescription: [
        'Foi feito o levantamento de dados para construção da câmara térmica ou câmara quente.',
        'Foram realizados ensaios experimentais em 8 painéis em LSF.',
        'Com a obtenção das temperaturas for realizada a análise dos dados obtidos'
    ],
    principalImage: {
        url: image71,
        caption: "Execução da estrutura metálica em Steel Frame."
    },
    results: [
        'As paredes de sistema Steel Framing, resistem muito mais a transferência de calor independentemente das configurações dos painéis apresentados. No painel de configuração com transmitância alta, mesmo assim, o valor de transmitância térmica fica mais de 75% abaixo do especificado em norma.',
        'A diferença final de variação da temperatura com apenas a troca de um tipo de placa externa a Placa Cimentícia e a Placa Glasroc X, fica em 14,9 °C.',
        'Pela norma todos os painéis, independentemente das configurações passaram nos cálculos normativos.',
        'Os painéis com placa Cimentícia são menos vantajosos em relação aos painéis com placa Glasroc X, pois aquecem mais rápido e tem temperaturas mais elevadas devido a transmitância térmica do material.'
    ]
}