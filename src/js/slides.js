import Reveal from "reveal.js";

const ppt = new Reveal();

ppt.initialize();

document.addEventListener("dblclick", () => {
  document.documentElement.requestFullscreen();
});
