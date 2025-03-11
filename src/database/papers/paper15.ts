import image151 from "@/assets/151.png";
import image152 from "@/assets/152.png";
import image153 from "@/assets/153.png";
import { IPaper } from "@/interfaces/IPaper";

export const paper15: IPaper = {
    name: "Conforto Térmico e Eficiência Energética de Salas de Aula Destinadas ao Ensino Superior",
    author: "Clarissa Buss",
    category: "projeto",
    link: "https://dspace.unila.edu.br/items/50082856-ae4b-417b-aa00-cdfd86f7fe02",
    imageSrc: "https://live.staticflickr.com/70/224726254_3838bd1737_b.jpg",
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 15,
    ano: 2023,
    methodology: ['Simulação'],
    software: ['Climate Consultant', 'SketchUp', 'Euclid', 'EnergyPlus'],
    images: [{
        url: image152,
        caption: "Brises horizontais de 8cm de largura e 0° de inclinação"
    }, {
        url: image153,
        caption: "Elevação Norte - Edificação contando com a inclusão de brises"
    }],
    objective: "Identificar e avaliar estratégias projetuais que contribuam para o conforto térmico e eficiência energética em edificações de salas de aula destinadas ao ensino superior para locais de clima subtropical úmido, especificamente, Foz do Iguaçu-PR.",
    methodologyDescription: [
        'Caracterização do objeto de estudo (Estudo de Caso).',
        'Definição dos parâmetros para simulação computacional.',
        'Execução e anãlise das simulações computacionais.'
    ],
    principalImage: {
        url: image151,
        caption: "Elevação Norte"
    },
    results: [
        'Nenhuma das opções avaliadas possibilitou que percentuais de conforto térmico maiores ou iguais a 90% fossem atingidos. Assim, apoiado no estudo, inferiu-se que nem mesmo a solução integrada foi suficiente para eliminar o uso do ar-condicionado nas salas de aula.',
        'A edificação escolar demanda, especialmente, de estratégias projetuais, considerando os períodos quentes e o seu padrão de uso. Os problemas relacionados à variação de temperatura noturna, por exemplo, ocorrem, em maioria, fora do período de ocupação das salas de aula, contribuindo para percentuais de desconforto por frio muito baixos.',
        'Os dados obtidos da aplicação de estratégias projetuais integradas ao modelo de referência demonstraram que é possível alcançar uma redução média na demanda energética para condicionamento artificial de até 9,97% e uma elevação média do percentual de conforto térmico durante as horas ocupadas de até 10,13%.',
        'Cores de alta refletância aplicadas à envoltória são desejáveis, quando o objetivo é melhorar as condições de conforto térmico e eficiência energética, assim como vidros de baixa transmissão solar e fator solar, telhas de baixa absortância e alta emissividade, elementos de sombreamento que permitam controlar a exposição demasiada e desfavorável à radiação solar direta e janelas voltadas para o vento predominante, com alta porcentagem de área de abertura e posicionadas de modo à proporcionar a ventilação cruzada.'
    ]
}