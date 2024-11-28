import deliveryGuy from './images/deliveryGuy.png';
import chef from './images/Chef.png';

export function getOrder() {

    const deleteContainer = document.getElementById("content");
    deleteContainer.remove();
    const contentDiv = document.createElement("div");
    contentDiv.id = "content";
    contentDiv.classList.add("contentGridOrder");
    const header = document.getElementById("header");
    header.insertAdjacentElement("afterend", contentDiv);
    contentDiv.textContent ="";
    document.querySelector('#content').innerHTML = `
   <div id="menuTitle">Order</div>
<div id="orderBox">
    <div id="telNumber">0160-123456789</div>
    <div id="howToOrderBox">
        <div id="howToOrderTextTitle">How To Order</div>
        <div id="howToOrderInnerText">
            <p><strong>Choose Your Pizza </strong>– Browse through our menu and pick the pizza you’re craving. From traditional favorites to gourmet options, there's something for everyone.</p>
            <p><strong>Customize It</strong> – Want to add extra toppings, change the crust, or choose a different sauce? You can easily customize your pizza to make it just right for you.</p>
            <p><strong>Add Sides & Drinks</strong> – Complete your meal with our selection of sides like garlic bread, salads, and delicious drinks.</p>
            <p><strong>Review & Place Your Order</strong> – Double-check your order, enter your delivery details, and submit. We'll get your pizza ready and delivered hot and fresh to your door.</p>
        </div>
    </div>
    <div id="deliveryBoy">
        <img src="${deliveryGuy}" alt="Lego Pizza Delivery Guy" id="imgDelivery">
    </div>
    <div id="CookManBox">
        <img src="${chef}" alt="the pizza-cook" id="cookMan">
    </div>
    <div id="orderTextBoxTwo">
        <div id="howToOrderTextTitle">Fresh Pizza, Fast Delivery</div>
        <div id="howToOrderInnerText">
            <p><strong>Fast Delivery & Pickup</strong><br>We offer both fast delivery and pickup options. Whether you want to enjoy your meal at home or pick it up on your way, we've got you covered!</p>
            <p><strong>Ready to Satisfy Your Hunger?</strong><br> Order now and experience the deliciousness of GIOVANNIS Pizzas – made with fresh ingredients, baked to perfection, and delivered right to you!</p>
            <p><strong>Contact Us</strong><br> For questions or special requests, feel free to reach out to our customer service team. We're happy to help!</p>
        </div>
    </div>
</div>`;
}






