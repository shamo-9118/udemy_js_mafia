"use strict";
const foo = "foo";
const IIEF = (function (foo) {
    const privateNumber = 11;
    const publicNumber = 22;
    function privateFunction(props) {
        console.log("called private", props);
    }
    function publicFunction(props) {
        privateFunction(props);
    }
    return {
        publicNumber,
        publicFunction,
    };
})(foo);
// IIEF.publicFunction(IIEF.publicNumber);
