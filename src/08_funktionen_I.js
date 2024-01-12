
/***** Funktionen 01*****/
/// 1. Kapselung von Codeblöcken

/// Funktionsaufruf / call
//test();


/// Funktionsrumpf / Funktionsdeklaration (callee)
//function test()
//{
//    console.log("Hallo, Felix!");
//}


/***** Funktionen 02a *****/
/// 2a. Parametisierung + Datenübergabe von INNEN

/// Call
//ausgabeNamen();

/// Funktion
function ausgabeNamen() 
{
    ///interne Variable
    let firstName = "Felix";
    console.log("Hallo, " + firstName + "!");
}

///console.log(firstName); = Fehler: Scope!


/***** Funktionen 02b *****/
/// 2b. Parametrisierung + Datenübergabe von AUSSEN

/// Argumente sind Daten für Parameter
//ausgabeNamen2("Felix");  /// Argument
//ausgabeNamen2("Denise");
//ausgabeNamen2("Kurt");

function ausgabeNamen2(firstName)  /// Parameter
{
    console.log("Hallo, " + firstName + "!");
}


/***** Funktion 02c *****/
/// 2c. Mehrere Parameter / Argumente

//ausgabeNamenParams("Max","Mütze");

const prompt = require('prompt-sync')({sigint: true});
ausgabeNamenParams(prompt("Bitte Vornamen eingeben:"),prompt("Ihren Nachnamen bitte eingeben:"));  /// Piping

function ausgabeNamenParams(firstName, familyName) /// Parameter 
{
    console.log("Hallo, " + firstName + " " + familyName + "!");
}


