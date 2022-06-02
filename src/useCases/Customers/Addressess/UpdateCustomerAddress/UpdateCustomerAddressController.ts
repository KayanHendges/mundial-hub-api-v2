import { Request, Response } from 'express';
import { UpdateCustomerAddressUseCase } from './UpdateCustomerAddressUseCase';

export class UpdateCustomerAddressController {
    constructor(
        private updateCustomerAddressUseCase: UpdateCustomerAddressUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const updated = await this.updateCustomerAddressUseCase.execute(body)
            response.status(201).json({
                message: `the Customer Address ${updated.id} updated with success`,
                updated,
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}