import type ReviewModel from "./ReviewModel";

export default interface ProductModel {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    stock:number;
    category:string;
    reviews: ReviewModel[];
    images: string[];

    

}