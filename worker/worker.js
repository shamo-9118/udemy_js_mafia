"use strict"
self.addEventListener("message", (e) => {
    let count = 0;
    for (let i = 1, len = e.data.target; i < len; i++) {
        if (i % e.data.x === 0) {
            count++;
        }
        postMessage(count);
    }
});
