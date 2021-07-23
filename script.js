import Lightbox from "./lightbox.js";

Lightbox.activate();
// console.log(Lightbox);

const btn = document.createElement('button');
btn.textContent = "click me!";
console.log(btn);

Lightbox.show(btn);