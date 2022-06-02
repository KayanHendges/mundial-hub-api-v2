import { CustomerAddress } from '../../../../entities/Customer/CustomerAddress'
import { ICustomersAddressesRepository } from '../../../../repositories/Customers/CustomersAddresses/ICustomersAddressesRepository'
import { ListCustomersAddressesDataValidate } from './ListCustomersAddressesDataValidate'
import { ListCustomersAddressesRequestDTO } from './ListCustomersAddressesRequestDTO'

export class ListCustomersAddressesUseCase {
    constructor(
        private listCustomersAddressesDataValidate: ListCustomersAddressesDataValidate,
        private  customersAddressesRepository: ICustomersAddressesRepository
    ){}
    
    async execute(data: ListCustomersAddressesRequestDTO): Promise<{customersAddresses: CustomerAddress[]}>{
        
        try {
            this.listCustomersAddressesDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { sort, paging, addresses: customersAddresses } = data

        const addressesList = await this.customersAddressesRepository.list({ customersAddresses, sort, paging })
        .catch( err => { throw new Error(err) } )

        if(addressesList){
            return addressesList
        }
    }
}