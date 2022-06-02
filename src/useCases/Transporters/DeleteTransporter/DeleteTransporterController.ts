import { Request, Response } from "express";
import toIntOrNull from "../../../services/dataFormat/number/toIntOrNull";
import { DeleteTransporterUseCase } from "./DeleteTransporterUseCase";

export class DeleteTransporterController {
    constructor(
        private deleteTransporterUseCase: DeleteTransporterUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params

        try {
            await this.deleteTransporterUseCase.execute({id: toIntOrNull(id)})
            response.status(200).json({
                message: `transporter ${id} deleted with success`
            })            
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }

    }
}