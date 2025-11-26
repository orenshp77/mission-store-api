import axios from "axios";
import { appConfig } from "../util/AppConfig";
import type ProductModel from "../models/ProductModel";

class ProductService{
    public async getProducts() : Promise<ProductModel[]>{
        const response = await axios.get(appConfig.productsUrl);
        const products = response.data.products;
        return products;
    }
}

export const productService = new ProductService();