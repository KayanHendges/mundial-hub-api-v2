export class Store {

    id: number
    trayId: number
    active: boolean
    name: string
    link: string
    apiAddress: string
    oAuth2Code: string
    accessToken: string | null
    refreshToken: string | null
    expirationAccessToken: Date | null
    expirationRefreshToken: Date | null
    tokenActivated: Date | null
    modified: Date | null

    constructor(props: Store){
        Object.assign(this, props)
    }
}