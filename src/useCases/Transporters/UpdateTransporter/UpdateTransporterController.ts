import { Request, Response } from "express";
import { UpdateTransporterUseCase } from "./UpdateTransporterUseCase";

export class UpdateTransporterController {
    constructor(
        private updateTransporterUseCase: UpdateTransporterUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { body } = request

        try {
            await this.updateTransporterUseCase.execute(body)
            response.status(200).json({
                message: 'transporter updated with success'
            })            
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
    }
}