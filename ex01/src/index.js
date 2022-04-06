// Only change code below this line

var myPet = {
    species: "Sheppard",
    name: "Rex",
    legs: 4,
    friends: ["Vedran", "Budo", "Grole"]
};

function myFunction (myPet) {
   return myPet;
}

// Only change code above this line

console.log(myFunction(myPet)); 

module.exports = { myPet, myFunction}; 