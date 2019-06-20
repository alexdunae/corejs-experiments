import "core-js/stable";

const s = new Set(["a", "b"]);
console.warn("set is", s);
const el = document.createElement("li");
el.innerText = "CoreJS with set, import core-js/stable at root";
document.getElementById("main").appendChild(el);
