import { Request, Response } from 'express';
import { ListOrdersMarketPlaceUseCase } from './ListOrdersMarketPlaceUseCase';

export class ListOrdersMarketPlaceController {
    constructor(
        private listOrdesMarketPlacesUseCase: ListOrdersMarketPlaceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const list = await this.listOrdesMarketPlacesUseCase.execute(body)
            response.status(201).json( list )
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}