import os from 'node:os'
import ms from 'ms'


console.log("type os: ", os.type())
console.log("total memory:", ms(os.totalmem() ))
console.log("free memory:", os.freemem())
console.log("cpus:", os.cpus())


console.log("System activity time: ", ms(os.uptime() * 1000, {long:true}))

 
