import { ITransporterRepository } from "../../../repositories/Transporters/ITransporterRepository";
import { FindTransporterDataValidate } from "./FindTransporterDataValidate";
import { FindTransporterRequestDTO } from "./FindTransporterRequestDTO";

export class FindTransporterUseCase {
    constructor(
        private findTransporterDataValidate: FindTransporterDataValidate,
        private transporterRepository: ITransporterRepository
    ){}

    async execute(data: FindTransporterRequestDTO){

        try {
            this.findTransporterDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }

        const transporter = await this.transporterRepository.find(data)
        .catch(err => { throw new Error(err) })

        if(!transporter){
            throw new Error('no transporter found with this parameters')
        }

        return transporter
    }
}