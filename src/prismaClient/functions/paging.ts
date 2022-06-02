import { PagingParam } from "../../types/Params/Paging/PagingParam";

interface PrismaPaging {
    skip?: number,
    take?: number,
}

export default function pagingToPrisma(paging: PagingParam): PrismaPaging{

    if(!paging){
        return undefined
    }

    const page = paging?.page
    const limit = paging?.limit

    if(!limit){
        return undefined
    }

    if(!page){

        return {
            take: limit,
            skip: 0
        }
    }

    const skip = (page - 1 ) * limit
    const take = limit

    return {
        skip,
        take,
    }
}