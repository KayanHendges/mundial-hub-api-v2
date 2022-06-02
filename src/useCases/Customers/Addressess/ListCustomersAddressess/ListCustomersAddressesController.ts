import { Request, Response } from 'express';
import { ListCustomersAddressesUseCase } from './ListCustomersAddressesUseCase';

export class ListCustomersAddressesController {
    constructor(
        private listCustomersAddressesUseCase: ListCustomersAddressesUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const addresses = await this.listCustomersAddressesUseCase.execute(body)
            response.status(201).json(addresses)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}