export class Transporter {

    id: number
    externalId: number
    name: string
    ssw: boolean
    trackingLink: string
    modified: Date | null
    created: Date | null

    constructor(props: Transporter){
        Object.assign(this, props)
    }
}