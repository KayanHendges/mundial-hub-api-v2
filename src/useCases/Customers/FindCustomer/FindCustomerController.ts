import { Request, Response } from 'express';
import { FindCustomerUseCase } from './FindCustomerUseCase';

export class FindCustomerController {
    constructor(
        private findCustomerUseCase: FindCustomerUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const customer = await this.findCustomerUseCase.execute(body)
            response.status(201).json({ customer })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}