import { ICustomersAddressesRepository } from '../../../../repositories/Customers/CustomersAddresses/ICustomersAddressesRepository'
import { CreateCustomerAddressDataValidate } from './CreateCustomerAddressDataValidate'
import { CreateCustomerAddressRequestDTO } from './CreateCustomerAddressRequestDTO'

export class CreateCustomerAddressUseCase {
    constructor(
        private createCustomerAddressDataValidate: CreateCustomerAddressDataValidate,
        private  customerAddressRepository: ICustomersAddressesRepository
    ){}
    
    async execute(data: CreateCustomerAddressRequestDTO): Promise<{customerAddress: number}>{
        
        try {
            this.createCustomerAddressDataValidate.execute(data)            
        } catch (err) {
            throw new Error(err)
        }
        
        const { address } = data
        
        const customerAddressCreated = await this.customerAddressRepository.save(address)
        .catch( err => { throw new Error(err) } )

        if(customerAddressCreated){
            return { customerAddress: customerAddressCreated.id }
        }

    }
}