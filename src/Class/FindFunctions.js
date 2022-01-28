const sskylines = require('../Variables/skylines');
const skylines = sskylines.skylines;
module.exports = class Find {
    constructor() {
        this.maxHeight = 0;
    }
    findHeight(x) {
        for (let i = 0; i < skylines.length; i++) {
            if(x >= skylines[i][0] && x <= skylines[i][2]) {
                // console.log(skylines[i]);
                if(skylines[i][2] == x) continue;
                if(skylines[i][1] > this.maxHeight)
                    this.maxHeight = skylines[i][1];
            }
        }
        return this.maxHeight;
    }
    findSkyline() {
        console.log('before for')
        for(let i = 0; i < skylines; i++) {
            console.log('after for')
            return skylines[i];
        }
    }
    GetVariables() {
        return sskylines;
    }
}