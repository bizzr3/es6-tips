'use strict';

const funcA = (a, b = "Defailt value", c = 10) => {
    return [a, b, c];
}

console.log(funcA(20));
//OUTPUT: [ 20, 'Default value', 10 ]
