export type SortParam<T> = {
    [P in keyof T]?: 'asc' | 'desc'
}