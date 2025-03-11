import image91 from "@/assets/91.png";
import image92 from "@/assets/92.png";
import image93 from "@/assets/93.png";
import capa2 from "@/assets/capa2.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper9: IPaper = {
    name: "Análise do Conforto Térmico de um Ambiente com Placas de Eps nas Faces Internas de Paredes de Fachada por Simulação Computacional",
    author: "Gabriel Alves Feiertag",
    category: "fachada",
    link: "https://www.udc.edu.br/libwww/colegios/uploads/uploadsDiversos/files/CIVIL2021-2.pdf",
    imageSrc: capa2,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 9,
    ano: 2021,
    methodology: ['Simulação'],
    software: ['EnergyPlus', 'Grasshopper', 'Rhinoceros', 'HoneyBee'],
    images: [{
        url: image92,
        caption: "Calculadora dos elementos de vedação."
    }, {
        url: image93,
        caption: "Fachada da residência"
    }],
    objective: "Avaliar o quanto a utilização de placas de EPS em faces internas das paredes aumentam as condições de conforto térmico.",
    methodologyDescription: [
        'O método é baseado na Proposta de Instrução Normativa Inmetro para Classe de Eficiência Energética de Edificações Residenciais (INI-R) elaborada pelo Centro Brasileiro de Eficiência Energética em Edificações (CB3E)',
        'A primeira parte consistio na definição do tipo da edificação e os parâmetros fixos',
        'A segunda parte são as definições das variáveis consideradas, ou seja, as combinações dos elementos construtivos, os padrões de uso considerados e dados climáticos.',
        ' A terceira parte aborda os demais parâmetros necessarios para a simulação computacional.'
    ],
    principalImage: {
        url: image91,
        caption: "Corte da residência"
    },
    results: [
        'O conforto térmico do ambiente teve uma piora nos períodos de verão, isso se dá pelo fato que o EPS possui uma alta inércia térmica, ou seja, tem a capacidade de manter a temperatura interna por um tempo maior e como a ocupação das pessoas no ambiente tem impactos diretos no conforto.',
        'Há uma melhora no conforto térmico no período do inverno, pois é comum que as janelas fiquem fechadas por mais tempo, então, de maneira análoga ao verão, a temperatura interna é maior que a externa e a alta capacidade de inércia térmica do EPS permite que essa temperatura se mantenha por mais tempo.',
        'O condicionamento de ar não necessita operar durante todo o período de permanência, mas sim durante os intervalos de temperatura até atingir a temperatura de conforto e devido as propriedades do EPS a temperatura interna se mantem por mais tempo.',
        'Foi possível verificar que, o perfil de ocupação influência diretamente no consumo energético, tomando como exemplo o aumento de 1,74 vezes o consumo do perfil 2 em relação ao perfil 1, justamente pela maior presença do usuário no ambiente.'
    ]
}