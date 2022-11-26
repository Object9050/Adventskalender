function onButtonClick(){
    window.alert("Das hättest du wohl gerne ;-)");
}

function compareDates(){

let dateSim = document.getElementById("dateSim").value;
let dateTuer = document.getElementById("dateTuer").textContent;

    if (dateSim>=dateTuer) {
        console.log("Ja, du darfst");
    }
    else {
        console.log("Zu früh dran, Schatzi 1!")
        window.alert("Zu früh dran, Schatzi!");
    }
}        

function compareDates24(){

    let dateSim = document.getElementById("dateSim").value;
    let dateTuer = document.getElementById("dateTuer24").textContent;
    
    if (dateSim>=dateTuer) {
        console.log("Ja, du darfst");
    }
    else {
        console.log("Zu früh dran, Schatzi 24!")
        window.alert("Zu früh dran, Schatzi!");
    }
}      
/* function compareDates() {
    if (dateSim<dateTuer) {
        console.log("Zu früh dran!");
    }
    else {
        console.log("Ja, du darfst");
    }        
} */