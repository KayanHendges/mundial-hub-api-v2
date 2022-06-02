import { Request, Response } from "express";
import { GetOrderUseCase } from "./GetOrderUseCase";

export class GetOrderController {
    constructor(
        private getOrderUseCase: GetOrderUseCase
    ){}
    
    async handle(request: Request, response: Response){

        const { order_id, store_code } = request.query

        try {
            const order = await this.getOrderUseCase.execute({
                order_id: order_id as string,
                store_code: store_code as string
            })

            return response.status(200).json({ order })
        } catch (err){
            console.log(err)
            return response.status(400).json({
                message: err.message || 'unexpected error'
            })
        }
    }
}