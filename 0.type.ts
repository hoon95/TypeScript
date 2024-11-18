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
let 이름1: string = 'kim';
let 이름2: string[] = ['kim', 'park'];
let 이름3: {name?: string} = {name:'kim'};

// Union Type: 여러 타입 허용
let 이름4: string | number = 123;

// Type alias: 타입을 변수처럼 사용
type Name = string | number;
let 이름5: Name = 123;

// 함수에 타입 지정 : return값도 타입을 따라감
function 함수(x: number): number {
    return x * 2;
}

// Tuple 타입: 배열의 특정 위치에 지정된 타입 허용
type Member = [number, boolean];
let john: Member = [123, true];

// Index signature: 객체의 속성에 타입 지정
type Member2 = {
    [key: string]: string;  // 모든 속성 값은 string
}
let john2: Member2 = {name: 'kim', age: '123'};

// 클래스 타입 지정
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// 다양한 타입을 변수에 지정
let 이름: string = 'hoon';
let 나이: number = 20;
let 출생지역: string = 'osan';
let 자료담기: {제목: string, 가수: string} = {제목: 'twilight', 가수: 'unknown'};

// 복합 객체에 타입 지정
let project: {member: string[], days: number, started: boolean} = {
    member: ['kim', 'park'],
    days: 30,
    started: true
};

// Union 타입 예시
let 회원: number | string = 'kim';
let 회원들: (number | string)[] = [1, '2', 3];  // 숫자와 문자열이 들어갈 수 있는 배열

// Any 타입: 모든 타입 허용
let 아무거나: any = 123;
아무거나 = true;

// Unknown 타입: 안전한 any
let 언노운: unknown = 123;
언노운 = {};

// Void: 반환값이 없는 함수
function 함수1(x?: number): void {  // x는 옵션으로, undefined 가능
    // 반환값 없음
}

// Interface: 객체 구조의 규칙 정의
interface personAge {
    age: number;
}
function logAge(obj: personAge) {
    console.log(obj.age);
}
let person = {name: 'Capt', age: 28};
logAge(person);  // 28

// Readonly 속성: 읽기 전용으로 수정 불가
interface CraftBeer {
    readonly brand: string;
}
let myBeer: CraftBeer = { brand: 'Asahi' };
// myBeer.brand = 'Hite';  // 에러 발생 (읽기 전용)

// Enum: 상수들의 집합
enum Avengers {Cpt = 2, IronMan, Thor}
let hero: Avengers = Avengers.Cpt;

// Never 타입: 절대 반환되지 않는 함수
function neverEnd(): never {
    while (true) {
        // 무한 루프
    }
}

// 나머지 매개변수와 for-in을 사용한 합계 함수
function sum(a: number, ...nums: number[]): number {
    let totalOfNums = 0;
    for (let key in nums) {
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}

// Vue 인터페이스와 this 지정 예시
interface Vue {
    el: string;
    count: number;
    init(this: Vue): () => number;
}
let vm: Vue = {
    el: '#app',
    count: 10,
    init: function(this: Vue) {
        return () => {
            return this.count;
        }
    }
};
let getCount = vm.init();
let count = getCount();
console.log(count);  // 10