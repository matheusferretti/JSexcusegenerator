/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

// window.onload = function() {
//   console.log("Hello Rigo from the console!");
// };

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
// let new_sent = "testing variable";
// window.onload = function check() {
//   var output = document.getElementById("excuse");
//   output.innerHTML = new_sent;
//   console.log("hey");
// };

var whoIndex = Math.floor(Math.random() * who.length);
var actionIndex = Math.floor(Math.random() * action.length);
var whatIndex = Math.floor(Math.random() * what.length);
var whenIndex = Math.floor(Math.random() * when.length);

let excusing =
  who[whoIndex] +
  " " +
  action[actionIndex] +
  " " +
  what[whatIndex] +
  " " +
  when[whenIndex];

document.querySelector("#excuse").innerHTML = excusing;
