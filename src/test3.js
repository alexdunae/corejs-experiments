import "core-js/features/set";

const s = new Set(["a", "b"]);
console.warn("set is", s);
const el = document.createElement("li");
el.innerText = "CoreJS with set, core-js/features/set";
document.getElementById("main").appendChild(el);
