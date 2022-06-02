import { Request, Response } from "express";
import { CreateTransporterUseCase } from "./CreateTransporterUseCase";

export class CreateTransporterController {
    constructor(
        private createTransporterUseCase: CreateTransporterUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { transporter } = request.body

        try {
            const createTransporter = await this.createTransporterUseCase.execute(transporter)

            response.status(201).json({
                transporter_id: createTransporter.transporterId
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
    }
}