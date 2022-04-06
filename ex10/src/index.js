function myFunction () {
    var myMusic = {
        001: {
            artists: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artists: "Vedran Vasilj",
            title: "Al se zajebah",
            release_year: 2022,
            id: 1,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            }
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;