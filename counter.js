//variabili che selezionano +,- e input del contatore
var add = document.getElementById("add");
var remove = document.getElementById("remove");
var counter = document.getElementById("displayCounter");

//SEQUENZA DI LISTENER
//Listener che ascolta i cambiamenti del campo input e setta a 0 il counter e a 1 lo step, nel caso in cui l'utente inserisse numeri inferiori
counter.addEventListener("change", setCounter);

//Listener che ascoltano i click sui bottoni del contatore e richiama le funzioni per incrementarlo o decrementarlo
add.addEventListener("click", addCounter);
remove.addEventListener("click", removeCounter);

function addCounter() {
    counter.value++;
}
function removeCounter() {
    if (counter.value >= 1) {
        counter.value--;
    }
}

//Funzioni che settano a 0 il counter e a 1 lo step, nel caso in cui l'utente inserisse numeri inferiori
function setCounter() {
    if (counter.value < 0) {
        counter.value = 0;
    }
}
