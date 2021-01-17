var myString = 'Ile liter ma string';

//string metody
console.log(myString.length);

console.log(myString.toLocaleUpperCase ());

console.log(myString.toLocaleLowerCase ());

console.log(myString.indexOf ("str"));

//petla jezeli slowo litera rowna sie minus 1 to wypisz to co w konsoli

if (myString.indexOf("liter") === -1){

    console.log("Nie ma takiego wyrazu w stringu");
// w innym przypadku slowo litera zaczyna sie w pozycji

}else{

    console.log("Slowo litera zaczyna sie od pozycji" +" "+ myString.indexOf("liter"));


}

//porownywanie stringow
var str1 = "abc";
var str2 = "dfg";
console.log(str1 === str2);//false
console.log(str1 < str2);// true
console.log(str1 > str2);// false

//dzielenie stringa
let str3 = "Dzis jest niedziela";
let rezultat = str3.slice(0,4);
console.log(rezultat);

//split string
let splitString = str3.split(" ");
console.log(splitString);
// tablice

let myArray = ['Dzis','jest','niedziela'];
console.log(myArray[1]);
console.log(myArray.length);
//tablice metody
let dolacz = myArray.join('-');
console.log(dolacz);
let nowaWartosc = myArray.push('i pada snieg');
console.log(nowaWartosc);
console.log(myArray);