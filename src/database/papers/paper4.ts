import image41 from "@/assets/41.png";
import image42 from "@/assets/42.png";
import image43 from "@/assets/43.png";
import capa1 from "@/assets/capa1.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper4: IPaper = {
    name: "Influência da Variação das Propriedades Térmicas do Sistema de Cobertura nas Condições de Conforto Térmico de um Ambiente Multifuncional de uma Habitação em Foz do Iguaçu-PR.",
    author: "Amanda Clarice Spiazzi Odia",
    category: "cobertura",
    link: "https://dspace.unila.edu.br/handle/123456789/7198",
    imageSrc: capa1,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 4,
    ano: 2023,
    methodology: ['Simulação'],
    software: ['EnergyPlus', 'Sketchup', 'Euclid', 'Revit'],
    images: [{
        url: image42,
        caption: 'Planta baixa do quarto com área de estudo'
    },
    {
        url: image43,
        caption: 'Dimensões da janela [cm]'
    }],
    objective: "Avaliar, por meio de simulações computacionais, o desempenho térmico de diferentes tipos de coberturas aplicados a um ambiente multifuncional, de uma habitação unifamiliar, considerando o clima de Foz do Iguaçu, PR.",
    methodologyDescription: [
        'A primeira envolveu a caracterização climática de Foz do Iguaçu - PR e a determinação da célula modelo a ser utilizada nas simulações computacionais.',
        'A segunda etapa foi a caracterização das propriedades dos materiais das coberturas e das vedações verticais e horizontais do modelo.',
        'A terceira foi a identificação do perfil de uso e ocupação e o processamento das simulações computacionais, considerando a variação dos tipos de cobertura.'
    ],
    principalImage: { url: image41, caption: 'Vista tridimensional da edificação' },
    results: [
        'Quanto maior a absortância da cor analisada, menor é o desempenho térmico do modelo.',
        'Os modelos com os maiores valores de transmitância térmica apresentaram os menores resultados de PHFT (Percentual de Horas de ocupação dentro de uma Faixa de Temperatura operativa) ao elevar a absortância, nesses casos a absorção da radiação solar é muito alta, e por possuírem alta transmitância térmica a maior parte desse calor é transmitido para o interior do APP (Ambiente de Permanência Prolongada).',
        'Para o menor valor de absortância, percebe-se que sistemas de cobertura com transmitâncias térmicas mais elevadas possuem PHFT maior do que os sistemas comaltas resistências térmicas, nesse caso, coberturas com valores altos de resistência térmica podem dificultar a liberação de calor do APP durante a noite, elevando a temperatura interna e diminuindo o PHFT.',
        'Todos os modelos com laje, laje e gesso ou laje e PVC, bem como todos os modelos simulados com telha termoacústica atingiram o desempenho mínimo requirido pela norma. Nas simulações com telha cerâmica ou de fibrocimento sem forro, nenhum dos modelos atingiu o desempenho mínimo.'
    ]
}