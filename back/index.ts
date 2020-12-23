import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './src/routes'

async function main() {

    const server = express()
    const port: number = 3001;

    server.use(cors());

    server.use('/', router);

    // server.get('/', (req, res) => {
    //     console.log('res', req)
    //     res.send('Hello World!')
    // })

    server.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })

    const mongo = process.env.DB_HOST || 'mongodb://localhost:27017/list-pays-app';
    mongoose.connect(mongo, {
        useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true,
    })
        .then(() => console.log('Conexión a mongo extablecida \x1b[36m \x1b[1m mongo enjoy! :9 \x1b[0m'))
        .catch((err: any) => console.log(`\x1b[31m \x1b[1m \x1b[5m ⚠️  Error al conectar a mongo D: \x1b[0m  \x1b[41m ${err} \x1b[0m`));

    
    return server;
}

main();
