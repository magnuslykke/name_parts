"use strict";

const name = "Peter Heronimous Lind";

const firstName = name.substring(0, name.indexOf(" "));
const middleName = name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" "));
const lastName = name.substring(name.lastIndexOf(" ") + 1);

console.log("virker lortet");
console.log(name.split(" "));

console.log(`this is my firstname ${firstName}, and my middlename ${middleName} and my last fucking name is ${lastName}`);

const name2 = "Magnus Lykke Johansson";

const firstName2 = name2.substring(0, name2.indexOf(" "));
const middleName2 = name2.substring(name2.indexOf(" ") + 1, name2.lastIndexOf(" "));
const lastName2 = name2.substring(name2.lastIndexOf(" ") + 1);

console.log(`this is my firstname ${firstName2}, and my middlename ${middleName2} and my last fucking name is ${lastName2}`);
