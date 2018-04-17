var Cat = function (name, sound) {
    this.name = name;
    this.speak =false;
    this.sound = sound;
};

Cat.prototype.makeSound = function () {

    console.log(this.sound);
};


var mruczek = new Cat("Bonifacy","miauu");
var mruczek1 = new Cat("Bonifacy","Grrrrrrrrrrrrrr");
var mruczek2 = new Cat("Wiertarka","miauu");
var mruczek3 = new Cat("Bonifacy","miauu");
var mruczek4 = new Cat("Bonifacy","miauu");


mruczek1.makeSound();





var dog = {
    sound: "hau",
    makesound: function () {
        console.log(this.sound)
    }
};


var dog1 = Object.create(dog);

dog1.sound = "meoow";

//dog1.makesound();

var sheep = {

    eyes: 4,
    legs: 2

};

var cow = {

    tail: 1,
    color: "white"


};

var spider = {

    eyes: 20,
    name: "Sssh"


};


var mutant = Object.assign({}, sheep, cow, spider);


