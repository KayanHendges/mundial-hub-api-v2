import { Transporter } from "../../../entities/Transporter/Transporter";
import { ITransporterRepository } from "../../../repositories/Transporters/ITransporterRepository";
import { ListTransportersDataValidate } from "./ListTransportersDataValidator";
import { ListTransportersRequestDTO } from "./ListTransportersRequestDTO";

export class ListTransportersUseCase {

    constructor(
        private listTransportersDataValidator: ListTransportersDataValidate,
        private transporterRepository: ITransporterRepository
    ){}

    async execute(data: ListTransportersRequestDTO): Promise<{transporters: Transporter[]}>{

        try {
            this.listTransportersDataValidator.execute(data)
        } catch (err) {
            throw new Error(err)
        }

        const transporters = await this.transporterRepository.list(data)
        .catch(err => { throw new Error(err) })

        if(transporters){
            return transporters
        }

    }

}