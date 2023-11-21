

// JS - 4 assignment

var country = [
    { countryName: "Lietuva ", countrySize: "65,300", population: "2,800,000" },
    { countryName: "Prancūzija", countrySize: "551,695 ", population: "67,000,000" },
    { countryName: "Kanada ", countrySize: "9,980,000", population: "38,000,000" },
    { countryName: "Australija", countrySize: "7,690,000", population: "25,400,000" },
    { countryName: "Gvatemala", countrySize: "108,889", population: "17,000,000" },
    
];


for (let i = 0; i < country.length; i++) {
    console.log(`Šalies pavadinimas: ${country[i].countryName}`);
    console.log(`Valstybės plotas: ${country[i].countrySize} km2`);
    console.log(`Gyventojų skaičius: ${country[i].population}`);
    
    
    var size = Number(country[i].countrySize.replace(/,/g, ''));
    var populationNr = Number(country[i].population.replace(/,/g, ''));
    
    
    var landPerPerson = size / populationNr * 1000000
    
    console.log(`Plotas tenkantis vienam gyventojui: ${landPerPerson.toFixed(2)} m2`);
    console.log("==================");
}