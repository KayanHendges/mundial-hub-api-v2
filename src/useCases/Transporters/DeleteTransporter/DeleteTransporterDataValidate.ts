import { DeleteTransporterRequestDTO } from "./DeleteTransporterRequestDTO";

export class DeleteTransporterDateValidate {

    execute(data: DeleteTransporterRequestDTO){

        if(typeof data == undefined){
            throw new Error('missing transporter id')
        }

        if(isNaN(data.id)){
            throw new Error('the transporter id is not a number')
        }

        if(typeof data.id != 'number'){
            throw new Error('the transporter id is not a number')
        }

        return
    }
}