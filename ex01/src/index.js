// Only change code below this line

var myPet = {
    species: "Sheppard",
    name: "Rex",
    legs: 4,
    friends: ["Vedran", "Budo", "Grole"]
};

function myFunction (myPet) {
    var species = myPet.species; 
    var name = myPet.name;
    var legs = myPet.legs;
    var friends = myPet.friends; 
    return {
        species, name, legs, friends
    };
}


// Only change code above this line

console.log(myFunction()); 

module.exports = { myPet, myFunction}; 