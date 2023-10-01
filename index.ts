let 이름1: string = 'kim'; 이름1 = 'park';      // string이 아닌 경우(ex. 이름1=123) 에러
let 이름2: string[] = ['kim', 'park'];          // 배열 지정
let 이름3: {name?: string} = {name:'kim'};      // name 속성은 옵션(stirng일 수도 아닐 수도 있음)
let 이름4: string | number = 123;               // Union Type(다양한 타입이 들어올 수 있도록 지정)

type Name = string | number;                   // Type alias(타입을 변수로 지정하여 사용할 수 있음)
let 이름5: Name = 123;


// 함수에 타입 지정 가능
function 함수(x: number): number{       // parameter(x) : number, return: number
    return x * 2;
}

// tuple 타입 지정(array에서 사용 가능)
type Member = [number, boolean];        // 첫 번째: number, 두 번쨰: boolean
let john: Member = [123, true];

// index signature(object에 지정해야 할 타입이 많은 경우: object 속성 지정)
type Member2 = {
    [key: string]: string,          // 글자로 된 모든 object 속성의 타입은 전부 string으로
}
let john2: Member2 = {name: 'kim', age: '123'};

// class 타입 지정 가능
class User{
    name: string;       // class 타입 지정
    constructor(name: string){
        this.name = name;
    }
}

let 이름: string = 'hoon';
let 나이: number = 20;
let 출생지역: string = 'osan';

let 자료담기: {제목: string, 가수: string} = {제목: 'twilight', 가수: 'i don\'t know'};

let project: {member: string[], days: number, started: boolean} = {
    member : ['kim', 'park'],
    days: 30,
    started: true
}

let 회원: number | string = 'kim';        // union type
let 회원1: (number | string) = 123;

let 회원들: (number | string)[] = [1,'2',3];        // 배열 안에 number 혹은 string 타입 허용
let 회원들2: number | string[] = ['1','2','3'];     // number 타입 or 배열(string 타입) 허용
let 오브젝트: {a: string} = {a: '123'}

let 아무거나: any;      // 아무거나 허용(하지만 TypeScript 쓰는 이유가 사라짐)
아무거나 = 123;
아무거나 = true;
아무거나 = undefined;

let 언노운: unknown;        // unknown > any (안전함)
언노운 = 123;
언노운 = {};

let 변수1: string = 이름;

// TypeScript의 엄격한 타입 규칙
// string 타입 : +1 가능
// nunmber 타입 : +1 가능
// string | number 타입 : +1 불가
// unknown 타입 : +1 불가
let 나이규칙: string|number;
// 나이규칙 + 1;        // union type 불가