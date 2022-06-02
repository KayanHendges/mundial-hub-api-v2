"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransporterController = void 0;
class UpdateTransporterController {
    constructor(updateTransporterUseCase) {
        this.updateTransporterUseCase = updateTransporterUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            await this.updateTransporterUseCase.execute(body);
            response.status(200).json({
                message: 'transporter updated with success'
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.UpdateTransporterController = UpdateTransporterController;
