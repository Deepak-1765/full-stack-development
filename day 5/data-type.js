// string
let name = "chhachhiya";
console.log(name);

// let is keyword for variable declaration
// let varuableName = value
// comment in js 

// number
let age = 26;
console.log(age);
console.log("my age is " + age);
console.log("my age is ", age);

// float 
let height = 5.9;
console.log(height);
// in c, printf("%")
// js dyanmic type  language ( we don't define type of variable/data)
// c, c++, java script type language  (we define type of variable/data)
// int age = 36; string name ="dheeraj"; float height = 5.9;
// in js, we just use let keyword to take any type of data value 

let isMarried = false
console.log(isMarried)

// is js case sensitive?
let a = 10;
let A = 20;
console.log(a, A); // 10 20
// js is not case sensitive language 

// understand
let x;
console.log(x);

// obejct data type
// let objectName = { key: value, key2: value2}
// key is string,  value can be any datat type 
// object is form of dicitonary in js 
let person = {
    "Name": "Neeraj",
    "age": 26,
    "number": 7015,
    "address": {
        "city": "delhi",
        "pincode": 110001
    }
}

console.log(person);


let address = {
    "key": "string Value",
    "key2": 1234,
    "homeAddress": { "city": "delhi" },
    "officeAddress": { "city": "noida" }

}
console.log(address);
console.log(address.homeAddress.city);
// print city of officeaddess
console.log("My office city is " + address.officeAddress.city);

// array datat type 
let myFriends = ["Deepak", "madhav", "pooja", "Ashu", "kunal"];
console.log(myFriends);
console.log(myFriends[0])
console.log(myFriends[2])

// my best friend is pooja 

console.log("My best Friend are " + myFriends[1] + " and " + myFriends[2]); //string concatenation
console.log(`My best friend are  ${myFriends[1]} and ${myFriends[3]}`);// template literal 


// data date type
let currentdate = new Date(); // dateis a class in js
console.log(currentdate);
let myDOB = new Date("1999-06-02"); //year-month-day format of date 
console.log(myDOB);
console.log("dob year " + myDOB.getFullYear()); //get year from date
console.log("dob month " + (myDOB.getMonth() + 1)); // added 1 beacuse month is - indexed in js
console.log("dob date " + myDOB.getDay()); // get day from date

console.log("my expression " + 1 + 5); // "my expresion 1" + 5 --> my expresssion 15
console.log("my expression " + (1 + 5));// "my expresion " + 6 --> my expresssion 6

