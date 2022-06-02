import { Request, Response } from 'express';
import { FindCustomerAddressUseCase } from './FindCustomerAddressUseCase';

export class FindCustomerAddressController {
    constructor(
        private findCustomerAddressUseCase: FindCustomerAddressUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const address = await this.findCustomerAddressUseCase.execute(body)
            response.status(201).json({address})
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}