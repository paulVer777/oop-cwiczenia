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




var dog={
    sound:"pramiauu",
    makesound: function (){console.log(this.sound)}
};


var dog1=Object.create(dog);

dog1.sound="meoow";

dog1.makesound();


