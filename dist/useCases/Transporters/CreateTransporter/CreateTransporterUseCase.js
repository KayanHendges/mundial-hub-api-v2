"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransporterUseCase = void 0;
class CreateTransporterUseCase {
    constructor(transporterRepository, createTransporterDataValidate) {
        this.transporterRepository = transporterRepository;
        this.createTransporterDataValidate = createTransporterDataValidate;
    }
    async execute(data) {
        try {
            this.createTransporterDataValidate.execute(data);
        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
        const { transporters: transporterAlreadyExists } = await this.transporterRepository.list({
            fields: { externalId: data.externalId }
        });
        if (transporterAlreadyExists.length > 0) {
            throw new Error('Transporter already exists');
        }
        const createdTransporter = await this.transporterRepository.save(data);
        if (!createdTransporter) {
            throw new Error('error saving new transporter in database');
        }
        return { transporterId: createdTransporter.id };
    }
}
exports.CreateTransporterUseCase = CreateTransporterUseCase;
