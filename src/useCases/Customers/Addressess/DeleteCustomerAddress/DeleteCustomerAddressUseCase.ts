import { ICustomersAddressesRepository } from '../../../../repositories/Customers/CustomersAddresses/ICustomersAddressesRepository'
import { DeleteCustomerAddressDataValidate } from './DeleteCustomerAddressDataValidate'
import { DeleteCustomerAddressRequestDTO } from './DeleteCustomerAddressRequestDTO'

export class DeleteCustomerAddressUseCase {
    constructor(
        private deleteCustomerAddressDataValidate: DeleteCustomerAddressDataValidate,
        private  customersAddressesRepository: ICustomersAddressesRepository
    ){}
    
    async execute(data: DeleteCustomerAddressRequestDTO): Promise<{deletedId: number}>{
        
        try {
            this.deleteCustomerAddressDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const deletedId = await this.customersAddressesRepository.delete(id)
        .catch( err => { throw new Error(err) } )

        if(deletedId){
            return { deletedId }
        }
    }
}