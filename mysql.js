import mysql from 'mysql2/promise'
import { createServer } from 'node:http'

const port = process.env.PORT ?? 3000

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end("Hi from node 🍿")
})

server.listen(port, () => {
    const address = server.address()
    console.log(`Server listing in http://localhost:${address.port}`)
})

async function connectToDataBase() {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: '30696222',
            database: "DBMovies"
        });
        if (!connection) {
            throw new Error("Something went wrong with the connection");
        }
        console.log("Connection successufully")

        const [rows] = await connection.query('SELECT * from DBMovies LIMIT 10')
        await connection.end()
        const res = JSON.stringify(rows)
        console.log(res)
    } catch (error) {
        console.log("There's an error: ", error)
    }
}

// connectToDataBase()