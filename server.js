import { createServer } from 'node:http'
import { send } from 'node:process'
import {json} from 'node:stream/consumers'
import { randomUUID } from 'node:crypto'

process.loadEnvFile()

const port = process.env.port ?? 3000

function sendJson(res, statusCode, data){
    res.status = statusCode
    res.setHeader('Content-type', 'application/json; charset=utf-8')
    return res.end(JSON.stringify(data))
}

async function getJson(req){
    try {
        const res = await fetch(req)
        const response = await res.json()
        console.log(response)
    } catch (error) {
        console.log("something went wrong: ", error)
    }
}


const users = [{
    id: 1,
    name: 'Gus'    

}] 

const server = createServer(async (req, res) => {
    // console.log('Request received: ', req.method, req.url

    res.setHeader('Content-type', 'text/plain; charset=utf-8')
    const {method, url } = req

    const [pathname, querystring] = url.split('?')

    const searchParams = new URLSearchParams(querystring)
    console.log(searchParams.get('limit'))

    if (method === 'GET'){
        res.setHeader('Content-type', 'text/plain; charset=utf-8')
    
        if(pathname === '/') {
            res.setHeader('Content-type', 'text/plain; charset=utf-8')
            return res.end("Hi from node 🦾")
        }
        if (pathname === '/users'){
            const limit = Number(searchParams.get('limit')) || users.length
            const offset = Number(searchParams.get('offset')) || 0

            const paginatedUsers = users.slice(offset, offset + limit)
            return sendJson( res, 200, paginatedUsers)
        }

        if (pathname === '/health') {
            return sendJson(res, 200, {status: "ok "})
        }
        return sendJson(res, 405, {error: 'method not allowed'})   
    }

    if (method === 'POST'){
        if (pathname === '/users'){
            const body = await json(req)
            console.log(body)
            if(!body || !body.name) {
                return sendJson(res, 404, {error: 'Name is required'})   
            }
            
            const newUser = {
                id: randomUUID(),
                name: body.name
            }

            users.push(newUser)

            return sendJson(res, 200, {message: "user created successfully"})
        } 
        return sendJson(res, 500, [{error: "Something went wrong"}])
    }

    
    return sendJson(res, 404,{error: "Not found"})
    
})

server.listen(port,() => {
    const address = server.address()
    console.log(`Server listen at http://localhost:${address.port}`)
}) 