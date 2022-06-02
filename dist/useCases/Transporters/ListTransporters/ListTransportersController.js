"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTransportersController = void 0;
class ListTransportersController {
    constructor(listTransportersUseCase) {
        this.listTransportersUseCase = listTransportersUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const transporters = await this.listTransportersUseCase.execute(body);
            response.status(200).json(transporters);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListTransportersController = ListTransportersController;
