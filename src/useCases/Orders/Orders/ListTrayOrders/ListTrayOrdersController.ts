import { Request, Response } from "express";
import toIntOrNull from "../../../../services/dataFormat/number/toIntOrNull";
import { ListTrayOrdersUseCase } from "./ListTrayOrdersUseCase";

export class ListTrayOrdersController {
    constructor(
        private listTrayOrdersUseCase: ListTrayOrdersUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{

        const { store_code, page, limit, include_imported } = request.query

        const includeImported = include_imported == 'true' ? true 
        : include_imported == 'false' ? false : null

        try {
            const orders = await this.listTrayOrdersUseCase.execute({ 
                storeCode: toIntOrNull(store_code as string),
                includeImported,
                page: toIntOrNull(page as string),
                limit: toIntOrNull(limit as string),
            })

            return response.status(200).json( orders )
        } catch (err){
            console.log(err)
            return response.status(400).json({
                message: err.message || 'unexpected error'
            })
        }

    }
}