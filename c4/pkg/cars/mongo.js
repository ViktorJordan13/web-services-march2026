//TASK
// Potsetete se od minatiot modul i obidete se lokalnite CRUD funkcii od minatite casovi sto rabotea
// so readFile i writeFIle i so JSON fajl, za istite da napravite schema i crud funkcii sto ke rabotat za MongoDB(so mongoose)
// 1. Schema za car
// 2. Crud funkcii za car
const mongoose = require("mongoose");

//Schema
const carSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
        minLength: 2
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        validate: {
            validator: (fieldParam) => fieldParam > 2010,
            message: (props) => `Input car is older than 2010!`,
        },
    },
    carWeight: {
        type: Number,
        min: 1200,
        max: 3000
    },
    createdAt: {
        immutable: true,
        type: Date,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
});

const Car = mongoose.model("Cars", carSchema, "cars");

//CRUD

const addCar = async(car) => {
    const newCar = new Car(car);
    return await newCar.save();
};

const getAllCars = async() => {
    return await Car.find({});
};

const getCarById = async(id) => {
    return await Car.findOne({ _id: id });
};

const updateCar = async(id, newCarData) => {
    return await Car.updateOne({ _id: id }, newCarData);
    //...stariPodatoci
    //sakame da zapiseme novi podatoci ...newCarData
    //novite podatoci samo ke se dodadat (apendiraat)
    //ako imate novi podatoci sto se so isto ime na poleto kako starite, novite podatoci ke gi prezapisat vrednostite na starite
    //vo Mongo update raboti kako PATCH, a replace raboti kako PUT
};

const deleteCar = async(id) => {
    return await Car.deleteOne({ _id: id });
};

module.exports = {
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar,
}