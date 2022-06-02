import { Request, Response } from "express";
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";

export class UpdateCustomerController {
    constructor(
        private updateCustomerUseCase: UpdateCustomerUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request

        try {
            const updatedCustomer = await this.updateCustomerUseCase.execute(body)

            response.status(201).json({
                customerId: updatedCustomer.id,
                message: `customer ${updatedCustomer.name} (${updatedCustomer.id}) updated with success`,
                customer: updatedCustomer
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }

    }
}