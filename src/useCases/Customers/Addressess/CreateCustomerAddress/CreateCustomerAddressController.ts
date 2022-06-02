import { Request, Response } from 'express';
import { CreateCustomerAddressUseCase } from './CreateCustomerAddressUseCase';

export class CreateCustomerAddressController {
    constructor(
        private createCustomerAddressUseCase: CreateCustomerAddressUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const created = await this.createCustomerAddressUseCase.execute(body)
            response.status(201).json(created)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}