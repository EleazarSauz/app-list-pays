import express from 'express';

async function main() {

    const app = express()
    const port: number = 3001;

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
    
    return app;
}

main();
