export default function toStringOrEmptyString(value: string | number | null | undefined): string {

    if(!value){
        return ''
    }

    if(typeof value == 'number'){
        return value.toString()
    }

    if(typeof value == 'object'){
        return JSON.stringify(value)
    }

    if(value.length == 0){
        return ''
    }

    return value.toString()
}