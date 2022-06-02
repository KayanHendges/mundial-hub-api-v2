import { Request, Response } from 'express';
import { FindOrderMarketPlaceUseCase } from './FindOrderMarketPlaceUseCase';

export class FindOrderMarketPlaceController {
    constructor(
        private findOrderMarketPlaceUseCase: FindOrderMarketPlaceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const orderMarketPlace = await this.findOrderMarketPlaceUseCase.execute(body)
            response.status(201).json({ orderMarketPlace })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}