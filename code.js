function onButtonClickBurger(){

    console.log("Button click wurde registriert")

let dateSim = document.getElementById("dateSim").value;
let dateTuer = document.getElementById("dateTuer").textContent;

if (dateSim>=dateTuer) {
    console.log("Ja, du darfst");
}
else {
    window.alert("Zu früh dran, Schatzi!");
}        
/* function compareDates() {
    if (dateSim<dateTuer) {
        console.log("Zu früh dran!");
    }
    else {
        console.log("Ja, du darfst");
    }        
} */
}