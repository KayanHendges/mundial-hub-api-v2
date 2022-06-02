import { ITransporterRepository } from "../../../repositories/Transporters/ITransporterRepository";
import { UpdateTransporterDataValidate } from "./UpdateTransporterDataValidate";
import { UpdateTransporterRequestDTO } from "./UpdateTransporterRequestDTO";

export class UpdateTransporterUseCase {
    constructor(
        private updateTransporterDataValidate: UpdateTransporterDataValidate,
        private transporterRepository: ITransporterRepository
    ){}

    async execute(data: UpdateTransporterRequestDTO){

        try {
            this.updateTransporterDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }

        const updated = await this.transporterRepository.update(data.transporter, data.id)
        .then(() => { return true })
        .catch(err => { throw new Error(err) })

        if(updated){
            return
        }
    }
}