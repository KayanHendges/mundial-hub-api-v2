import { Request, response, Response } from "express";
import { GetStoreUseCase } from "./GetStoreUseCase";

export class GetStoreController {
    constructor(
        private getStoreUseCase: GetStoreUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response>{

        const { code } = request.query

        try {
            const store = await this.getStoreUseCase.execute(request.query)

            return response.status(200).json({ store })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
    }
}