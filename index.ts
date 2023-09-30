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