import { Customer } from "../../../entities/Customer/Customer"
import { ListCustomersRequestDTO } from "./ListCustomersRequestDTO"
import { ICustomersRepository } from "../../../repositories/Customers/Customers/ICustomersRepository"
import { ListCustomersDataValidate } from "./ListCustomersDataValidate"

export class ListCustomersUseCase {
    constructor(
        private listCustomersDateValidate: ListCustomersDataValidate,
        private  customersRepository: ICustomersRepository
    ){}
    
    async execute(data: ListCustomersRequestDTO): Promise<{customers: Customer[]}>{
        
        try {
            this.listCustomersDateValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const customersList = await this.customersRepository.list(data)
        .catch( err => { throw new Error(err) } )

        if(customersList){
            return customersList
        }
    }
}