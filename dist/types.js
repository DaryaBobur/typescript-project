"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
getPromise()
    .then((data) => {
    console.log(data);
});
//# sourceMappingURL=types.js.map