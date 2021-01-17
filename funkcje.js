function getAvarage (a,b){

var avarage = (a + b) / 2;// zmienna lokalna
console.log(avarage);
return avarage;

}
var Result = getAvarage(7,12);//zmienna globalna

function logResult(){

    console.log("Srednia to"+ "  " + Result +"  "+ "zagniezdzona w funkcji");


}

logResult();


