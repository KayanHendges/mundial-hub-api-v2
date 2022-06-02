import { notIncludesTheKeys } from "../../../services/dataValidate/notIncludesTheKeys"
import { UpdateTransporterRequestDTO } from "./UpdateTransporterRequestDTO"

export class UpdateTransporterDataValidate {

    execute(data: UpdateTransporterRequestDTO){

        if(typeof data == 'undefined'){
            throw new Error('missing transporter data in the body')
        }

        if(typeof data?.id != 'number'){
            throw new Error('missing transporter id in the body')            
        }

        const transporter = data?.transporter

        if(typeof transporter == 'undefined'){
            throw new Error('missing transporter in the body')
        }
        
        const availableFields: string[] = ['externalId', 'name', 'ssw', 'trackingLink']
        notIncludesTheKeys(availableFields, transporter)

        // number

        if(typeof transporter.externalId != 'undefined' && typeof transporter.externalId != 'number'){
            throw new Error('the externalId is not a number')
        }

        // name

        if(typeof transporter.name != 'undefined'){

            if(typeof transporter.name != 'string'){
                throw new Error('the transporter name is not a string')
            }

            if(transporter.name.length == 0){
                throw new Error('the transporter name cant be empty')
            }
        }

        // ssw

        if(typeof transporter.externalId != 'undefined' && typeof transporter.externalId != 'boolean'){
            throw new Error('the ssw is not a boolean')
        }      
    }

}