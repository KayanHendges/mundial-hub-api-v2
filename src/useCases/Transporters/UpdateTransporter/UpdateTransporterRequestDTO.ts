export interface UpdateTransporterRequestDTO {
    id: number,
    transporter: {
        externalId?: number
        name?: string
        ssw?: boolean
        trackingLink?: string
    }
}