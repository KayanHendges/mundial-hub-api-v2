import { PrismaTransporterRepository } from "../../../repositories/Transporters/implementations/PrismaTransporterRepository";
import { FindTransporterController } from "./FindTransporterController";
import { FindTransporterDataValidate } from "./FindTransporterDataValidate";
import { FindTransporterUseCase } from "./FindTransporterUseCase";

const findTransporterDataValidate = new FindTransporterDataValidate
const transporterRepository = new PrismaTransporterRepository

const findTransporterUseCase = new FindTransporterUseCase(findTransporterDataValidate, transporterRepository)

const findTransporterController = new FindTransporterController(findTransporterUseCase)

export { findTransporterController, findTransporterUseCase }