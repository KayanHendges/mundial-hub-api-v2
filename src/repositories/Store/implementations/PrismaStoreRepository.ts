import { prismaClient } from "../../../dataBase/prismaClient";
import { Store } from "../../../entities/Store/Store";
import { IStoreRepository } from "../IStoreRepository";


export class PrismaStoreRepository implements IStoreRepository {
    
    async list(params?: Partial<Store>): Promise<Store[]> {

        const stores = await prismaClient.store.findMany({
            where: params
        })

        return stores
    }

    async findByStoreCode(storeCode: number): Promise<Store>{

        const store = await prismaClient.store.findFirst({
            where: { trayId: storeCode }
        })

        if(store){
            return store
        }
    }
    
}