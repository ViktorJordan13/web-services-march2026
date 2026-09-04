const fs = require("fs");

//read file

const readData = (source) => {  // source ni e fajlot ili druga databaza od koja gi citame podatocite
    return new Promise ((success, fail) => {
        fs.readFile(`${source}.json`, "utf-8", (err, data) => {
            if(err) return fail(err);
            const out = JSON.parse(data);
            return success(out);
        });
    });
};

// write file

const writeData = (data, destinaton) => {  // data ni se podatocite sto sakame da gi zapiseme, a destination ni e fajlot ili databazata vo koja ke gi zapiseme
    return new Promise ((success, fail) => {
        const out = JSON.stringify(data);
        fs.writeFile(`${destinaton}.json`, out, (err) => {
            if(err) return fail(err);
            return success();
        });
    });
};

// Primer za REST Resource - vo JSON
// persons.json - ke gi zacuvuvame tuka entities
// person{
//     id
//     firstName
//     lastName
// }

// Task za doma:
// Podsetete se od predhodnite dva moduli i so koristenje na ovie readData i writeData,
// Probajte da napravite ednostaven CRUD vrz osnova na resursot person, megutoa so drug resurs (users, movies, books itn, sto sakate)
// Napravete asinhroni funkcii (async-await, so try and catch);
// 1. addResource
// 2. updateResource
// 3. removeResource

const addPerson = async(id, firstName, lastName) => {
    try{
        const person = {
            id: id,
            firstName: firstName,
            lastName: lastName
        }
        let data = await readData("./persons");
        data.push(person);
        await writeData(data, "./persons");
    }catch(err){
        throw err;
    }
};

const updatePerson = async(id, newPersonData) => {
    try{
        let data = await readData("./persons");
        const person = data.find((person) => person.id === id);
        const newPerson = {
            // spread operator (...) raboti kako append, ne pravi overwrite, samo dodava, odnosno ako e parametar so isto ime zamenuva vrednosti
            ...person,
            //id: 1
            //firstName: "Trpe"
            //lastName: "Mileski"
            ...newPersonData
        };
        data = data.filter((person) => person.id != id); // site luge bez covekot koj se obiduvame da go azurirame
        data.push(newPerson);
        await writeData(data, "./persons");
    }catch(err){
        throw err;
    }
};

const removePerson = async(id) => {
    try{
        const data = await readData("./persons");
        const out = data.filter((person) => person.id !== id);
        await writeData(out, "./persons");
    }catch(err){
        throw err;
    }
};

//IIFE funkcija, ne mora da ja povikuvame, stom stigne kodot do nejze, se izvrsuva
(async function (){
    await addPerson(2, "Marija", "Petkova");
    await addPerson(5, "Angelo", "Stepanovski");
    const newPersonData = {
        firstName: "Andzelo"
    };
    await updatePerson(5, newPersonData);
    await removePerson(2);
})();

// Istoto moze da go napravite za bilo kakov tip na resurs, eve na primer za cars
// Definicja na cars resursot
// car {
//     id
//     manufacturer
//     model 
// }

const addCar = async(id, manufacturer, model) => {
    try{
        const car = {
            id: id,
            manufacturer: manufacturer,
            model: model
        }
        let data = await readData("./cars");
        data.push(car);
        await writeData(data, "./cars");
    }catch(err){
        throw err;
    }
};

const updateCar = async(id, newCarData) => {
    try{
        let data = await readData("./cars");
        const car = data.find((car) => car.id === id);
        const newCar = {
            ...car,  
            ...newCarData
        };
        data = data.filter((car) => car.id != id); // site koli bez kolata koja se obiduvame da ja azurirame
        data.push(newCar);
        await writeData(data, "./cars");
    }catch(err){
        throw err;
    }
};

const removeCar = async(id) => {
    try{
        const data = await readData("./cars");
        const out = data.filter((car) => car.id !== id);
        await writeData(out, "./cars");
    }catch(err){
        throw err;
    }
};

// Ne e IIFE funkcija, za da se izvrsi treba da ja povikame
const execute = async() => {
    await addCar(1, "BMW", "X6");
    await addCar(2, "Mercedes", "AMG");
    await updateCar(2, {manufacturer: "Mercedes-Benz"});
    await removeCar(1);
};

execute();