/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoum = ["the", "our", "my", "you"];
let adj = ["big", "small", "beautiful", "great"];
let noum = ["teacher", "artist", "chef"];
let domine = [".com", ".es", ".org"];

for (let i = 0; i < pronoum.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noum.length; k++) {
      for (let l = 0; l < domine.length; l++) {
        console.log(pronoum[i] + adj[j] + noum[k] + domine[l]);
      }
    }
  }
}

const root = document.querySelector("#root");
root.innerHTML = "Hola";
