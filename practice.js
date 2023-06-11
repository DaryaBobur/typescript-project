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
name1 = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) { return 100 + a; };
console.log(callback(2225));
