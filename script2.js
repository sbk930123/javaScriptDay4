//8개의 data type이 존재함
/*
1) 문자열 String
2) 숫자 Number
3) 큰숫자 Bigint
4) 불린 Boolean
5) 미정의 Undefined
6) 널 Null
7) 심볼 Symbol
8) 객체 Object
*/

const str = "Smith's house";
console.log(typeof str);
const n = 100;
console.log(typeof n);
const yesOrNo = true; // false
console.log(typeof yesOrNo);

const obj1 = ['Smith', 'John', 'Mike'];
const obj2 = {
  name: 'Paul',
  age: 20
}
const obj3 = document.querySelector('#div');
console.log(typeof obj1);
console.log(typeof obj2);
console.log(typeof obj3);