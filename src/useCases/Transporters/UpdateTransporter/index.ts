import { PrismaTransporterRepository } from "../../../repositories/Transporters/implementations/PrismaTransporterRepository";
import { UpdateTransporterController } from "./UpdateTransporterController";
import { UpdateTransporterDataValidate } from "./UpdateTransporterDataValidate";
import { UpdateTransporterUseCase } from "./UpdateTransporterUseCase";

const updateTransporterDataValidate = new UpdateTransporterDataValidate
const transporterRepository = new PrismaTransporterRepository

const updateTransporterUseCase = new UpdateTransporterUseCase(updateTransporterDataValidate, transporterRepository)

const updateTransporterController = new UpdateTransporterController(updateTransporterUseCase)

export { updateTransporterController, updateTransporterUseCase }