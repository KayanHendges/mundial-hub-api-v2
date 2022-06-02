import { ITransporterRepository } from "../../../repositories/Transporters/ITransporterRepository";
import { DeleteTransporterDateValidate } from "./DeleteTransporterDataValidate";
import { DeleteTransporterRequestDTO } from "./DeleteTransporterRequestDTO";

export class DeleteTransporterUseCase {
    constructor(
        private deleteTransporterDataValidate: DeleteTransporterDateValidate,
        private transporterRepository: ITransporterRepository
    ){}

    async execute(data: DeleteTransporterRequestDTO){

        try {
            await this.deleteTransporterDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }

        const deleted = await this.transporterRepository.delete(data.id)
        .then(() => { return true })
        .catch( err => { throw new Error(err) })


        if(deleted){
            return
        }
    }
}