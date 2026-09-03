// 1. Named (normal) functions

function NamedFunction(){
    console.log(" I am a named function");
};

//NamedFunction();

// 2. Declarativna (declared) function

let DeclarativeFunction = function (){
    console.log( " I am a declarative function ");
};

//DeclarativeFunction();

let ArrowFunction = () => {
    console.log( " I am a arrow function ");
};

//ArrowFunction();

// arrow function - normal version
// const sum = (x, y) => {
//     return x + y;
// };

//console.log(sum(1, 2));

const sumShorter = (x, y) => x + y; // shorter version

//console.log(sumShorter(5, 2));

const sumOfNumbers = sumShorter; // reference (referenca)

//console.log(sumOfNumbers(5, 2));

//IIFE - immediately invoked function expression

(function (){
    //console.log( " I am IIFE function");
})();

(() => {
    //console.log(" I am IIFE arrow function");
})();

// OOP - Objected Oriented Programing example in Java programming language
// IN JAVA!
// public class Izpisi {
//      public static void main[args]{
//          System.out.println( "Deneska povtoruvame osnovi na JavaScript i Node.js ")
//      }
//}

// IN JAVASCRIPT for comparison
// (function (){
//     console.log( " Deneska povtoruvame osnovi na JavaScript i Node.js ");
// })();

// IN JAVA:
// class Student{
//     String name;
//     int age;
//     double prosek;


    // Constructor functions (constructors) - used to create instances of objects in Object Oriented Programming(OOP)
    // public Student(){} - nulti constructor

    // public Student(String n){
    //      this.name = n;
    //}

    // public Student(String n){
    //      this.name = n;
    //      this.age = a;
    //      this.prosek = p;
    //}

    // getters
    // int getAge(){
    //     return this.age;
    // }

    // setters
    //  void setName(String n){
    //     this.name = n;
    //  }

    // methodNamed(){
    // System.out.println(" I am a named method");
    //}

    // methdUseAnotherMethod(){
    //      return this.methodNamed + "extra text";
    //}
//}

// TEST CLASS
// Student student1 = new Student();
// student1.methodNamed();
// Student student2 =  new Student("Trpe, 20, 9.0");
// Student student3 = new Student("Trajce"); // name: "Trajce", age: null, prosek: null
// String nullName = null;
// Student student4 = newStudent(nullName, 25, 6.0) - za ova ni treba poseben konstruktor da napiseme

// Function - if its on its own outside of an object (class)
// Method - if its inside an object (class)

// IN JAVASCRIPT!

const student = {
    name: "Mirko",
    age: 30,
    prosek: 7.5
};

//console.log(student.name);

const calculator = {
    add: function(a, b){
        return a + b;
    }
};

// console.log(calculator["add"]("prv parametar",true));
// console.log(calculator["add"](6,true));
// console.log(calculator["add"](true , true));

// Callback function
setTimeout ( function (){
    console.log("Callback executed");
}, 7000);

