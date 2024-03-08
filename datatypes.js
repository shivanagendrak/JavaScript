// In Java Script we have two types of datatypes
// there are 
// 1. Primitive datatypes (7)
// 2. Non Primitive datatypes - objects(arrays,functions)

// 1. Primitive 
// number , string , boolean , undefined , BigInt , null , symbol 
let age = 24;
// string
let name = "Shiva";
// number
let height = 5.1212;
// boolean
isFollow = true;
isLike = false;
console.log(isFollow);
// undefined
let a;
console.log(a);
// null
let b = null;
console.log(b);
// BigInt
let c = BigInt("123");
console.log(c);
// symbol
let wish = Symbol("Hello!");
console.log(wish);

// 2. Non Primitive Data types
// Objects = collection of values
// Example = Student[name String, age number, marks number, isPass boolean ]

// Object

const student = {
    firstName : "Shiva",
    lastName : "Hydra",
    age : 24,
    height : 5.12,
    isPass : true
};

console.log(student.firstName);
console.log(student.age);
console.log(student.height);
console.log("Hello "+student.firstName+", Your Age is "+student.age+".");
console.log(student["age"]);

student['age']=student["age"]+1
console.log(student['age']);
 
const product = {
    title : "Parker Jotter Standdard CT Ball Pen",
    product_type : "Ball Pen",
    colour : "Black",
    price : 270,
    isDeal : true,
    rating : 4,
    No_of_ratings: 7002,
    offer : 0.5
};
console.log(product);

const profile ={
    username : "@Shradhakhapra",
    posts : 195,
    followers : 569000,
    following : 4,
    isFollow : false,
};
console.log(profile);
/*
this is a multiline comment
 */