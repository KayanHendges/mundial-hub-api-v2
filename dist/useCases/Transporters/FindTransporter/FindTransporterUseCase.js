"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTransporterUseCase = void 0;
class FindTransporterUseCase {
    constructor(findTransporterDataValidate, transporterRepository) {
        this.findTransporterDataValidate = findTransporterDataValidate;
        this.transporterRepository = transporterRepository;
    }
    async execute(data) {
        try {
            this.findTransporterDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const transporter = await this.transporterRepository.find(data)
            .catch(err => { throw new Error(err); });
        if (!transporter) {
            throw new Error('no transporter found with this parameters');
        }
        return transporter;
    }
}
exports.FindTransporterUseCase = FindTransporterUseCase;
