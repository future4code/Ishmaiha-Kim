import { Request, Response } from "express";
import { Product } from "../class/product";
import { Ticket } from "../class/ticket";
import { ProductDataBase } from "../database/productDataBase";



export const createProducts = async(req:Request, res:Response):Promise<any> => {
    try{
        
        const id = "id" + Math.random().toString(16).slice(2)

        const {name, description, price, origin, destiny} = req.body

        if(!id || !name || !description || !price){
            res.statusCode = 422
            throw "Dude.. put your'name', 'description' and 'price' please"
        } 
        
        //instanciando "User" com os dados vindos do body
        const newProduct = new Product(
            id, name, description, price
        )

        const newTicket = new Ticket (
            id, name, description, price, origin, destiny
        )

        const newProductDataBase = new ProductDataBase
        // await newProductDataBase.create(newProduct)

        if(!origin && !destiny){
            await newProductDataBase.create(newProduct)
        } else {
            await newProductDataBase.create(newTicket)
        }
        
        res.status(201).send(`Product created successfully`)
    } catch(error){
        res.status(400).send("I don`t know whats going on")
    }
}