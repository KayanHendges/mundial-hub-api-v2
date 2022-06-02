import { ImportTrayOrderRequestDTO } from './ImportTrayOrderRequestDTO'

export class ImportTrayOrderDataValidate {
    
    execute(data: ImportTrayOrderRequestDTO){
        
        const id = data?.id
        const storeCode = data?.storeCode

        // id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }

        // storeCode

        if(typeof storeCode != 'number'){
            throw new Error('missing storeCode in the body')
        }

        return
        
    }
}