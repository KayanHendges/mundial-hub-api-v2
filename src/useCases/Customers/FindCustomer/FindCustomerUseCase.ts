import { Customer } from '../../../entities/Customer/Customer'
import { ICustomersRepository } from '../../../repositories/Customers/Customers/ICustomersRepository'
import { FindCustomerDataValidate } from './FindCustomerDataValidate'
import { FindCustomerRequestDTO } from './FindCustomerRequestDTO'

export class FindCustomerUseCase {
    constructor(
        private findCustomerDataValidate: FindCustomerDataValidate,
        private  customersRepository: ICustomersRepository
    ){}
    
    async execute(data: FindCustomerRequestDTO): Promise<Customer>{
        
        try {
            this.findCustomerDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const customer = await this.customersRepository.find(data)
        .catch( err => { throw new Error(err) } )

        if(customer){
            return customer
        }
    }
}