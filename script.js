'use strict'
const date = new Date(); /* constructor, with 'new' we can create many objects out of Date() with the const date */

const day = date.getDate();
const month = date.getMonth() + 1; /* +1 because it counts from 0 onward. So january is 0 */
const year = date.getFullYear();
const weekDay = date.getDay();
const fullDate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
let wochentag = ("")
let monat =("")

console.log(date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()); /* +1 here because, getMonth counts from 0 onwards, so 0 is January and Dezember is 11 */
console.log(day);
console.log(month);
console.log(year);
console.log(weekDay);


switch (weekDay) {
    case 0:
        wochentag = "Sonntag";
        break;
    case 1:
        wochentag = "Montag";
        break;
    case 2:
        wochentag = "Dienstag";
        break;
    case 3:
        wochentag = "Mittwoch";
        break;
    case 4:
        wochentag = "Donnerstag";
        break;
    case 5:
        wochentag = "Freitag";
        break;
    case 6:
        wochentag = "Samstag";
        break;
}
console.log(wochentag);

switch (month) {
    case 1:
        monat = "Januar";
        break;
    case 2:
        monat = "Februar";
        break;
    case 3:
        monat = "März";
        break;
    case 4:
        monat = "April";
        break;
    case 5:
        monat = "Mai";
        break;
    case 6:
        monat = "Juni";
        break;
    case 7:
        monat = "Juli";
        break;
    case 8:
        monat = "August";
        break;
    case 9:
        monat = "September";
        break;
    case 10:
        monat = "Oktober";
        break;
    case 11:
        monat = "November";
        break;
    case 12:
        monat = "Dezember";
        break;
}
document.getElementById("ueberschrift").textContent =
`Kalenderblatt vom ${fullDate}.`;

document.getElementById("beschreibung").textContent = /* document means it accesses my html elements -> p or h1. .getElementbyId(), is self explanatory, its a method of document. .textContent hints towards the content of the html element.  */
`Der ${day}.${monat} ${year} ist ein ${wochentag} und zwar der zweite Freitag im Monat Juni des Jahres 2025. Es handelt sich um den 164. Tag des Jahres, was bedeutet,dass es noch 201 Tage bis zum Jahresende sind. Der Monat Juni hat insgesamt 30 Tage. Heute ist kein gesetzlicher Feiertag in Deutschland.`;