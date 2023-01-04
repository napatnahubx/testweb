function equation(a, b) {
    let perimeter =  (a + b);
    return perimeter;
}
function equation2(c,d,e) {
    let perimeter =  (c * d- e);
    return perimeter;
}
function equation3(a, b,f,g,h) {
    let perimeter =  (a+b+f+g+h);
    return perimeter;
}

let a = 1;
let b = 1;
let c = 7;
let d = 4;
let e = 2;
let f = 1;
let g = 1;
let h = 1;
console.log("(1+1) = " + equation(a, b));
console.log("(7*4-2) = " + equation2(c,d,e));
console.log("(1+1+1+1+1) = " + equation3(a, b,f,g,h));