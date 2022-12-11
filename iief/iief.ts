const foo = "foo";
const IIEF = (function (foo) {
    const privateNumber = 11;
    const publicNumber = 22;

    function privateFunction(props: number) {
        console.log("called private", props);
    }
    function publicFunction(props: number) {
        privateFunction(props);
    }

    return {
        publicNumber,
        publicFunction,
    };
})(foo);

// IIEF.publicFunction(IIEF.publicNumber);
