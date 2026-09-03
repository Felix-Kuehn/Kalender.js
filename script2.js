'use strict';
const date = new Date();

const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const weekDay = date.getDay();

console.log(day);
console.log(month);
console.log(year);
console.log(weekDay);

const fullDate =
        `${String(day).padStart(2, '0')}.${String(month + 1).padStart(2, '0')}.${year}`;

console.log(fullDate);

function berechneTagesnummer(date) {
    const jahresanfang = new Date(
        date.getFullYear(),
        0,
        1
    );

    const millisekundenProTag = 1000 * 60 * 60 * 24;

    return Math.floor(
        (date - jahresanfang) / millisekundenProTag
    ) + 1;
}

function berechneTageUebrig(date) {
    const jahresende = new Date(
        date.getFullYear() + 1,
        0,
        1
    );

    const millisekundenProTag = 1000 * 60 * 60 * 24;

    return Math.floor(
        (jahresende - date) / millisekundenProTag
    );
}

function berechneWocheImMonat(day) {
    return Math.ceil(day / 7);
}

function berechneTageImMonat(year, month) {
    const ersterTagNaechsterMonat =
        new Date(year, month + 1, 1);

    const ersterTagAktuellerMonat =
        new Date(year, month, 1);

    const millisekundenProTag = 1000 * 60 * 60 * 24;

    return (
        (ersterTagNaechsterMonat - ersterTagAktuellerMonat)
        / millisekundenProTag
    );
}

const tagesNummer = berechneTagesnummer(date);
const tageUebrig = berechneTageUebrig(date);
const wochentgz = berechneWocheImMonat(day);
const daysInMonth = berechneTageImMonat(year, month);

const wochentage = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

const monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const daycounter = [
    "erste",
    "zweite",
    "dritte",
    "vierte",
    "fünfte"
];

const wochentag = wochentage[weekDay];
const monat = monate[month];
const daycount = daycounter[wochentgz - 1];

document.getElementById("ueberschrift").textContent =
    `Kalenderblatt vom ${fullDate}.`;

document.getElementById("beschreibung").textContent =
    `Der ${day}.${monat} ${year} ist ein ${wochentag} ` +
    `und zwar der ${daycount} ${wochentag} im Monat ${monat} ` +
    `des Jahres ${year}. Es handelt sich um den ${tagesNummer}. ` +
    `Tag des Jahres, was bedeutet, dass es noch ${tageUebrig} ` +
    `Tage bis zum Jahresende sind. Der Monat ${monat} ` +
    `hat insgesamt ${daysInMonth} Tage. ` +
    `Heute ist kein gesetzlicher Feiertag in Deutschland.`;

function erstelleKalender(tabelle, year, month, daysInMonth) {

    const caption = tabelle.createCaption();
    caption.textContent = `${monate[month]} ${year}`;

    const kopfzeile = tabelle.insertRow();

    const wochentageKurz = [
        "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"
    ];

    for (let i = 0; i < wochentageKurz.length; i++) {
        const zelle = kopfzeile.insertCell();
        zelle.textContent = wochentageKurz[i];
    }

    const ersterTag = new Date(year, month, 1);

    let startTag = ersterTag.getDay();

    if (startTag === 0) {
        startTag = 7;
    }

    let reihe = tabelle.insertRow();

    for (let i = 1; i < startTag; i++) {
        const zelle = reihe.insertCell();
        zelle.textContent = "";
    }

    for (let tag = 1; tag <= daysInMonth; tag++) {

        if (reihe.cells.length === 7) {
            reihe = tabelle.insertRow();
        }

        const zelle = reihe.insertCell();
        zelle.textContent = tag;
    }

    while (reihe.cells.length < 7) {
        const zelle = reihe.insertCell();
        zelle.textContent = "";
    }
}
const tabelle = document.getElementById("tabelle");

erstelleKalender(
    tabelle,
    year,
    month,
    daysInMonth
);