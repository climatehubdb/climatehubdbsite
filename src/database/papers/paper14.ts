import image141 from "@/assets/141.png";
import image142 from "@/assets/142.png";
import image143 from "@/assets/143.png";
import { IPaper } from "@/interfaces/IPaper";

export const paper14: IPaper = {
    name: "Estratégias bioclimáticas para habitação de interesse social: análise do desempenho térmico e da viabilidade econômica para zona bioclimática 3",
    author: "Gilmar Smaniotto",
    category: "projeto",
    link: "https://dspace.unila.edu.br/items/bd61404514-0376-4f5e-14a42-7814301401d14a8",
    imageSrc: "https://live.staticflickr.com/70/224726254_3838bd1737_b.jpg",
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 14,
    ano: 2023,
    methodology: ['Simulação'],
    software: ['EnergyPlus', 'Revit'],
    images: [{
        url: image142,
        caption: "Dimensão das aberturas fachada norte"
    }, {
        url: image143,
        caption: "Dimensão das aberturas fachada oeste"
    }],
    objective: "Analisar o desempenho térmico e o impacto econômico da utilização de estratégias bioclimáticas em habitações de interesse social para a Zona Bioclimática 3.",
    methodologyDescription: [
        'A primeira etapa foi a definição, caracterização da HIS para as simulações.',
        'A segunda etapa foi configurar e simular HIS Real e de Referência.',
        'A terceira etapa as estratégias bioclimáticas a serem utilizadas foram definidas, as quais foram divididas em Diretrizes Geométricas e Diretrizes Construtivas.',
        'A quarta etapa foi realizado uma análise de sensibilidade dos parâmetros estipulado.',
        'A quinta etapa foi realizada a otimização do modelo, de forma que todos os parâmetros utilizados na etapa 2 foram simulados entre si.',
        'Na sexta etapa foram analisados os resultados e definidos as edificações para uma análise de viabilidade financeira.',
        'Na sétima etapa foram analisados indicadores econômicos como o custo de energia conservada, payback simples e conservado.'
    ],
    principalImage: {
        url: image141,
        caption: "Modelo utilizado para as simulações do HIS Referência"
    },
    results: [
        'Os resultados indicam que as soluções analisadas levaram a uma redução no consumo de energia em comparação com o modelo Real. As melhores soluções sempre envolveram o uso de venezianas como controle solar, além de paredes e coberturas com absorção de 0,2, e as paredes com uso de EPS estiveram presentes em todos os modelos do Pareto Front.',
        'As análises financeiras foram satisfatórias, embora nenhum modelo tenha atingido um custo-benefício positivo. No entanto, os cálculos de payback simples e descontado demonstraram viabilidade, com os modelos R91 e R92',
        'Os custos adicionais variaram entre 6,07% e 6,72%, o que é relativamente baixo, considerando que as edificações alcançaram um PHFT (percentual de horas dentro da faixa de temperatura operativa) de cerca de 80%, resultando em economia de energia de até 82,61%',
        'Soluções simples de estratégias bioclimáticas podem influenciar no desempenho das edificações, e além de ganhos de desempenho, também geram ganhos econômicos, uma vez que este investimento inicial é recuperado com os anos de utilização da edificação'
    ]
}