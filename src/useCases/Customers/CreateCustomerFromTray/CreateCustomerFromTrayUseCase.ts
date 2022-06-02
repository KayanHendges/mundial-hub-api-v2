import { CreateCustomerAddressUseCase } from "../Addressess/CreateCustomerAddress/CreateCustomerAddressUseCase"
import { ListCustomersAddressesUseCase } from "../Addressess/ListCustomersAddressess/ListCustomersAddressesUseCase"
import { CreateCustomerUseCase } from "../CreateCustomer/CreateCustomerUseCase"
import { ListCustomersUseCase } from "../ListCustomers/ListCustomersUseCase"
import { UpdateCustomerUseCase } from "../UpdateCustomer/UpdateCustomerUseCase"
import { CreateCustomerFromTrayRequestDTO } from "./CreateCustomerFromTrayRequestDTO"

export class CreateCustomerFromTrayUseCase {
    constructor(
        private createCustomerUseCase: CreateCustomerUseCase,
        private listCustomerUseCase: ListCustomersUseCase,
        private updateCustomerUseCase: UpdateCustomerUseCase,
        private createCustomerAddressUseCase: CreateCustomerAddressUseCase,
        private listCustomerAddressUseCase: ListCustomersAddressesUseCase
    ){}
    
    async execute(data: CreateCustomerFromTrayRequestDTO): Promise<{ customerId: number, billingAddressId, shippingAddressId }>{
        
        try {
            
        } catch (err) {
            throw new Error(err)
        }
        
        const { customer } = data

        const { name, cpf, cnpj, email, phone, cellphone, addresses, created, modified } = customer
        const customerDataBase = {
            name,
            cpf,
            cnpj,
            email,
            cellphone,
            phone,
        }

        const customerId = await this.createCustomerUseCase.execute({ 
            customer: customerDataBase
         })
        .catch(async(err) => {
            if(err.message == 'customer already exists'){

                const { email } = customer

                const list = await this.listCustomerUseCase.execute({ customers: { email }, paging: {} })
                .catch(err => console.log(err))

                console.log(list)

                if(!list){
                    throw new Error( 'customer already exists but error updating customer' )
                }

                if(list.customers.length > 0 ){
                    const id = list.customers[0].id

                    const { id: updatedId } = await this.updateCustomerUseCase.execute({ id, customer: customerDataBase})

                    return updatedId

                } else {
                    throw new Error( 'customer already exists but error updating customer' )
                }

            } else {
                throw new Error(err)
            }
        })

        var billingAddressId = null
        var shippingAddressId = null

        const createAddressess = addresses?.map(async(address) => {

            const { customersAddresses: alreadyExistAddress } = await this.listCustomerAddressUseCase.execute({ addresses: {
                type: address.type,
                name: address.name,
                zipCode: address.zipCode,
                number: address.number,
            } })

            if(alreadyExistAddress.length > 0){

                const { id, type } = alreadyExistAddress[0]

                if(type.toLowerCase() == 'cobrança'){
                    billingAddressId = id
                }

                if(type.toLowerCase() == 'entrega'){
                    shippingAddressId = id
                }
                
            } else {

                const { customerAddress: id } = await this.createCustomerAddressUseCase.execute({ address: {...address, customerId} })
                .catch( err => { 
                    console.log(err)
                    throw new Error(err)
                })

                if(address.type.toLowerCase() == 'cobrança'){
                    billingAddressId = id
                }

                if(address.type.toLowerCase() == 'entrega'){
                    shippingAddressId = id
                }
                
            }

        })

        await Promise.all(createAddressess)
        .catch( err => { throw new Error(err) } )

        if(billingAddressId == null && shippingAddressId == null){
            throw new Error('error trying to save or update the customer addresses')
        }

        if(customerId){

            return { customerId, billingAddressId, shippingAddressId }
        }
    }
}