import { Customer } from "../../../entities/Customer/Customer";
import { ICustomersRepository } from "../../../repositories/Customers/Customers/ICustomersRepository";
import { UpdateCustomerDataValidate } from "./UpdateCustomerDataValidate";
import { UpdateCustomerRequestDTO } from "./UpdateCustomerRequestDTO";

export class UpdateCustomerUseCase {
    constructor(
        private updateCustomerDataValidate: UpdateCustomerDataValidate,
        private customerRepository: ICustomersRepository,
    ){}

    async execute(data: UpdateCustomerRequestDTO): Promise<Omit<Customer, 'addresses'>>{

        try {
            this.updateCustomerDataValidate.execute(data)
        } catch (err) {
            console.log(err)
            throw new Error(err)
        }

        const { id } = data
        const { customer } = data

        const updatedCustomer = await this.customerRepository.update(customer, id)
        .catch( err => { throw new Error(err) } )

        if(updatedCustomer){
            return updatedCustomer
        }
    }
}