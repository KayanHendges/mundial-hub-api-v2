"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTransporterController = void 0;
class FindTransporterController {
    constructor(findTransporterUseCase) {
        this.findTransporterUseCase = findTransporterUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const transporter = await this.findTransporterUseCase.execute(body);
            return response.status(200).json({ transporter });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.FindTransporterController = FindTransporterController;
