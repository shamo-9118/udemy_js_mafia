"use strict";
const obj = new Object();
obj.x = 1;
obj.y = 2;
obj.z = 3;
obj.s = 4;
obj.value = "value";
const name = "山田";
console.log(window);

const obj2 = Object.create(Object.prototype, {
    xx: { value: 10 },
    yy: { value: 20 },
    zz: { value: 30 },
});

Object.preventExtensions(obj);
// Object.seal(obj);
// Object.freeze(obj);

obj.x = 5;
delete obj.y;
obj.value = "VALUE";
