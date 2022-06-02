import { Store } from "../../../entities/Store/Store";
import { IStoreRepository } from "../../../repositories/Store/IStoreRepository";
import { GetStoreRequestDTO } from "./GetStoreRequestDTO";

export class GetStoreUseCase {
    constructor(
        private storeRepository: IStoreRepository
    ){}

    async execute(data: GetStoreRequestDTO): Promise<Store>{

        if(!data.code || typeof data.code != 'string'){
            throw new Error('store code missing')
        }
        
        const store = await this.storeRepository.findByStoreCode(parseInt(data.code))

        if(!store){
            throw new Error('No results found with these parameters')
        }

        return store
    }
}