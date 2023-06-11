// number, string, boolean, null types
var age;
var name1;
var toggle;
var empty;
var notInitialize;
var callback;
callback = function (num) {
    console.log(num);
};
age = 50;
name1 = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) {
    return 100 + a;
};
console.log(callback(2225));
// any type
var anything;
anything = -20;
anything = "Text";
anything = {};
// unknown type
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// tuple type
var person;
person = ["Max", 21];
// enum type
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
var load = {
    status: Status.LOADING,
};
if (load.status === Status.LOADING) {
    console.log("Loading page");
}
else {
    console.log("Page ready");
}
// type union
var both;
both = 1;
both = "Text";
// Literal type
var literal;
literal = "enable";
// function types
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
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
