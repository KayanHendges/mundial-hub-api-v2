import { Store } from "../../entities/Store/Store";

export interface IStoreRepository {
    list(params?: Partial<Store>): Promise<Store[]>,
    findByStoreCode(storeCode: number): Promise<Store>
}