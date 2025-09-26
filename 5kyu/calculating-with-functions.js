// Description:

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five()));   //  must return 35
// four(plus(nine()));     //  must return 13
// eight(minus(three()));  //  must return 5
// six(dividedBy(two()));  //  must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));


//Codewars
function zero(x) { return x != null ? x(0) : 0}
function one(x) {return x != null ? x(1) : 1}
function two(x) {return x != null ? x(2) : 2}
function three(x) {return x != null ? x(3) : 3}
function four(x) {return x != null ? x(4) : 4}
function five(x) {return x != null ? x(5) : 5}
function six(x) {return x != null ? x(6) : 6}
function seven(x) {return x != null ? x(7) : 7}
function eight(x) {return x != null ? x(8) : 8}
function nine(x) {return x != null ? x(9) : 9}

function plus(x) {return y => y + x}
function minus(x) {return y => y - x}
function times(x) {return y => y * x}
function dividedBy(x) {return y => Math.floor(y / x)}




//Codewars
const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b



//Codewars
const zero  = (func) => func ? func(0) : 0;
const one   = (func) => func ? func(1) : 1;
const two   = (func) => func ? func(2) : 2;
const three = (func) => func ? func(3) : 3;
const four  = (func) => func ? func(4) : 4;
const five  = (func) => func ? func(5) : 5;
const six   = (func) => func ? func(6) : 6;
const seven = (func) => func ? func(7) : 7;
const eight = (func) => func ? func(8) : 8;
const nine  = (func) => func ? func(9) : 9;

const plus      = (x) => (num) => num + x;
const minus     = (x) => (num) => num - x;
const times     = (x) => (num) => num * x;
const dividedBy = (x) => (num) => ~~(num / x);



//Codewars
const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));




//Codewars
function zero(x) {return x != null ? x(0) : 0}
function one(x) {return x != null ? x(1) : 1}
function two(x) {return x != null ? x(2) : 2}
function three(x) {return x != null ? x(3) : 3}
function four(x) {return x != null ? x(4) : 4}
function five(x) {return x != null ? x(5) : 5}
function six(x) {return x != null ? x(6) : 6}
function seven(x) {return x != null ? x(7) : 7}
function eight(x) {return x != null ? x(8) : 8}
function nine(x) {return x != null ? x(9) : 9}

function plus(x) {return y => y + x}
function minus(x) {return y => y - x}
function times(x) {return y => y * x}
function dividedBy(x) {return y => Math.floor(y / x)}