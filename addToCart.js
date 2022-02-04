var addToCart = document.getElementById("addToCart");
var counter = document.getElementById("displayCounter");
var counterCart= document.getElementById("cartCounter");

addToCart.addEventListener("click", setCart);

function setCart() {
console.log("Ciao");
    counterCart.value = Number(counterCart.value) + Number(counter.value);
    counter.value= 0;
    }
