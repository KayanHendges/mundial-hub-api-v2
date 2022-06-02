import { PrismaStoreRepository } from "../../../repositories/Store/implementations/PrismaStoreRepository";
import { GetStoreController } from "./GetStoreController";
import { GetStoreUseCase } from "./GetStoreUseCase";

const prismaStore = new PrismaStoreRepository

const getStoreUseCase = new GetStoreUseCase(prismaStore)

const getStoreController = new GetStoreController(getStoreUseCase)

export { getStoreUseCase, getStoreController }