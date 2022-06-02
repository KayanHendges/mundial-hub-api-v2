import { Request, Response } from 'express';
import toIntOrNull from '../../../services/dataFormat/number/toIntOrNull';
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

export class DeleteCustomerController {
    constructor(
        private deleteCustomerUseCase: DeleteCustomerUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { id } = request.params
        
        
        try {
            const deleted = await this.deleteCustomerUseCase.execute({ id: toIntOrNull(id) })
            response.status(201).json(deleted)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}