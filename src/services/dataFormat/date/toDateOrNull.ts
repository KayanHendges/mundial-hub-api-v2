import { addHours, parseISO } from "date-fns"

export default function toDateOrNull(value: Date | string | null | undefined): Date | null {

    if(!value){
        return null
    }

    if(typeof value == 'object'){
        return value
    }

    if(value.length == 0){
        return null
    }

    try {
        const date = parseISO(value)

        return date
    } catch (err) {
        console.log(err)
        new Error(err)
        return null
    }
}