//Destructuring Objects
let student = {
    fname: "Pooja",
    age:20,
    salary:40000
}

// console.log(student.fname)
let {fname,age,salary}=student;

//fname -key student -object  this created variable

console.log(fname,age,salary)

//Destructing Arrays

let fruits =["Apple","Mango","Grapes"];
let[fruit1,fruit2,fruit3]=fruits;  //unpack the value
console.log(fruit1);