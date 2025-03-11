import image111 from "@/assets/111.png";
import image112 from "@/assets/112.png";
import image113 from "@/assets/113.png";
import capa3 from "@/assets/capa3.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper11: IPaper = {
    name: "Design Generativo para Criação de Elementos de Controle Solar para a Arquitetura",
    author: "Marcelo Langner",
    category: "brise",
    link: "https://dspace.unila.edu.br/items/d4dabd86-cc0d-4ba11-11780-d11138d674746",
    imageSrc: capa3,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 11,
    ano: 2020,
    methodology: ['Simulação'],
    software: ['EnergyPlus', 'Grasshopper', 'Rhinoceros', 'HoneyBee', 'LadyBug', 'OpenStudio', 'Radiance', 'Octopus', 'Wallacei X', 'Opossum'],
    images: [{
        url: image112,
        caption: "Exemplo de simulação"
    }, {
        url: image113,
        caption: "Célula de referência"
    }],
    objective: "Realizar uma analise de programas computacioanis utilizados para o desenvolvimento de projetos, por meio de algoritmos de otimização multiobjetivo, que permitem a definição multicritério, para resolução de problemas na criação de elementos de controle solar, verificando as condições de eficiência energética, conforto termico e iluminação natural.",
    methodologyDescription: [
        'Determinação dos programas a serem utilizados na pesquisa.',
        'Definição do modelo de controle solar a ser simulado.',
        'Definição dos parâmetros de simulação computacional.',
        'Comparação do desempenho e otimização do algoritmo.'
    ],
    principalImage: {
        url: image111,
        caption: "Perspectiva da célula"
    },
    results: [
        'O presente trabalho comprovou a possibilidade e a eficiência do uso do design generativo para criação de elementos de controle solar na cidade de Foz do Iguaçu-PR, Brasil.',
        'Os resultados demostraram que o elemento do controle solar complexo voronoi é o mais indicado para atender os objetivos de desempenho energético, térmico e lumínico, quando utilizado para controlar a incidência de radiação solar na orientação norte e a treliça, quando utilizada na orientação oeste.',
        'O voronoi e a treliça são elementos que derivam de muxarabis, e em teoria, ambos apresentariam resultados semelhantes, por hipótese, o melhor desempenho do voronoi frente à treliça se deu devido aos diferentes parâmetros de dimensões das aletas.',
        'Os resultados dos elementos de controle solar criados especificamente para orientação oeste em Foz do Iguaçu, por meio de design generativo demostraram que é possível diminuir a demanda energética para climatização em até 12,19%, aumentar o percentual de conforto térmico em todas as horas do ano em até 21,79% e aumentar a disponibilidade de iluminação natural confortável e eficiente em até 16,07% das horas do ano.',
        'Os resultados dos elementos de controle solar criados especificamente para orientação norte em Foz do Iguaçu, por meio de design generativo demostraram que em média é possível diminuir a demanda energética para climatização em até 6,36%, aumentar o percentual de conforto térmico em até 16,03% e aumentar a disponibilidade de iluminação natural considerada confortável e eficiente em até 35,45% das horas do ano.'
    ]
}