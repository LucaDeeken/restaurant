
export function getMenu() {

    const deleteContainer = document.getElementById("content");
    deleteContainer.remove();
    const contentDiv = document.createElement("div");
    contentDiv.id = "content";
    contentDiv.classList.add("contentGridMenu");
    const header = document.getElementById("header");
    header.insertAdjacentElement("afterend", contentDiv);
    contentDiv.textContent ="";
    document.querySelector('#content').innerHTML = `
    <div id="menuTitle">Menu</div>
    <div id="menuBox">
        <div id="eatordrink">
            <div id="meals">Meals</div>
            <div id="drinks">Drinks</div>
        </div>
        <div id="pizzaHeader">Pizza</div>
            <div id="pizzaToEat" class="lastIngredient">
                <p id="pizzaTitles">Salami</p>
                <p id="ingredients">Tomato Sauce, Cheese, Salami, Oregano, Olive Oil, Fresh Herbs <br> 11$</p>
                <p id="pizzaTitles">Margherita</p>
                <p id="ingredients">Tomato Sauce, Mozzarella, Fresh Basil Leaves, Olive Oil, Garlic <br>8$</p>
                <p id="pizzaTitles">Vegan</p>
                <p id="ingredients">Tomato Sauce, Vegan Cheese, Spinach, Olive Oil, Garlic, Herbs <br>9$</p>
            </div>
        <div id="saladHeader">Salad</div>
        <div id="pizzaToEat">
            <p id="pizzaTitles">Caesar Salad</p>
            <p id="ingredients">Romaine Lettuce, Caesar Dressing, Croutons, Grated Parmesan Cheese, Grilled Chickem<br>6$</p>
            <p id="pizzaTitles">Mediterranean Salad</p>
            <p id="ingredients">Mixed Greens, Cherry Tomatoes, Cucumber, Kalamata Olives, Feta Cheese<br>7$</p>
        </div>
    </div>
</div>`;
const drinksButton = document.getElementById("drinks");
drinksButton.addEventListener("click", () => {
    getDrinks();
});
}

export function getDrinks() {

    const deleteContainer = document.getElementById("content");
    deleteContainer.remove();
    const contentDiv = document.createElement("div");
    contentDiv.id = "content";
    contentDiv.classList.add("contentGridMenu");
    const header = document.getElementById("header");
    header.insertAdjacentElement("afterend", contentDiv);
    contentDiv.textContent ="";
    console.log("test");
    document.querySelector('#content').innerHTML = `
    <div id="menuTitle">Menu</div>
    <div id="menuBox">
        <div id="eatordrink">
            <div id="meals">Meals</div>
            <div id="drinks">Drinks</div>
        </div>
        <div id="pizzaHeader">Non-Alcoholic</div>
            <div id="pizzaToEat" class="lastIngredient">
                <p id="pizzaTitles">Softdrinks</p>
                <p id="ingredients">Cola, Fanta, Sprite <br> 2$</p>
                <p id="pizzaTitles">Homemade Lemonade</p>
                <p id="ingredients">Freshly Squeezed Lemons, Mint Leaves, Lemon Slices <br>3$</p>
                <p id="pizzaTitles">Fruit Juices</p>
                <p id="ingredients">Apple, Orange, Grape <br> 2$</p>
                <p id="pizzaTitles">Water</p>
                <p id="ingredients">Still Or Sparkling<br> 1$</p>
            </div>
        <div id="saladHeader">Alcohol</div>
        <div id="pizzaToEat">
            <p id="pizzaTitles">Beer</p>
            <p id="ingredients">Lager, Ale, Guinness<br>3$</p>
            <p id="pizzaTitles">Wine</p>
            <p id="ingredients">Merlot, Chardonnay, Champagne<br>4$</p>
            <p id="pizzaTitles">Cocktails</p>
            <p id="ingredients">Margarita, Martini, Mojito, Bloody Mary<br>7$</p>
        </div>
    </div>
</div>`;
const mealsButton = document.getElementById("meals");
mealsButton.addEventListener("click", () => {
    getMenu();
});
}