/* 1.	Készíts tetszőleges témában egy adatszerkezetet, legalább 5 elemmel,
        elemenként legalább 3 tulajdonsággal. 
        Képet nem kötelező beletenni. */

import { tablazat } from "./fuggvenyek.js";
import { MACSKAK } from "./adatok.js";

const TARTALOM = document.getElementsByClassName("tartalom")[0];
//TARTALOM.innerHTML = "<div><p>Az 5 legfinomabb alma fajta:<ul><li>Batul alma</li><li>Húsvéti rozmaring alma</li><li>Pónyik alma</li><li>Fehér Klára alma</li><li>Nyári fontos alma</li></ul></p></div>";
TARTALOM.innerHTML = tablazat(MACSKAK)