export default function toFloatOrNull(value: string | number | null | undefined ): number | null {

    if(!value){
        return null
    }

    if(typeof value == 'number'){
        return value
    }

    if(value.length == 0){
        return null
    }

    try {
        const number = parseFloat(value.replace(',', '.'))
        
        if(isNaN(number)){
            return null
        }
            
        return number
    } catch (error) {
        console.log(error)
        new Error(error)
        return null
    }
}