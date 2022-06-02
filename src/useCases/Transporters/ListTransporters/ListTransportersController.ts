import { Request, Response } from "express";
import { ListTransportersUseCase } from "./ListTransportersUseCase";

export class ListTransportersController {
    constructor(
        private listTransportersUseCase: ListTransportersUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { body } = request

        try {
            const transporters = await this.listTransportersUseCase.execute(body)
            response.status(200).json(transporters)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
    }
}