import { ICustomersRepository } from '../../../repositories/Customers/Customers/ICustomersRepository'
import { DeleteCustomerDataValidate } from './DeleteCustomerDataValidate'
import { DeleteCustomerRequestDTO } from './DeleteCustomerRequestDTO'

export class DeleteCustomerUseCase {
    constructor(
        private deleteCustomerDataValidate: DeleteCustomerDataValidate,
        private  customerRepository: ICustomersRepository
    ){}
    
    async execute(data: DeleteCustomerRequestDTO): Promise<{deletedId: number}>{
        
        try {
            this.deleteCustomerDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const deleted = await this.customerRepository.delete(id)
        .catch( err => { throw new Error(err) } )

        return { deletedId: id }
    }
}