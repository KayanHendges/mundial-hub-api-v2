import { Request, Response } from 'express';
import { ListStoresUseCase } from './ListStoresUseCase';

export class ListStoresController {
    constructor(
        private listStoresUseCase: ListStoresUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request

        try {
            const list = await this.listStoresUseCase.execute(body)
            response.status(201).json( list )
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}