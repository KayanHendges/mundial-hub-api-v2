export default function toBoolean(value: string | number | null | undefined): boolean | null {

    if(!value){
        return null
    }

    if(value == '1' || value == 1){
        return true
    }

    if(value == '0' || value == 0){
        return false
    }

    return null
}