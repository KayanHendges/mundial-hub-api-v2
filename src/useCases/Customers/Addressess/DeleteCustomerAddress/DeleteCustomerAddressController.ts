import { Request, Response } from 'express';
import toIntOrNull from '../../../../services/dataFormat/number/toIntOrNull';
import { DeleteCustomerAddressUseCase } from './DeleteCustomerAddressUseCase';

export class DeleteCustomerAddressController {
    constructor(
        private deleteCustomerAddressUseCase: DeleteCustomerAddressUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { id } = request.params
        
        try {
            const deletedId = await this.deleteCustomerAddressUseCase.execute({ id: toIntOrNull(id) })
            response.status(201).json({ deletedId })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}