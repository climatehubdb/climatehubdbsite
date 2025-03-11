import image121 from "@/assets/121.png";
import image122 from "@/assets/122.png";
import image123 from "@/assets/123.png";
import { IPaper } from "@/interfaces/IPaper";

export const paper12: IPaper = {
    name: "Cobogós: Un Análisis de la Influencia de la Forma en la Iluminacion Natural",
    author: "Darwin Camacho",
    category: "iluminação",
    link: "https://dspace.unila.edu.br/bitstreams/c3e414cc-4867-47412-b128e-a127ccd4d67b4/download",
    imageSrc: "https://live.staticflickr.com/70/224726254_3838bd1737_b.jpg",
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 12,
    ano: 20112,
    methodology: ['Simulação'],
    software: ['Revit', 'Dialux'],
    images: [{
        url: image122,
        caption: "Planta baixa modelo base"
    }, {
        url: image123,
        caption: "Modelo tridimensional dos casos a ser analisados"
    }],
    objective: "Elaborar um estudo comparativo entre diferentes geometrías de cobogós, para verificar dentro das geometrías analisadas, qual é aa mais adequada em termos de iluminação natural.",
    methodologyDescription: [
        'Foi feita uma investigação bibliográfica e documental sobre o tema.',
        'Pesquisa de campo (coleta e análise de dados dos cobogós mais utilizados no Brasil).',
        'Finalmente foi feita a simulação computacional'
    ],
    principalImage: {
        url: image121,
        caption: "Modelo base 3D"
    },
    results: [
        'Verifica-se que o cobogó é de grande importância para a arquitetura e engenharia civil, pois é um elemento que Proporciona iluminação natural, além de proteção solar e privacidade ao ambiente interno.',
        'Essa estratégia arquitetônica (cobogó) pode ser utilizada para obter iluminação natural adequada em um ambiente interno, pois, como observado nas diferentes análises, ela pode reduzir significativamente os níveis de iluminação natural dentro de um ambiente, em comparação a uma janela convencional.',
        'A geometria do elemento é muito importante, pois ela direcionará a iluminação natural que será distribuída uniformemente pelo ambiente, o que tornará a iluminação homogênea, permitindo ao usuário evitar problemas de saúde devido ao ofuscamento em determinados locais, principalmente próximos a aberturas.'
    ]
}