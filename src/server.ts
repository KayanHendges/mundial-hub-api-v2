import { format } from "date-fns"
import { app } from "./app"
import { prismaClient } from "./dataBase/prismaClient"
import cron from "node-cron" 
import { fetchTrayOrdersUseCase } from "./useCases/Orders/Orders/FetchTrayOrders"

const port = 3003
const startDate = format(new Date(), 'dd/MM/yyyy hh:mm:ss')

main()

async function main(){

    try {
        await prismaClient.$connect()
        .then(() => console.log('Prisma conectado'))

        await startAppListen()
        .then(() => {
            console.log(`${startDate} - servidor iniciando na porta ${port}`)
        })

        // console.log('iniciando rotinas')
        // cron.schedule('* * * * *', () => {
        //     console.log('fecthing tray orders')
        //     fetchTrayOrdersUseCase.execute()
        // })
    }
    catch (err) {
        throw new Error(err)
    }

    async function startAppListen(): Promise<void>{
        return new Promise(async(resolve, reject) => {
            app.listen(port, () => {
                resolve()
            })
        })
    }
}