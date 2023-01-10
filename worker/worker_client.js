"use strict";
document.getElementById("btn").addEventListener("click", () => {
    const worker = new Worker("./worker.js");
    worker.postMessage({
        target: document.getElementById("target").value,
        x: document.getElementById("x").value,
    });
    document.getElementById("result").textContent = "計算中...";
    worker.addEventListener("message", (e) => {
        document.getElementById("result").textContent = e.data;
    });

    worker.addEventListener("error", () => {
        document.getElementById("result").textContent = e.message;
    });
});
