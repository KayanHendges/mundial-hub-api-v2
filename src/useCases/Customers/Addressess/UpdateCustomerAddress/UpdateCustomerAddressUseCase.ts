import { CustomerAddress } from '../../../../entities/Customer/CustomerAddress'
import { ICustomersAddressesRepository } from '../../../../repositories/Customers/CustomersAddresses/ICustomersAddressesRepository'
import { UpdateCustomerAddressDataValidate } from './UpdateCustomerAddressDataValidate'
import { UpdateCustomerAddressRequestDTO } from './UpdateCustomerAddressRequestDTO'

export class UpdateCustomerAddressUseCase {
    constructor(
        private updateCustomerAddressDataValidate: UpdateCustomerAddressDataValidate,
        private customersAddressesRepository: ICustomersAddressesRepository
    ){}
    
    async execute(data: UpdateCustomerAddressRequestDTO): Promise<CustomerAddress>{
        
        try {
            this.updateCustomerAddressDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data
        const { address } = data

        const updated = await this.customersAddressesRepository.update(address, id)
        .catch( err => { throw new Error(err) } )

        if(updated){
            return updated
        }
        
    }
}