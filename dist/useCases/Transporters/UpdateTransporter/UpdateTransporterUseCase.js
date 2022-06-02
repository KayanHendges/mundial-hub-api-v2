"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransporterUseCase = void 0;
class UpdateTransporterUseCase {
    constructor(updateTransporterDataValidate, transporterRepository) {
        this.updateTransporterDataValidate = updateTransporterDataValidate;
        this.transporterRepository = transporterRepository;
    }
    async execute(data) {
        try {
            this.updateTransporterDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const updated = await this.transporterRepository.update(data.transporter, data.id)
            .then(() => { return true; })
            .catch(err => { throw new Error(err); });
        if (updated) {
            return;
        }
    }
}
exports.UpdateTransporterUseCase = UpdateTransporterUseCase;
