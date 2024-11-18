/*
    JavaScript가 구린 이유?
    Runtime Error : 가장 좋지않은 에러
    
    하지만 JavaScript는 코드가 실행된 이후 알려줌.
    - 나의 에러를 다른 사람들에게 알려주게 됨
    - 코드가 실행되기 전 언어가 자체적으로 에러 사유를 알려주는게 좋음.

    const nico = { name: 'nico' };
    console.log(nico.hello());      // TypeError
*/
/*
    TypeScript는 JavaScript로 컴파일한 후 실행해야 함
    => 커맨드 입력 : tsc index.ts / tsc -w(*저장 할 때마다 js 버전의 파일 갱신)
*/
// 변수에 타입 지정
var 이름1 = 'kim';
var 이름2 = ['kim', 'park'];
var 이름3 = { name: 'kim' };
// Union Type: 여러 타입 허용
var 이름4 = 123;
var 이름5 = 123;
// 함수에 타입 지정 : return값도 타입을 따라감
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var john2 = { name: 'kim', age: '123' };
// 클래스 타입 지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// 다양한 타입을 변수에 지정
var 이름 = 'hoon';
var 나이 = 20;
var 출생지역 = 'osan';
var 자료담기 = { 제목: 'twilight', 가수: 'unknown' };
// 복합 객체에 타입 지정
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true
};
// Union 타입 예시
var 회원 = 'kim';
var 회원들 = [1, '2', 3]; // 숫자와 문자열이 들어갈 수 있는 배열
// Any 타입: 모든 타입 허용
var 아무거나 = 123;
아무거나 = true;
// Unknown 타입: 안전한 any
var 언노운 = 123;
언노운 = {};
// Void: 반환값이 없는 함수
function 함수1(x) {
    // 반환값 없음
}
function logAge(obj) {
    console.log(obj.age);
}
var person = { name: 'Capt', age: 28 };
logAge(person); // 28
var myBeer = { brand: 'Asahi' };
// myBeer.brand = 'Hite';  // 에러 발생 (읽기 전용)
// Enum: 상수들의 집합
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Cpt"] = 2] = "Cpt";
    Avengers[Avengers["IronMan"] = 3] = "IronMan";
    Avengers[Avengers["Thor"] = 4] = "Thor";
})(Avengers || (Avengers = {}));
var hero = Avengers.Cpt;
// Never 타입: 절대 반환되지 않는 함수
function neverEnd() {
    while (true) {
        // 무한 루프
    }
}
// 나머지 매개변수와 for-in을 사용한 합계 함수
function sum(a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    var totalOfNums = 0;
    for (var key in nums) {
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}
var vm = {
    el: '#app',
    count: 10,
    init: function () {
        var _this = this;
        return function () {
            return _this.count;
        };
    }
};
var getCount = vm.init();
var count = getCount();
console.log(count); // 10
