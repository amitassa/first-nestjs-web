import { Injectable, NotFoundException } from "@nestjs/common";
import { Timestamp } from "rxjs";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, description: string, price:number): string{
        const prodId = new Date().toString()
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {
        return [...this.products]; // return as new array instead of pointer to the property

    }

    getProductByName(name: string): Product{
        const product = this.products.find((prod) => prod.title == name)
        if (!product){
            throw new NotFoundException();
        }
        return {...product};
    }
}