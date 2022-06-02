import { PrismaTransporterRepository } from "../../../repositories/Transporters/implementations/PrismaTransporterRepository";
import { DeleteTransporterController } from "./DeleteTransporterController";
import { DeleteTransporterDateValidate } from "./DeleteTransporterDataValidate";
import { DeleteTransporterUseCase } from "./DeleteTransporterUseCase";

const deleteTransporterDataValidate = new DeleteTransporterDateValidate
const transporterRepository = new PrismaTransporterRepository

const deleteTransporterUseCase = new DeleteTransporterUseCase(deleteTransporterDataValidate, transporterRepository)

const deleteTransporterController = new DeleteTransporterController(deleteTransporterUseCase)

export { deleteTransporterController, deleteTransporterUseCase }

