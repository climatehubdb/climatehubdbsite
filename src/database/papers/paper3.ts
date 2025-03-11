import image31 from "@/assets/31.png";
import image32 from "@/assets/32.png";
import image33 from "@/assets/33.png";
import capa1 from "@/assets/capa1.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper3: IPaper = {
    name: "Influência da cobertura no desempenho térmico de uma tipologia habitacional em Foz do Iguaçu-PR",
    author: "Letícia da Silva Alves",
    category: "cobertura",
    link: "https://dspace.unila.edu.br/items/09137c8b-9cdd-408e-9916-93492c4da817",
    imageSrc: capa1,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 3,
    ano: 2022,
    methodology: ['Simulação'],
    software: ['EnergyPlus', 'Sketchup', 'Euclid', 'Excel', 'Autocad'],
    images: [{
        url: image32,
        caption: 'Vista da edificação no Sketchup'
    }, {
        url: image33,
        caption: 'Vista superior dos modelos com variação no azimute'
    }],
    objective: "Analisar a influência da cobertura no conforto e desempenho térmico de uma tipologia habitacional unifamiliar localizada em Foz do Iguaçu-PR",
    methodologyDescription: [
        'A definição do padrão da edificação a ser estudada foi realizada com base na Residência Padrão Baixo, conforme a NBR 12721, representando residências de dois dormitórios, sala, banheiro, cozinha e área para tanque, com área real de aproximadamente 58,64 m².',
        'A edificação foi modelada no software AutoCAD, com a criação de plantas baixas, cortes (com e sem platibanda) e vistas tridimensionais. As diferentes zonas térmicas foram atribuídas aos ambientes da edificação para análise dos dados de cada área, considerando as paredes internas e externas.',
        'O posicionamento da edificação foi analisado em relação à orientação solar, com a realização de oito simulações utilizando um modelo de referência. A fachada frontal, com maior área de elementos translúcidos, foi modelada em cada simulação direcionada para um dos pontos cardeais para observar o impacto da orientação solar no conforto térmico.'
    ],
    principalImage: { url: image31, caption: 'Vista tridimensional da edificação' },
    results: [
        'Os resultados mostraram que, durante os meses mais quentes (novembro a março), o desempenho térmico das edificações foi crítico, com nenhum modelo alcançando mais de 15% de PHFTUH. No inverno, todos os modelos tiveram PHFTUH superior a 60%, e a carga térmica anual de aquecimento foi de apenas 4,3% da carga térmica total.',
        'Os modelos com telha sanduíche apresentaram os melhores resultados em termos de desempenho térmico, com a menor carga térmica total e maior quantidade de horas dentro da faixa de temperaturas operativas.',
        'A combinação de telha sanduíche com laje de concreto oferece um bom desempenho térmico e reduz as cargas térmicas.'
    ]
}