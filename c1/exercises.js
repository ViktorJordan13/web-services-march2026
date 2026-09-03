const myName = "Semos";
const check = true;
const PI = 3.14;

const niza = [1, 2, 3, 4];
niza.push(5);
niza.push(7);
niza.pop();
// we can change complex const types like arrays using push and pop
//console.log(niza);
//splice - ni pravi novi nizi
//niza.splice(2, 2);
// prv argument - od kade (od koj element, od negoviot index) da pocne
// vtor argument - kolku da se dvizi napred, kolku elemti da izbrise
//console.log(niza);
//console.log(niza.splice(2, 2));

const person = {
    name: "Jovan",
    age: 30,
    // ne mozeme da koristime arrow funcija ako sakame da pristapime do name i age
    info: function(){
        return `Your name is ${this.name}, you are ${this.age} old`;
    }
}

//console.log(person.info());

const students = ["Marija", "Andzelo", "Sara"];

// find

const findResult = students.find((student) => student === "Sara");

//console.log(findResult);

// map

const mapResult = students.map((student) => {
    if(student === "Marija"){
        student = "Marija2";
    }
    return student;
})

//console.log(mapResult);

// ['M', 'a', 'r', 'i', 'j', 'a'] - char array (array of characters)

// filter

const filterResult = students.filter((student) => student.charAt(0) !== "A");

console.log(filterResult);
