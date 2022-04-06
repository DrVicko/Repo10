// Only change code below this line

var school = {
    name: "Arena",
    location: "Sarajevo",
    established: 2020
};
// End of school object

// function below
function myFunction(name) {
    
    school.name = name; 

    return school;
}


myFunction("Paragon");

// Only change code above this line


module.exports = { school, myFunction }; 