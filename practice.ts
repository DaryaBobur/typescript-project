// number, string, boolean, null types

let age:number;
let name1: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (num:number ) => void

callback = (num) => {
  console.log(num);
}

age = 50;
name1 = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;

callback = (a) => {return 100 + a};
console.log(callback(2225));


// any type
let anything: any;

anything = -20;
anything = 'Text';
anything = {};

// unknown type

let some:unknown;
some = 'Text';

let str: string;

if(typeof some === 'string' ){
str = some;
}

// tuple type

let person: [string, number];

person = ['Max', 21];

// enum type 