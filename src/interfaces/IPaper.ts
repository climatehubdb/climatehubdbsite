interface IImage {
    url: string;
    caption: string
}

export interface IPaper {
    id: number;
    ano: number;
    methodology: string[];
    methodologyDescription: string[];
    software: string[];
    name: string;
    author: string;
    category: string;
    link: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
    images: IImage[];
    objective: string;
    principalImage: IImage;
    results: string[]
}