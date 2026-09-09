// index.js - (toa e ovoj fajl kade sto pisuvame sega, glavniot entry point), tuka ke gi setirame rutite, i na tie ruti gi povikuvame handlerite
// handleri - komuniciraat so serverot i so klientot
// pkg/cars - osnovni funkcii za REST resursot cars, koi go manipuliraat cars.json fajlot
// pkg/files - tuka ke imame utility funkcii za citanje i zapisuvanje na podatoci vo cars.json

// pkg/cars komunicira so pkg/files i so handlers
// handlerot komunicira so index.js (ovoj fajl kade sto e ova celoto napisano i voedno i fajlot kade sto ke go definirame express)

const express = require("express");
const api = express();

api.use(express.json());

const {
    getAll,
    getById,
    create,
    update,
    remove
} = require("./handlers/cars");

//GET
api.get("/cars", getAll);
api.get("/cars/:id", getById);
//POST
api.post("/cars", create);
//PUT
// za ovaa logika na ovoj cas nema da ni treba PUT ruta, bidejki logikata ni e poveke nameneta za PATCH
//PATCH
api.patch("/cars/:id", update);
//DELETE
api.delete("/cars/:id", remove);

api.listen(10000, (err) => {
    err ? console.error(err) : console.log("Server started at port 10000!");
});
