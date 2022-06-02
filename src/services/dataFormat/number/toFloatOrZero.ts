export default function toFloatOrZero(value: string | null | undefined ): number | null{

    if(!value){
        return 0
    }

    if(typeof value == 'number'){
        return value
    }

    if(value.length == 0){
        return 0
    }

    try {
        const number = parseFloat(value.replace(',', '.'))

        if(isNaN(number)){
            return 0
        }
            
        return number
    } catch (error) {
        new Error(error)
        return 0
    }
}