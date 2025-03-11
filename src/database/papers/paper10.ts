import image101 from "@/assets/101.png";
import image102 from "@/assets/102.png";
import image103 from "@/assets/103.png";
import capa2 from "@/assets/capa2.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper10: IPaper = {
    name: "Análise do desempenho térmico e energético de painéis CLT nacionais para o clima de Foz do Iguaçu-PR",
    author: "Karine Hilgenberg Martins",
    category: "fachada",
    link: "https://dspace.unila.edu.br/handle/1234567810/6861",
    imageSrc: capa2,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 10,
    ano: 2022,
    methodology: ['Simulação'],
    software: ['Sketchup', 'EnergyPlus', 'Euclid'],
    images: [{
        url: image102,
        caption: "Fachadas oeste (posterior) e sul modelo real (com beirais)"
    }, {
        url: image103,
        caption: "Fachadas oeste (posterior) e sul modelo real (com beirais e coberturas da garagem e do espaço gourmet)"
    }],
    objective: "Analisar o desempenho térmico e a eficiência energética obtidos com a aplicação do sistema construtivo em painéis CLT produzidos no Brasil, em comparação com os sistemas construtivos em alvenaria convencional e wood frame, considerando as características climáticas da cidade de Foz do Iguaçu-PR e em tipologias residenciais.",
    methodologyDescription: [
        'Levantamento das características e tipologias de painéis CLT produzidos no Brasil, bem como a caracterização dos demais sistemas construtivos analisados.',
        'Escolha dos modelos habitacionais para simulação de desempenho térmico.',
        'Parâmetros para análise simplificada e simulação computacional de desempenho térmico estabelecidos NBR 15575 (ABNT, 2021).',
        'Simulação computacional de desempenho térmico dos modelos habitacionais.'
    ],
    principalImage: {
        url: image101,
        caption: "Perspectiva fachadas oeste e sul"
    },
    results: [
        'Notou-se que existe alguma variabilidade no desempenho térmico dos sistemas construtivos em CLT, associada diretamente à espessura do painel e à presença ou não de material de isolamento térmico (EPS). Como esperado, o desempenho térmico no inverno é superior com o aumento da espessura e conforme se incorpora isolante térmico',
        'Sob condição de ventilação natural e considerando os períodos quentes, os sistemas construtivos em madeira (CLT e wood frame) apresentaram comportamento muito próximo ao sistema construtivo em alvenaria convencional, evidenciado pela similaridade nas temperaturas máximas operativas.',
        'Sob condição de ventilação natural, os sistemas construtivos em madeira apresentaram maior percentual de horas dentro da faixa de temperatura operativa, quando considerado o período de um ano e comparado ao sistema em alvenaria convencional.',
        'Nas condições climáticas de Foz do Iguaçu - PR, a aplicação do sistema construtivo em painéis CLT tem desempenho térmico favorável na condição de ventilação natural e, além disso, pode implicar numa redução de consumo energético ao longo do ano, quando considerada climatização artificial, com destaque maior para a redução das cargas térmicas de aquecimento.'
    ]
}