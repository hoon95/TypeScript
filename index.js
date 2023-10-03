let 이름1 = 'kim';
이름1 = 'park'; // string이 아닌 경우(ex. 이름1=123) 에러
let 이름2 = ['kim', 'park']; // 배열 지정
let 이름3 = { name: 'kim' }; // name 속성은 옵션(stirng일 수도 아닐 수도 있음)
let 이름4 = 123; // Union Type(다양한 타입이 들어올 수 있도록 지정)
let 이름5 = 123;
// 함수에 타입 지정 가능
function 함수(x) {
    return x * 2;
}
let john = [123, true];
let john2 = { name: 'kim', age: '123' };
// class 타입 지정 가능
class User {
    constructor(name) {
        this.name = name;
    }
}
let 이름 = 'hoon';
let 나이 = 20;
let 출생지역 = 'osan';
let 자료담기 = { 제목: 'twilight', 가수: 'i don\'t know' };
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true
};
let 회원 = 'kim'; // union type
let 회원1 = 123;
let 회원들 = [1, '2', 3]; // 배열 안에 number 혹은 string 타입 허용
let 회원들2 = ['1', '2', '3']; // number 타입 or 배열(string 타입) 허용
var 오브젝트 = { data: '123' };
let 아무거나; // 아무거나 허용(하지만 TypeScript 쓰는 이유가 사라짐)
아무거나 = 123;
아무거나 = true;
아무거나 = undefined;
let 언노운; // unknown > any (안전함)
언노운 = 123;
언노운 = {};
let 변수1 = 이름;
// TypeScript의 엄격한 타입 규칙
// string 타입 : +1 가능
// nunmber 타입 : +1 가능
// string | number 타입 : +1 불가
// unknown 타입 : +1 불가
let 나이규칙;
// 나이규칙 + 1;        // union type 불가
let user = 'kim';
let age = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// 함수 void 타입 활용 : return 방지
function 함수1(x) {
    // return 1 + 1;
}
// function logAge(obj: {age: number}){
function logAge(obj) {
    console.log(obj.age);
}
let person = { name: 'Capt', age: 28 };
logAge(person);
let myBeer = {
    brand: 'Asahi'
};
// myBeer.brand = 'Hite'    // 읽기 전용으로 수정 불가
// Enum : 특정 값(상수)들의 집합
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Cpt"] = 2] = "Cpt";
    Avengers[Avengers["IronMan"] = 3] = "IronMan";
    Avengers[Avengers["Thor"] = 4] = "Thor";
})(Avengers || (Avengers = {}));
// let hero: Avengers = Avengers.Cpt;
// let hero: Avengers = Avengers[2];
function neverEnd() {
    while (true) {
    }
}
function sum(a, ...nums) {
    let totalOfNums = 0;
    for (let key in nums) {
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}
let vm = {
    el: '#app',
    count: 10,
    init: function () {
        return () => {
            return this.count;
        };
    }
};
let getCount = vm.init();
let count = getCount();
console.log(count); // 10
