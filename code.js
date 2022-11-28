/* //Funktion, die 24 Türchen im Kalender erstellt (in random order)
function test(){
    const tuerchenX = <a onmouseover="compareDates('tuerID')" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
    <article class="tuerchen" id="tuerID">1</article></a>;
    const node = document.createElement('div');
    const textnode = document.create(tuerchenX);
    node.appendChild(textnode);
}
 */
//Funktion, die einen Datumsvergleich (leider nur die Zahlen, nicht richtige Datumsangaben) anstellt.
function compareDates(tuerID){

let dateSim = document.getElementById("dateSim").value;
let dateTuer = document.getElementById(tuerID).textContent;
//Umwandlung des Strings in einen Integer Zahlenwert, da es sonst Probleme gibt beim Zahlenvergleich.
dateTuer = parseInt(dateTuer);

    if (dateSim>=dateTuer) {
        console.log("Ja, du darfst.");
    }
    else {
        console.log("Zu früh dran, Schatzi!")
        window.alert("Du bist leider zu früh dran. Habe noch ein wenig Geduld :)");
    }
}        

// Was passiert beim Klick auf den Burger-Button
function onButtonClick(){
    window.alert("Das hättest du wohl gerne ;-)");
}