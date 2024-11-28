import "./styles.css";
import {getMenu, getDrinks} from "./menu.js";
import {getStart} from "./start.js";
import {getOrder} from "./order.js";

const menuButton = document.getElementById("menu");
const startButton = document.getElementById("start");
const orderButton= document.getElementsByClassName("orderButton");

//Speichert den DOM-Content von "content"
const content = document.querySelector('#content').innerHTML;

function orderButtonAddEventListener() {
    for (let i= 0; i<orderButton.length; i++) {
        orderButton[i].addEventListener("click", () => {
            getOrder();
        })
    };    
}
orderButtonAddEventListener();

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
    orderButtonAddEventListener();
})