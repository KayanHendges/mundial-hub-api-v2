import { Store } from '../../../entities/Store/Store'
import { IStoreRepository } from '../../../repositories/Store/IStoreRepository'
import { ListStoresDataValidate } from './ListStoresDataValidate'
import { ListStoresRequestDTO } from './ListStoresRequestDTO'

export class ListStoresUseCase {
    constructor(
        private listStoresDataValidate: ListStoresDataValidate,
        private storeRepository: IStoreRepository
    ){}
    
    async execute(data: ListStoresRequestDTO): Promise<{ stores: Store[] }>{
        
        try {
            await this.listStoresDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { stores: fields, paging, sort } = data
        
        const list = await this.storeRepository.list(fields)
        .catch( err => { throw new Error(err) } )

        if(list){
            return { stores: list }
        }
    }
}