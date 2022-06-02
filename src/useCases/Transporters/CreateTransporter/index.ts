import { PrismaTransporterRepository } from "../../../repositories/Transporters/implementations/PrismaTransporterRepository";
import { CreateTransporterController } from "./CreateTransporterController";
import { CreateTransporterDataValidate } from "./CreateTransporterDataValidate";
import { CreateTransporterUseCase } from "./CreateTransporterUseCase";

const createTransporterDataValidate = new CreateTransporterDataValidate
const transporterRepository = new PrismaTransporterRepository

const createTransporterUseCase = new CreateTransporterUseCase(transporterRepository, createTransporterDataValidate)

const createTransporterController = new CreateTransporterController(createTransporterUseCase)

export { createTransporterUseCase, createTransporterController }