import {readFile, writeFile, mkdir} from 'node:fs/promises'
import {join, basename, extname} from 'node:path'

let content = ''

if (process.permission.has('fs.read', 'archivo.txt')) {
    const content = await readFile('./archivo.txt', 'utf-8')
    console.log(content)
} else{
    console.log("you don't have the right to write here on this system")
}

const outputdir = join('output', 'file', 'documents')
if(process.permission.has('fs.write', outputdir)){
    await mkdir(outputdir, {recursive: true})  
    const upppercasecontent = content.toUpperCase()
    const outputfilePath = join(outputdir,'file_created2.txt' )

    console.log(extname(outputfilePath))
    console.log(basename(outputfilePath))


    await writeFile(outputfilePath, upppercasecontent)
    console.log("file created successfully") 

} else {
    console.log("you don't have the right to write here on this system")
}