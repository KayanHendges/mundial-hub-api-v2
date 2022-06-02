import { FindTransporterRequestDTO } from "./FindTransporterRequestDTO";

export class FindTransporterDataValidate {

    execute(data: FindTransporterRequestDTO){

        if(typeof data == 'undefined'){
            throw new Error('missing transporter data in the body')
        }

        // id

        if(typeof data.id == 'undefined' && typeof data.externalId == 'undefined'){
            throw new Error('require at least one of id or external id of transporter')
        }

        if(typeof data.id != 'undefined'){

            if(typeof data.id != 'number'){
                throw new Error('the transporter id needs to be a number')
            }

        }

        if(typeof data.externalId != 'undefined'){

            if(typeof data.externalId != 'number'){
                throw new Error('the transporter externalId needs to be a number')
            }

        }

        return
    }
}