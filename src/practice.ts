// number, string, boolean, null types

let age: number;
let name1: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (num: number) => void;

callback = (num) => {
  console.log(num);
};

age = 50;
name1 = "Max";
toggle = true;
empty = null;
notInitialize = undefined;

callback = (a) => {
  return 100 + a;
};
console.log(callback(2225));

// any type
let anything: any;

anything = -20;
anything = "Text";
anything = {};

// unknown type

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// tuple type

let person1: [string, number];

person1 = ["Max", 21];

// enum type
enum Status {
  LOADING,
  READY,
}

const load = {
  status: Status.LOADING,
};

if (load.status === Status.LOADING) {
  console.log("Loading page");
} else {
  console.log("Page ready");
}

// type union

let both: string | number;

both = 1;
both = "Text";

// Literal type

let literal: "enable" | "disable";

literal = "enable";

// function types

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(calc(2, 3));

function customError(): never {
  throw new Error("Error");
}

console.log(customError());

//   Custom Types
type DataPage1 = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: DataPage1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

type DataPage2 = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
};

const page2: DataPage2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
