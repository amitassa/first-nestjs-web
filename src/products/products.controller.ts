import { Controller, Post, Body } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{

    constructor(private readonly productsSerice: ProductsService) {}

    @Post('')
    addProduct(@Body('title') prodTitle: string,
                @Body('desctiption') prodDesc: string,
                @Body('price') prodPrice: number): any{
        const generatedId = this.productsSerice.insertProduct(prodTitle, prodDesc, prodPrice);
        return {id: generatedId};
    }
}