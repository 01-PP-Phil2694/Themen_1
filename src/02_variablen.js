
// Zeilenkommentar

/*
     Block-Kommentar
*/

/***** Variablen 01 *****/

// console.log("Hi!"); // Ausgabe
// console.log(Hi); // Ausgabe

/* Deklaration + Wertzuweisung I */

let firstName; // Deklaration (Definition)
console.log(firstName); // Ausgabe
firstName = "Max"; // Wertzuweisung | assignnment
console.log(firstName); // Ausgabe
let familyName = "Mütze"; // Deklaration + Wertzuweisung
console.log("Hi, ich bin " + firstName + " " + familyName);

/*
 Wertzuweisung II + Datentypen 
   JavaScript ist eine untypisierte Sprache"
*/

//let test; // Deklaration
console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test);
console.log("-------------");
test = "hello"; // string
console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test);
console.log("-------------");
test = 2; // number
console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test);
console.log("-------------");
test = true; // boolean
console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test)

/* Variablen vs. Konstanten in JS */

let test;
test = "hi";
console.log("Inhalt: " + test);

