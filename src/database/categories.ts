import { ICategory } from "@/interfaces/ICategory";
import capa1 from "../assets/capa1.webp";
import capa2 from "../assets/capa2.webp";
import capa3 from "../assets/capa3.webp";
import capa4 from "../assets/capa4.webp";

export const categories: ICategory[] = [
  {
    name: "Sistemas de Cobertura",
    description:
      "Normalmente é formada por superfícies planas com uma determinada inclinação, de forma que permita o perfeito escoamento das águas.",
    features: [
      {
        name: "Desempenho Hidrossanitário.",
        description:
          "A principal função de um sistema de cobertura é proteger o edifício contra infiltrações de água e outros elementos atmosféricos.",
      },
      {
        name: "Isolamento Térmico e Acústico.",
        description:
          "Desempenha um papel importante no isolamento térmico e acústico do edifício.",
      },
      {
        name: "Durabilidade e Manutenção.",
        description:
          "Diretamente relacionada à escolha dos materiais e à qualidade da execução. Além de prever facilidades para a manutenção",
      },
    ],
    image: capa1,
  },
  {
    name: "Fachadas - Vedações Verticais",
    description:
      "Em conjunto com outros elementos da construção fazem a interface entre o ambiente exterior e o interior da edificação.",
    features: [
      {
        name: "Desempenho Térmico e Energético.",
        description:
          "Sistemas de vedação vertical devem ser projetados para minimizar a transferência de calor entre o interior e o exterior, o que ajuda a manter a temperatura interna estável e reduzir os custos de aquecimento e resfriamento.",
      },
      {
        name: "Proteção Contra Elementos Externos e Durabilidade.",
        description:
          "As fachadas devem proporcionar uma barreira eficaz contra intempéries, como chuva, vento e radiação UV, para proteger a estrutura do edifício e garantir sua durabilidade.",
      },
      {
        name: "Aspectos Estéticos e Integração Arquitetônica.",
        description:
          "A fachada não só deve cumprir requisitos técnicos, mas também contribuir para a identidade visual e o apelo estético do edifício.",
      },
    ],
    image: capa2,
  },
  {
    name: "Brises - Elementos de Proteção Solar",
    description:
      "Elementos ou dispositivos de controle solar, geralmente são elementos construídos sendo eles externos ou internos, que tem como objetivo controlar e/ou bloquear os raios solares incidentes em uma edificação.",
    features: [
      {
        name: "Controle da Radiação Solar e Conforto Térmico.",
        description:
          "Os brises (ou brises-soleil) são dispositivos projetados para controlar a incidência da radiação solar direta nas fachadas dos edifícios.",
      },
      {
        name: "Impacto Estético e Arquitetônico.",
        description:
          "Eles podem adicionar um elemento de design visualmente interessante e contribuir para a identidade arquitetônica do projeto.",
      },
      {
        name: "Durabilidade e Manutenção.",
        description:
          "Os brises devem ser projetados para resistir às condições climáticas adversas e exigir pouca manutenção ao longo do tempo.",
      },
    ],
    image: capa3,
  },
  {
    name: "Ventilação Natural",
    description:
      "Estratégia de resfriamento passivo das edificações, a qual tem como função principal a renovação do ar interno das edificações ou também conhecida como ventilação higiênica, a fim de garantir a salubridade dos espaços.",
    features: [
      {
        name: "Controle de Qualidade do Ar e Conforto dos Ocupantes.",
        description:
          "É importante considerar a entrada de poluentes externos e a possibilidade de controle de ventilação para evitar problemas como a entrada de poluição, poeira ou umidade excessiva.",
      },
      {
        name: "Eficiência Energética e Conforto Ambiental.",
        description:
          "A ventilação natural é uma estratégia crucial para melhorar a eficiência energética dos edifícios, reduzindo a necessidade de sistemas de climatização mecânica e, consequentemente, os custos com energia.",
      },
      {
        name: "Aspectos Regulatórios e Normativos.",
        description:
          "É essencial garantir que o sistema atenda aos requisitos de ventilação mínima estabelecidos por códigos de construção e normas de desempenho para a qualidade do ar interno e segurança dos ocupantes.",
      },
    ],
    image: capa4,
  },
];