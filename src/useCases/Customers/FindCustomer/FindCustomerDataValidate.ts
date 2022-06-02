import { FindCustomerRequestDTO } from './FindCustomerRequestDTO'

export class FindCustomerDataValidate {
    
    execute(data: FindCustomerRequestDTO){

        let atLeastOneParameter = false 
        
        Object.keys(data).map(key => {
            if(['id', 'email' , 'name', 'cpf', 'cnpj'].includes(key)){
                atLeastOneParameter = true
            }
        })

        if(!atLeastOneParameter){
            throw new Error('missing customer parameter')
        }

        return
    }
}