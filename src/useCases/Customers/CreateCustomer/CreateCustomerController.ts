import { Request, Response } from "express";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

export class CreateCustomerController {
    constructor(
        private createCustomerUseCase: CreateCustomerUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request

        try {
            const customerId = await this.createCustomerUseCase.execute(body)

            response.status(201).json({
                customerId
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }

    }
}