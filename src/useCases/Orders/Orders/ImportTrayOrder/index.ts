import { TrayOrderProvider } from '../../../../providers/Tray/Orders/implementations/TrayOrderProvider';
import { PrismaOrdersRepository } from '../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository';
import { PrismaOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/implementations/PrismaOrdersFinancesRepository';
import { PrismaOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/implementations/PrismaOrdersInvoicesRepository';
import { PrismaOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/implementations/PrismaOrdersMarketPlacesRepository';
import { PrismaOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/implementations/PrismaOrdersNotesRepository';
import { PrismaOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/implementations/PrismaOrdersPaymentsRepository';
import { PrismaOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/implementations/PrismaOrdersProductsSoldRepository';
import { PrismaStoreRepository } from '../../../../repositories/Store/implementations/PrismaStoreRepository';
import { PrismaTransporterRepository } from '../../../../repositories/Transporters/implementations/PrismaTransporterRepository';
import { createCustomerFromTrayUseCase } from '../../../Customers/CreateCustomerFromTray';
import { ImportTrayOrderController } from './ImportTrayOrderController';
import { ImportTrayOrderDataValidate } from './ImportTrayOrderDataValidate';
import { ImportTrayOrderUseCase } from './ImportTrayOrderUseCase';

const importTrayOrderDataValidate = new ImportTrayOrderDataValidate()
const storesRepositoryRepository = new PrismaStoreRepository()
const trayOrdersProvider = new TrayOrderProvider()
const transportersRepository = new PrismaTransporterRepository()
const ordersRepository = new PrismaOrdersRepository()
const ordersPaymentsRepository = new PrismaOrdersPaymentsRepository()
const ordersInvoiceRepository = new PrismaOrdersInvoicesRepository()
const ordersFinancesRepository = new PrismaOrdersFinancesRepository()
const ordersProductsSoldRepository = new PrismaOrdersProductsSoldRepository()
const ordersNotesRepository = new PrismaOrdersNotesRepository()
const ordersMarketPlacesRepository = new PrismaOrdersMarketPlacesRepository()

const importTrayOrderUseCase = new ImportTrayOrderUseCase(
    importTrayOrderDataValidate,
    storesRepositoryRepository,
    trayOrdersProvider,
    createCustomerFromTrayUseCase,
    transportersRepository,
    ordersRepository,
    ordersPaymentsRepository,
    ordersInvoiceRepository,
    ordersFinancesRepository,
    ordersProductsSoldRepository,
    ordersNotesRepository,
    ordersMarketPlacesRepository,
    )
const importTrayOrderController = new ImportTrayOrderController(importTrayOrderUseCase)

export { importTrayOrderController, importTrayOrderUseCase }