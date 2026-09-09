const { readData, writeData } = require("../files");
const DATA_SOURCE = `${__dirname}/../../cars`
// __dirname vo mojov slucaj vi e D:\SEMOS\Generacija 2026\WebServisi septemvri 2026\web-services-march2026\c3\pkg\cars

// CRUD

// C - Create
const addCar = async(car) => {
    try{
        const data = await readData(DATA_SOURCE);
        data.push(car);
        await writeData(data, DATA_SOURCE);
    }catch(err){
        throw err;
    }
};

// R - Read
const getAllCars = async() => {
    //gi vraka site podatoci sto gi imame vo cars.json, za site koli
    try{
        const data = await readData(DATA_SOURCE);
        return data;
    }catch(err){
        throw err;
    }
};

const getCarById = async(id) => {
    // ni go vraka avtomobilot so id koe e dadeno kako parametar na funkcijata
    try{
        const data = await readData(DATA_SOURCE);
        const carFound = data.find((car) => car.id === id); // uuid - universally unique identifier
        return carFound;
    }catch(err){
        throw err;
    }
};

// U - Update

const updateCar = async(id, newCarData) => {
    try{
        let data = await readData(DATA_SOURCE);
        const carFound = data.find((car) => car.id === id);
        if(carFound){
            const newCar = {
                ...carFound,
                ...newCarData
            };
            data = data.filter((car) => car.id != id);
            data.push(newCar);
            await writeData(data, DATA_SOURCE);
        }else{
            console.log("Car with that id does not exist!");
        }
    }catch(err){
        throw err;
    }
};

// D - Delete

const removeCar = async(id) => {
    try{
        const data = await readData(DATA_SOURCE);
        const newData = data.filter((car) => car.id !== id);
        await writeData(newData, DATA_SOURCE);
    }catch(err){
        throw err;
    }
};

module.exports = {
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    removeCar
}