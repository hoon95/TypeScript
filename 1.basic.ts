// Type Guards, Type Narrowing : typeof, instanceof 등을 사용하여 타입을 좁히기
function printId(id: string |  number) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// Generic Types : 다양한 타입에 대해 재사용 가능한 구성요소를 작성
function identity<T>(arg: T): T {
    return arg;
}
const output = identity<string>('Hello');
console.log(`output: ${output}`);

// Mapped Types : 기존 타입을 변형해 새로운 타입을 만드는 기능
type User = {
    name: string;
    age: number;
};

type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};

// Utility Types : TypeScript에서 제공하는 기본적인 타입 조작 도구
type PartialUser = Partial<User>;       // 모든 속성을 선택적(Optional)으로 면경
type PickName = Pick<User, "name">;     // 특정 속성만 선택

// Decorators : 클래스에 메타데이터를 추가
function Logs(target: any, key: string) {
    let value = target[key];
    const getter = () => value;
    const setter = (newVal: any) => {
        console.log(`Setting ${key} to ${newVal}`);
        value = newVal;
    };
    Object.defineProperty(target, key, { get: getter, set: setter });
}

class Person {
    @Logs
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const p = new Person('John');
p.name = 'Doe';