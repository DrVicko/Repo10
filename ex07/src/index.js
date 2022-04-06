


function myFunction(bla) {
    
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    };

    delete lion[bla];
    return lion;

}


myFunction("roar");

// Only change code above this line


module.exports = myFunction; 