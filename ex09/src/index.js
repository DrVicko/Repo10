
function myFunction(myObj, checkProp) {
    //bla bla

    var myObj = {
        title: "Titanic",
        song: "My Heart Will Go On",
        genre: "drama"
    };

  
       if (myObj.hasOwnProperty("checkProp")){
           return myObj["checkProp"];
       } else {
           return "Not Found"; 
       }

    //bla bla
}

module.exports = myFunction; 