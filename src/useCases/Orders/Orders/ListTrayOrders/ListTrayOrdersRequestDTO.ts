export interface ListTrayOrdersRequestDTO {
    storeCode: number,
    includeImported: boolean,
    page: number,
    limit: number
}