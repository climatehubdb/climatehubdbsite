import image51 from "@/assets/51.png";
import image52 from "@/assets/52.png";
import image53 from "@/assets/53.png";
import capa1 from "@/assets/capa1.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper5: IPaper = {
    name: "Análise do Desempenho Térmico e Escoamento Superficial do Telhado Verde em Relação ao Fibrocimento",
    author: "William Alejandro Weisheimer Sanhuea",
    category: "cobertura",
    link: "https://www.udc.edu.br/libwww/colegios/uploads/uploadsDiversos/files/CIVIL2021-25.pdf",
    imageSrc: capa1,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 5,
    ano: 2021,
    methodology: ['Medições in loco'],
    software: [],
    images: [{
        url: image52,
        caption: "Colocação do substrato"
    },
    {
        url: image53,
        caption: "Cisterna dos protótipos"
    }],
    objective: "Analisar a eficácia do telhado verde em comparação ao telhado de fibrocimento, conforto térmico e escoamento superficial.",
    methodologyDescription: [
        'Foram confeccionados dois protótipos de edículas em uma escala 1:1 seria de (7x5) m, porem para obtenção de dados mais próximos da realidade, os protótipos tiveram sua escala reduzida para 10:1 passando a ter dimensões de (70x50) cm com dimensões de (70x50) cm.',
        'Foi realizado o monitoramento diário nos periodos matutino e vespertino durante 14 dias.'
    ],
    principalImage: { url: image51, caption: 'Protótipo para medição' },
    results: [
        'O telhado verde apresenta um bom conforto térmico no período matutino, podendo ser observada variações térmicas de 0,1°C a 2°C a menos quando comparado ao fibrocimento e 0,4°C a 2,2°C a menos em relação ao ambiente externo.',
        'O telhado verde apresentou um bom conforto térmico no período vespertino, observando-se variações térmicas de 0,3°C a 2,3°C menor quando comparado ao fibrocimento e 0,7°C a 3,8°C a menos em relação ao ambiente externo.',
        'O o telhado verde torna eficaz na diminuição de picos de escoamento gerados durante eventos chuvosos com grande intensidade, com isso o mesmo proporciona menor volume escoado e utiliza-se da parcela retida para manter o sistema e regularizar o conforto térmico.'
    ]
}