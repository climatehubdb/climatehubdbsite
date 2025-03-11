import image14 from "@/assets/14.png";
import image11 from "@/assets/11.png";
import image13 from "@/assets/13.png";
import capa4 from "@/assets/capa4.webp";
import { IPaper } from "@/interfaces/IPaper";

export const paper1: IPaper = {
    name: "Ventilação com Tubos Enterrados para Climatização Natural de Ambientes nas Zonas Bioclimáticas do Sul do Brasil",
    author: "Thais Aline Soares",
    category: "ventilação",
    link: "https://dspace.unila.edu.br/handle/123456789/6453",
    imageSrc: capa4,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "category",
    id: 1,
    ano: 2021,
    methodology: ['Medições in loco', 'Simulação'],
    methodologyDescription: [
        'Levantamento climático e do solo de Foz do Iguaçu (PR), analisé do estudo de caso, instalação do sistema de trocador de calor terra-ar e coleta de dados.',
        'Seleção de cidades representativas dos grupos bioclimáticos da região sul e levantamento de dados de solo, foi feita a definição dos programas de simulação, modelo de célula, equipamentos, perfil de uso e parâmetros para avaliação dos resultados.'
    ],
    results: [
        'Apesar do seu potencial para redução de consumo energético e possíveis contribuições para a saúde do ar interno dos ambientes, existem locais com características climáticas onde os trocadores de calor precisam ser combinados ao uso do ar-condicionado, para promover conforto térmico aos espaços.',
        'Características como elevada umidade relativa, temperatura do solo, umidade do solo e condutividade térmica do solo são influenciadores determinantes para a definição da melhor tipologia do sistema a ser utilizada.',
        'O sistema apresentou aumento das horas ocupadas em conforto térmico e redução do consumo energético do quarto e da sala, para janelas em ambas as orientações.',
        'O consumo energético sem trocador de calor foi de 38,46 Kwh/m² e com trocador de calor foi de 16,13 Kwh/m², havendo uma redução de 22,33 Kwh/m²'
    ],
    software: ['Climate Consultant', 'EnergyPlus', 'Grasshopper', 'Rhinoceros', 'HoneyBee', 'Octopus', 'OpenStudio'],
    principalImage: { url: image14, caption: 'Distribuição dos tubos nos ambientes' },
    images: [{ url: image11, caption: 'Fachada oeste residência' }, { url: image13, caption: 'Esquema de Funcionamento do Trocador de Calor Terra-Ar' }],
    objective: "Verificar a influência do sistema trocador de calor misto tipo terra-ar na climatização dos ambientes quarto e sala para grupos bioclimáticos da região sul do Brasil"
}