
interface IFeature {
    name: string,
    description: string
}

export interface ICategory {
    name: string;
    description: string;
    image: string;
    features: IFeature[]
}