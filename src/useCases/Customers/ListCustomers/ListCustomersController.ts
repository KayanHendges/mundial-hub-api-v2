import axios from 'axios';
import { Request, Response } from 'express';
import { ListCustomersUseCase } from './ListCustomersUseCase';

export class ListCustomersController {
    constructor(
        private listCustomersUseCase: ListCustomersUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request

        try {
            const customers = await this.listCustomersUseCase.execute(body)
            response.status(201).json(customers)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}