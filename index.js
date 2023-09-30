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
