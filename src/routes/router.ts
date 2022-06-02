import { Router } from "express"; 
import { CustomerRouter } from "./Customers/CustomerRouter";

import { OrderRouter } from "./Orders/OrderRouter";
import { OrderPaymentRouter } from "./Orders/OrderPaymentRouter";
import { OrderInvoiceRouter } from "./Orders/OrderInvoiceRouter";
import { OrderFinanceRouter } from "./Orders/OrderFinanceRouter";
import { OrderNoteRouter } from "./Orders/OrderNoteRouter";
import { OrderProductSoldRouter } from "./Orders/OrderProductSoldRouter";
import { OrderMarketPlaceRouter } from "./Orders/OrderMarketPlaceRouter ";

import { StoreRouter } from "./Stores/StoreRouter";
import { TransporterRouter } from "./Transporters/TransporterRouter";
import { TrayOrderRouter } from "./Tray/TrayOrderRouter";

const router = Router()

    router.use(StoreRouter)

    router.use(OrderRouter)
    router.use(OrderPaymentRouter)
    router.use(OrderInvoiceRouter)
    router.use(OrderFinanceRouter)
    router.use(OrderNoteRouter)
    router.use(OrderProductSoldRouter)
    router.use(OrderMarketPlaceRouter)


    router.use(TransporterRouter)
    
    router.use(CustomerRouter)

    router.use(TrayOrderRouter)

export { router }