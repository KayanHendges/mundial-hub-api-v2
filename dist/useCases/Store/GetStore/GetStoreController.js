"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStoreController = void 0;
class GetStoreController {
    constructor(getStoreUseCase) {
        this.getStoreUseCase = getStoreUseCase;
    }
    async handle(request, response) {
        const { code } = request.query;
        try {
            const store = await this.getStoreUseCase.execute(request.query);
            return response.status(200).json({ store });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.GetStoreController = GetStoreController;
