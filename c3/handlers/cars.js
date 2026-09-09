const {
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    removeCar
} = require("../pkg/cars");

// pkg/cars/index.js -> lokalni funkcii koi rabotat so podatocite od databaza fajlot cars.json
// handlerite (fajlov kade sto se naogame sefa i go pisuvame i citame ova) - tuka gi koristime lokalnite funkcii od pkg/cars/index.js
// (tie sto gi importirame) za da manipuliraat so cars.json ( preku requests i responses )

// SOLID
// S - single responsibilty 

// Task
// Podsetete se od Node.js i MongoDB modulite kko se pravea hadlers (vo niv koristevme MVC design pattern,
// pa tamu ni bea controllers) i napravete gi slednive handler funkcii koi ke gi povikuvaat funkciite
// koi gi importiravme od pkg/cars
// Napravete gi slednive handler funkcii: getAll, getById, create, update, remove
// exportirajte gi i importirajte gi vo glavniot vlezen fajl na aplikacijava index.js
// (tamu kade sto gi definirame rutite)

const getAll = async( req, res ) => {
    try{
        const cars = await getAllCars();
        return res.status(200).send(cars);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Sever Error");
    }
};

const getById = async(req, res) => {
    try{
        const id = Number(req.params.id);
        const car = await getCarById(id);
        return res.status(200).send(car);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Sever Error");
    }
};

const create = async( req, res) => {
    try{
        await addCar(req.body);
        return res.status(201).send(req.body); // Success and created
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Sever Error");
    }
};

const update = async ( req, res ) => {
    try{
        const id  = Number(req.params.id);
        await updateCar(id, req.body);
        return res.status(204).send("") // Success(OK) but no entity body
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Sever Error");
    }
};

const remove = async(req, res) => {
    try{
        const id = Number(req.params.id);
        await removeCar(id);
        return res.status(200).send("Car deleted!");
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Sever Error");
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}