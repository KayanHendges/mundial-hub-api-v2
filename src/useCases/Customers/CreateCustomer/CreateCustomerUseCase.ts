import { ICustomersRepository } from "../../../repositories/Customers/Customers/ICustomersRepository";
import { CreateCustomerDataValidate } from "./CreateCustomerDataValidate";
import { CreateCustomerRequestDTO } from "./CreateCustomerRequestDTO";

export class CreateCustomerUseCase {
    constructor(
        private createCustomerDataValidate: CreateCustomerDataValidate,
        private customerRepository: ICustomersRepository,
    ){}

    async execute(data: CreateCustomerRequestDTO): Promise<number>{

        try {
            this.createCustomerDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }

        const { customer } = data
        const { email } = customer

        const customerAlreayExist = await this.customerRepository.find({ email })

        if(customerAlreayExist){
            throw new Error('customer already exists')
        }
        
        const { id } = await this.customerRepository.save(customer)
        .catch(err => { throw new Error(err) })

        if(id){
            return id
        }
        
    }
}