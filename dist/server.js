"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const app_1 = require("./app");
const prismaClient_1 = require("./dataBase/prismaClient");
const port = 3003;
const startDate = (0, date_fns_1.format)(new Date(), 'dd/MM/yyyy hh:mm:ss');
main();
async function main() {
    try {
        await prismaClient_1.prismaClient.$connect()
            .then(() => console.log('Prisma conectado'));
        await startAppListen()
            .then(() => {
            console.log(`${startDate} - servidor iniciando na porta ${port}`);
        });
        // console.log('iniciando rotinas')
        // cron.schedule('* * * * *', () => {
        //     console.log('fecthing tray orders')
        //     fetchTrayOrdersUseCase.execute()
        // })
    }
    catch (err) {
        throw new Error(err);
    }
    async function startAppListen() {
        return new Promise(async (resolve, reject) => {
            app_1.app.listen(port, () => {
                resolve();
            });
        });
    }
}
