import { Request, Response } from "express";
import { FindTransporterUseCase } from "./FindTransporterUseCase";

export class FindTransporterController {
    constructor(
        private findTransporterUseCase: FindTransporterUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { body } = request

        try {
            const transporter = await this.findTransporterUseCase.execute(body)
            return response.status(200).json({ transporter })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
    }
}