// Type Guards, Type Narrowing : typeof, instanceof 등을 사용하여 타입을 좁히기
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
// Generic Types : 다양한 타입에 대해 재사용 가능한 구성요소를 작성
function identity(arg) {
    return arg;
}
var output = identity('Hello');
console.log("output: ".concat(output));
