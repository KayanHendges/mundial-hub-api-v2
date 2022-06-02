import { PrismaStoreRepository } from '../../../repositories/Store/implementations/PrismaStoreRepository';
import { ListStoresController } from './ListStoresController';
import { ListStoresDataValidate } from './ListStoresDataValidate';
import { ListStoresUseCase } from './ListStoresUseCase';

const listStoresDataValidate = new ListStoresDataValidate()
const storeRepository = new PrismaStoreRepository()

const listStoresUseCase = new ListStoresUseCase(listStoresDataValidate, storeRepository)
const listStoresController = new ListStoresController(listStoresUseCase)

export { listStoresController, listStoresUseCase }