"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransporterController = void 0;
class CreateTransporterController {
    constructor(createTransporterUseCase) {
        this.createTransporterUseCase = createTransporterUseCase;
    }
    async handle(request, response) {
        const { transporter } = request.body;
        try {
            const createTransporter = await this.createTransporterUseCase.execute(transporter);
            response.status(201).json({
                transporter_id: createTransporter.transporterId
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.CreateTransporterController = CreateTransporterController;
