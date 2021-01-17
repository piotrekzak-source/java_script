

let myCar = new Object();
myCar.maxSpeed = 80;
myCar.driver = "Piotr";
myCar.drive = function(){console.log("Now driving");};
myCar.drive();
//tworzenie obiektu
let myCar2 = {

    maxSpeed:70,
    driver:"Piotr",
    drive: function(speed, time){

        console.log(speed * time);
    },
    test: function(){

        console.log(this);
    }

};
myCar2.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50,3);