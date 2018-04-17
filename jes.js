var Cat = function (name, legs, sound) {
    this.name = name;
    this.legs = legs;
    this.sound = sound;
};
Cat.prototype.makesound = function () {

    console.log(this.sound);
};


var mruczek = new Cat("Bonifacy", 4, "miauu");
var mruczek1 = new Cat("Bonifacy", 4, "miauu");
var mruczek2 = new Cat("Wiertarka", 4, "miauu");
var mruczek3 = new Cat("Bonifacy", 4, "miauu");
var mruczek4 = new Cat("Bonifacy", 4, "miauu");


var names = ["bartek", "magda", "paweł", "jan", "mateusz", "ala", "ola"];

names.reduce(function (reduced, value, index, array) {

    if (value.length < 4) {

        reduced.shorterThan += 1;

    }
    else {

        reduced.biggerThan += 1;

    }

    return reduced;


}, {biggerThan: 0, shorterThan: 0});

