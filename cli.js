import {readdir, stat} from 'node:fs/promises'
import {join} from 'node:path'

console.log(process.argv)

const args = process.argv.slice(2)

// console.log('Arguments ', args)


// 1) get list of file

const dir = process.argv[2] ?? '.'

// name size simple format
const formatBytes = (size) => {
    if(size < 1024) return `${size} B`
    return `${(size /1024).toFixed(2)} KB`
}

// read the name of the info

const files = await readdir(dir)
// console.log(files)


// get files info

const entries = await Promise.all(
    files.map(async (name) => {
        const fullpath = join(dir, name)
        const info = await stat(fullpath)

        return {
            name,
            isDir: info.isDirectory(),
            size: info.size
        }
    })
)

//sort 
// show first the files
// all the info needs to be in alphabetic order


//filter 
// needs to have in count flags like --file-only or --dirs-only

for (const entry of entries){
    // info render
    const icon = entry.isDir ? '📁' : '📄'
    const size = entry.isDir ? '-' : `${entry.size}`
    console.log(`${icon}  ${entry.name.padEnd(25)}    ${size}`)
}