export default function toStringOrNull(value: string | number | null | undefined): string | null {

    if(!value){
        return null
    }

    if(typeof value == 'number'){
        return value.toString()
    }

    if(typeof value == 'object'){
        return JSON.stringify(value)
    }

    if(value.length == 0){
        return null
    }

    return value.toString()
}