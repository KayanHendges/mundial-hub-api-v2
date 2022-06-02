import { createCustomerAddressUseCase } from "../Addressess/CreateCustomerAddress";
import { listCustomersAddressesUseCase } from "../Addressess/ListCustomersAddressess";
import { createCustomerUseCase } from "../CreateCustomer";
import { listCustomersUseCase } from "../ListCustomers";
import { updateCustomerUseCase } from "../UpdateCustomer";

import { CreateCustomerFromTrayUseCase } from "./CreateCustomerFromTrayUseCase";

const createCustomerFromTrayUseCase = new CreateCustomerFromTrayUseCase(
    createCustomerUseCase,
    listCustomersUseCase,
    updateCustomerUseCase,
    createCustomerAddressUseCase,
    listCustomersAddressesUseCase
)

export { createCustomerFromTrayUseCase }