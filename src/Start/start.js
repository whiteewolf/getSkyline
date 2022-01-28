const find = require('../Class/FindFunctions')
const find1 = new find();
module.exports = class Start {
    constructor() {
        this.tempHigh = 0;
    }
    findSkyline() {
        let config = find1.GetVariables();
        for(let i = 0; i < config.skylines; i++) {
            return config.skylines[i];
        }
    }
    _setup() {
        let config = find1.GetVariables();
        let skyline = find1.findSkyline();
        let sStart = config.skylines[0];
        let sHeight = config.skylines[1];
        config.result.push(sStart, sHeight);
        for (let x = sStart + 1; x <= 30; x++) {
            this.tempHigh = find1.findHeight(x);
            if(this.tempHigh !== sHeight) {
                console.log(x, this.tempHigh);
                config.result.push(x, this.tempHigh);	
                sHeight = this.tempHigh;
            }
        }
        console.log(config.result)
    }
}