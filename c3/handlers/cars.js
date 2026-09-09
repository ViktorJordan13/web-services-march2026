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