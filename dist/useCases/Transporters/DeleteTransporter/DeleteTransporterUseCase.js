"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransporterUseCase = void 0;
class DeleteTransporterUseCase {
    constructor(deleteTransporterDataValidate, transporterRepository) {
        this.deleteTransporterDataValidate = deleteTransporterDataValidate;
        this.transporterRepository = transporterRepository;
    }
    async execute(data) {
        try {
            await this.deleteTransporterDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const deleted = await this.transporterRepository.delete(data.id)
            .then(() => { return true; })
            .catch(err => { throw new Error(err); });
        if (deleted) {
            return;
        }
    }
}
exports.DeleteTransporterUseCase = DeleteTransporterUseCase;
