### Povtoruvanje

req.query -> ?carId=3 // toa sto go pisuvame direkno vo URL posle prasalnikot (?)

req.body -> // JSON objekt { "email": "test@gmail.com", "password": "123", users[]...}

req.params -> :id // toa vi se parametrite na koi sto vie samite im go davate imeto.

req.auth -> express-jwt koe raboti so jsonwebtoken sharing secret // koga pravite ruti sto ocekuvaat da im pratite token (da imate vo Headers vo POSTMAN Authorization key vo koe sto ke imate Bearer <JSON TOKEN>, a pak vo druga strana vo Authorization dali ke ni treba da go popolnime poleto secret ili pak ne)

req.files -> express-fileupload // za koga rabotite vo fajlovi