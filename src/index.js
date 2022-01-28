const start = require('./Start/start')
const skylineProblem = new start();
skylineProblem._setup()
const find1 = require('./Class/FindFunctions')
const f = new find1();
console.log(f.findSkyline())