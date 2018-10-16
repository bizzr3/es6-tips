'use strict';


const funcA = (a, b, c = "C has a default value", ...other) => {
    return [a, b, c, other];
}

console.log(funcA(1, 2, "A new val for C", 12, 654654, "mojtaba"));
// OUTPUT: [ 1, 2, 'A new val for C', [ 12, 654654, 'mojtaba' ] ]

