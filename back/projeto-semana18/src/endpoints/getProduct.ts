import { Request, Response } from "express";
import { Product } from "../class/product";
import { ProductDataBase } from "../database/productDataBase";
import { productArray } from "../entities/types";

export const getProducts = async(req:Request, res:Response):Promise<any> => {
    try{
        
        const newProductDataBase = new ProductDataBase()
        const productArray: productArray[] = await newProductDataBase.getAllProducts()
    
        const mapProducts = productArray.map(product => {
            return new Product(
                product.id,
                product.name,
                product.description,
                product.price
            )
        })
        
        res.status(200).send(mapProducts)
    } catch(error){
        res.status(400).send(error)
    }
}