export function notIncludesTheKeys<T>(keys: string[], object: T): void{
    Object.keys(object).map(key=> {
        if(!keys.includes(key)){
            throw new Error(`the ${key} is not expected`)
        }
    })

}