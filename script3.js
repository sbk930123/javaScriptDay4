let value = 10;
console.log(1);

function myFunc1() {
  //console.log(value);
  console.log(2);
}

value = value + 10;
console.log(3);

myFunc1();
console.log(4);
//제일 중요 !!!! 런타임 실행 순서

let x = 10;

function plus() {
  x = x + 10;
  return x; // 리턴함수
}

function plusWithoutReturn() { // 리턴없는 함수
  x = x + 10;
}
const y = plus();
console.log(plus());
console.log(plusWithoutReturn());

// function multyply(a, b) {
//   return a * b;
// }


// const multyply = (a, b) => {
//   return a * b;
// }

// 중요!! 애로우함수 모양에 익숙해지자..
const multyply = (a, b) => a * b

console.log(multyply(2, 3));

const arr = [1, 2, 3, 4, 5];

function sum(array) {
  let valueSum = 0;
  for (let i = 0; i < array.length; i++) {
    valueSum = valueSum + array[i];
  }
  return valueSum;
}

const sumArrow = (a) => {
  let valueSum = 0;
  for (let i = 0; i < a.length; i++) {
    valueSum = valueSum + a[i];
  }
  return valueSum;
}

console.log(sum(arr));
console.log(sumArrow(arr));

const myArray = [
  1,
  2,
  3
];

// var firstName = 'Tom';
// var lastName = 'Jackson';
let firstName = 'Tom';
let lastName = 'Jackson';

const myObject = {
  firstName: 'John',
  lastName: 'Doe',
  display: function () {
    console.log(this);
    return this.firstName + ' ' + this.lastName;
  }
}

console.log(myObject.display());