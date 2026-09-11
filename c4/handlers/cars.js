const {
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar,
} = require ("../pkg/cars/mongo");

const getAllHandler = async(req, res) => {
    try{
        const cars = await getAllCars();
        return res.status(200).send(cars);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

const getCarByIdHandler = async(req, res) => {
    try{
        const carFound = await getCarById(req.params.id);
        return res.status(200).send(carFound);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

const addNewCarHandler = async(req, res) => {
    try{
        await addCar(req.body);
        return res.status(201).send(req.body);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

const updateCarHandler = async(req, res) => {
    try{
        await updateCar(req.params.id, req.body);
        return res.status(200).send("Car updated!");
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

const deleteCarHandler = async(req, res) => {
    try{
        await deleteCar(req.params.id);
        return res.status(200).send("Car deleted!");
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    addNewCarHandler,
    getAllHandler,
    getCarByIdHandler,
    updateCarHandler,
    deleteCarHandler
}