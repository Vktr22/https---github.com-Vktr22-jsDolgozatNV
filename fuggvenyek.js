/* 2.	Készíts függvényt a fuggvenyek.js fájlban, amely előállítja a mintának megfelelő kimenetet szöveges formában. 
        A függvény bemeneti paramétere legyen egy lista, kimenete pedig az elkészült html tartalmú szöveg.
        A kimenet csoportonként eltérő: 
            •	C csoport: táblázatban jeleníti meg az adatokat
        */                                                         

export function tablazat(lista){
    let txt = `<table><tr class="fejlec"><th>Fajta</th><th>Származási hely</th><th>Szörzet</th></tr>`;
    for(let index = 0; index < lista.length; index++) {
       //const element = lista[index];
      // console.log(element)//objektum
       txt += `<tr class="sorok"><td>${lista[index].fajta}</td><td>${lista[index].szarmazas}</td><td>${lista[index].szorzet}</td></tr>`;
    }
    txt += `</table>`
    return txt;
}                                          