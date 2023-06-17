"use strict";
let age;
let name1;
let toggle;
let empty;
let notInitialize;
let callback;
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
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person1;
person1 = ["Max", 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
const load = {
    status: Status.LOADING,
};
if (load.status === Status.LOADING) {
    console.log("Loading page");
}
else {
    console.log("Page ready");
}
let both;
both = 1;
both = "Text";
let literal;
literal = "enable";
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
console.log(calc(2, 3));
function customError() {
    throw new Error("Error");
}
console.log(customError());
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=practice.js.map