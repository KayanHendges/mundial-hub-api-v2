import { Request, Response } from 'express';
import { CreateOrderMarketPlaceUseCase } from './CreateOrderMarketPlaceUseCase';

export class CreateOrderMarketPlaceController {
    constructor(
        private createOrderMarketPlaceUseCase: CreateOrderMarketPlaceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const { createdId } = await this.createOrderMarketPlaceUseCase.execute(body)
            response.status(201).json({ createdId })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}