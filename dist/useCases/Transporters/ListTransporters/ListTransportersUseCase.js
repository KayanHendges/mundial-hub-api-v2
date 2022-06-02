"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTransportersUseCase = void 0;
class ListTransportersUseCase {
    constructor(listTransportersDataValidator, transporterRepository) {
        this.listTransportersDataValidator = listTransportersDataValidator;
        this.transporterRepository = transporterRepository;
    }
    async execute(data) {
        try {
            this.listTransportersDataValidator.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const transporters = await this.transporterRepository.list(data)
            .catch(err => { throw new Error(err); });
        if (transporters) {
            return transporters;
        }
    }
}
exports.ListTransportersUseCase = ListTransportersUseCase;
