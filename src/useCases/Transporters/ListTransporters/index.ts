import { PrismaTransporterRepository } from "../../../repositories/Transporters/implementations/PrismaTransporterRepository";
import { ListTransportersController } from "./ListTransportersController";
import { ListTransportersDataValidate } from "./ListTransportersDataValidator";
import { ListTransportersUseCase } from "./ListTransportersUseCase";

const listTransportersDataValidate = new ListTransportersDataValidate
const transporterRepository = new PrismaTransporterRepository

const listTransportersUseCase = new ListTransportersUseCase(listTransportersDataValidate, transporterRepository)

const listTransportersController = new ListTransportersController(listTransportersUseCase)

export { listTransportersController, listTransportersUseCase }