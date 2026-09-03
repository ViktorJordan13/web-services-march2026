// calculator so mnozenje, delenje, sobiranje, odzemanje

// a = 3 - parametar
// b = 4 - parametar
// a + b - operacija
// calculator(a, b, sobiranje) - ovde i a i b i sobiranje se parametri, site 3

function calculator ( operacija, param1, param2){
    let result;
    switch(operacija){
        case "sobiranje":
            // result = param1 + param2
            // break;
            return param1 + param2;
        case "odzemanje":
            return param1 - param2;
        case "mnozenje":
            return param1 * param2;
        case "delenje":
            return param1 / param2;
        default:
            return "Not recognized operator";
    }
};

console.log(calculator("mnozenje", 2, 4));
console.log(calculator("sobiranje", 2, 4));
console.log(calculator("odzemanje", 2, 4));
console.log(calculator("delenje", 2, 4));
console.log(calculator("kub", 2, 4));

// pri koristenje switch
// 1. ili koristete return za sekoj case
// 2. ili posle sekoj case stavete break