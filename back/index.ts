import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './src/routes'

async function main() {

    const server = express()
    const port: number = 3001;
    server.use(express.json());
    server.use(cors());

    server.use('/v1', router);

    server.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })

    try {
        const mongo = process.env.DB_HOST || 'mongodb://localhost:27017/list-pays-app';
        await mongoose.connect(mongo, {
            useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true,
        })
        
        console.log(' \x1b[36m \x1b[1m Connection with mongo successful :) \x1b[0m')
    } catch (error) {
        console.log(`\x1b[31m \x1b[1m \x1b[5m ⚠️  Failed to connect mongo D: \x1b[0m  \x1b[41m ${error} \x1b[0m`);
        
    }

    
    return server;
}

main();
