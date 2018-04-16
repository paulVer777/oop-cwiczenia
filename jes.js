

function show()
{

    console.log(this);


}



show();




var dino={};


dino.logThis=show;


dino.logThis();





