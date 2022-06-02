import { ITransporterRepository } from "../../../repositories/Transporters/ITransporterRepository";
import { CreateTransporterDataValidate } from "./CreateTransporterDataValidate";
import { CreateTransporterRequestDTO } from "./CreateTransporterRequestDTO";

export class CreateTransporterUseCase {
    
    constructor(
        private transporterRepository: ITransporterRepository,
        private createTransporterDataValidate: CreateTransporterDataValidate
    ){}

    async execute(data: CreateTransporterRequestDTO): Promise<{transporterId: number}>{
        
        try {
            this.createTransporterDataValidate.execute(data)
        } catch (err) {
            console.log(err)
            throw new Error(err)
        }

        const { transporters: transporterAlreadyExists } = await this.transporterRepository.list({
            fields: { externalId: data.externalId }
        })

        if(transporterAlreadyExists.length  > 0){
            throw new Error('Transporter already exists')
        }

        const createdTransporter = await this.transporterRepository.save(data)

        if(!createdTransporter){
            throw new Error('error saving new transporter in database')
        }

        return {transporterId: createdTransporter.id}
    }
}