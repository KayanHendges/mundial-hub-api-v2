import { CustomerAddress } from '../../../../entities/Customer/CustomerAddress'
import { ICustomersAddressesRepository } from '../../../../repositories/Customers/CustomersAddresses/ICustomersAddressesRepository'
import { FindCustomerAddressDataValidate } from './FindCustomerAddressDataValidate'
import { FindCustomerAddressRequestDTO } from './FindCustomerAddressRequestDTO'

export class FindCustomerAddressUseCase {
    constructor(
        private findCustomerAddressDataValidate: FindCustomerAddressDataValidate,
        private customersAddressesRepository: ICustomersAddressesRepository
    ){}
    
    async execute(data: FindCustomerAddressRequestDTO): Promise<CustomerAddress>{
        
        try {
            this.findCustomerAddressDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const customerAddress = await this.customersAddressesRepository.find({ id }) 
        .catch( err => { throw new Error(err) } )

        if(customerAddress){
            return customerAddress
        }
    }
}