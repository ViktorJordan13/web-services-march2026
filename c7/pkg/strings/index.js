// user_(myidMongo1234)/6666333444.jpg

//makeID(10)

// 3.6 => Math.floor => 3
// 3.6 => Math.ceil => 4

const makeId = (length) => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; //52 karakteri
    let charLength = characters.length;

    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charLength));
    };

    return result;
};

module.exports = makeId;