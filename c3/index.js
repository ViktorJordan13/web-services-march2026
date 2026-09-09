// index.js - (toa e ovoj fajl kade sto pisuvame sega, glavniot entry point), tuka ke gi setirame rutite, i na tie ruti gi povikuvame handlerite
// handleri - komuniciraat so serverot i so klientot
// pkg/cars - osnovni funkcii za REST resursot cars, koi go manipuliraat cars.json fajlot
// pkg/files - tuka ke imame utility funkcii za citanje i zapisuvanje na podatoci vo cars.json

// pkg/cars komunicira so pkg/files i so handlers
// handlerot komunicira so index.js (ovoj fajl kade sto e ova celoto napisano i voedno i fajlot kade sto ke go definirame express)

const express = require("express");
const api = express();