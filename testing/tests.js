const http = require('http');
const assert = require('assert').strict;

async function testShouldPass(unitTester, test){
    try{
        let x = 0;
    }catch (e) {
        unitTester.notify(test, {status: 'failed', message: e});
        return;
    }
    unitTester.notify(test, {status: 'success'});
}

module.exports.testShouldPass = testShouldPass;