/*
Name: Binary to Base 10
Author: Mat Ruszczycky
*/
//1010 = 10

var binaryStr  = prompt('Enter binary value'),
    binaryList = binaryStr.trim().split('').reverse(),
    base10     = null,
    expo       = 0;

for (expo = 0, len = binaryList.length; expo < len; expo++) {
    binaryList[expo] = parseInt(binaryList[expo]);
    
    if (binaryList[expo] !== 0) {
        base10 += binaryList[expo] * Math.pow(2 , expo);
    }
}

console.log(base10);