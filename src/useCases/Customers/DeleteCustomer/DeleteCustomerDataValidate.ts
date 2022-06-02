import { DeleteCustomerRequestDTO } from "./DeleteCustomerRequestDTO";

export class DeleteCustomerDataValidate {

    execute(data: DeleteCustomerRequestDTO){

        if(typeof data == undefined){
            throw new Error('missing customer id')
        }

        if(isNaN(data.id)){
            throw new Error('the customer id is not a number')
        }

        if(typeof data.id != 'number'){
            throw new Error('the customer id is not a number')
        }

        return
    }
}