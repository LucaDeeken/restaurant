import "./styles.css";
import {getMenu, getDrinks} from "./menu.js";
import {getStart} from "./start.js";

const menuButton = document.getElementById("menu");
const startButton = document.getElementById("start");


//Speichert den DOM-Content von "content"
const content = document.querySelector('#content').innerHTML;

menuButton.addEventListener("click", () => {
    getMenu();
    const drinksButton = document.getElementById("drinks");
    drinksButton.addEventListener("click", () => {
        getDrinks();
    });

})




startButton.addEventListener("click", () => {
    getStart();
    document.querySelector('#content').innerHTML = content;
})

