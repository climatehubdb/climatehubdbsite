import image21 from "@/assets/21.png";
import image22 from "@/assets/22.png";
import image23 from "@/assets/23.png";
import capa1 from "@/assets/capa1.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper2: IPaper = {
    name: "Análise da Eficiência Termoenergética de Sistemas de Coberturas para o Clima Subtropical Úmido de Edificações Residenciais em Foz do Iguaçu, Paraná",
    author: "Patricia Soares Teixeira",
    category: "cobertura",
    link: "https://dspace.unila.edu.br/items/6e38d92e-4727-4870-ba24-e58a5210ad17",
    imageSrc: capa1,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 2,
    ano: 2022,
    methodology: ['Simulação'],
    software: ['EnergyPlus', 'Sketchup', 'Euclid'],
    images: [{ url: image22, caption: 'Planta Baixa da edificação modelo real.' }, { url: image23, caption: 'Zonas térmicas da edificação modelo.' }],
    objective: "Avaliar a eficiência termoenergética de diferentes sistemas de coberturas, de uma edificação residencial, unifamiliar, inserida em Foz do Iguaçu",
    methodologyDescription: [
        'A primeira envolveu a definição dos parâmetros do projeto arquitetônico, com o desenvolvimento de um modelo real de edificação localizado em Foz do Iguaçu, PR, considerando características climáticas e o programa habitacional Casa Verde e Amarela.',
        'A segunda etapa foi a modelagem da edificação e a configuração dos parâmetros para simulação termoenergética, utilizando o programa EnergyPlus e o plugin Euclid no SketchUp, com ajustes conforme os requisitos da NBR 15575-1, incluindo ventilação natural e ar-condicionado.',
        'A terceira etapa consistiu na avaliação do desempenho termoenergético dos sistemas de coberturas, comparando o modelo real com o modelo de referência da norma, por meio de 66 simulações, que contemplaram variações de materiais e sistemas de cobertura, incluindo telhas, forro, manta aluminizada e laje.'
    ],
    principalImage: { url: image21, caption: 'Modelagem da edificação com as zonas térmicas.' },
    results: [
        'A pesquisa reforça as recomendações da norma ABNT 15220 para a ZB3, destacando que as coberturas leves e isoladas (U ≤ 2,00) proporcionam melhor desempenho, com melhores resultados de percentual de horas dentro da faixa de temperatura operativa (PHFT), especialmente nas composições sem laje.',
        'As melhores performances de desempenho térmico e energético foram alcançadas em coberturas que incorporam isolamento térmico, como telhas termoacústicas e mantas aluminizadas, que proporcionam um controle mais eficiente da temperatura interna, independentemente do uso de outros elementos como laje ou forro.',
        'As coberturas que utilizaram telhas comuns, como fibrocimento, cerâmica e aço trapezoidal, apresentaram grandes variações no desempenho térmico quando combinadas com a manta aluminizada. Para a ZB3, a principal melhoria no desempenho energético ocorre quando é adicionado material isolante à cobertura.',
        'As composições que apresentaram melhor desempenho energético resultaram em uma redução significativa da carga térmica total da edificação, com a melhor composição alcançando uma redução de até 43%.'
    ]
}