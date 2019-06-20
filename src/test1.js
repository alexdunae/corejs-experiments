// var set = new Set([1, 2, 3]);

const s = new Set(["a", "b"]);
console.warn("set is", s);
const el = document.createElement("li");
el.innerText = "CoreJS with set, no polyfill";
document.getElementById("main").appendChild(el);
