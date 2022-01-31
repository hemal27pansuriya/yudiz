// https://www.vojtechruzicka.com/javascript-this-keyword/#:~:text=This%20keyword%20is%20used%20inside,behaves%20in%20an%20unexpected%20way.&text=Because%20the%20syntax%20and%20naming,yet%20the%20concept%20is%20different.
//Function Invocation - Here output is global and in browser it will be window object but in strict mode this will be undefined.
function myFunction() {
    // 'use strict';
    console.log(this);
}                                                                                                  

// myFunction(); 

//Method Invocation - refers to the object
const myObject = {
    name: "Hemal",
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}
// myObject.greet();
const greetCall = myObject.greet;
// greetCall(); // This will not work.

// But in nested function this will not work
const myObject1 = {
    name: "Hemal",
    greet: function (friends) {
        friends.forEach(function (element) { // Using arrow function we can access name.
            console.log(`Hello ${element}!! My name is ${this.name}`);
        });
    }
}
// myObject1.greet(["Shrey", "Uday", "Sandeep"]);

// In Classes - It points to the current object
class myClass{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}
const hemal = new myClass("Hemal");
// hemal.greet();

// apply, call, Bind
function myFunction1(a,b){
    console.log(this,a,b);
}
const myObject2 = {
    fname : "Hemal",
    lname : "Pansuriya"
}
// myFunction1.apply(myObject2, ["hi", "hello"]);
// myFunction1.call(myObject2, "hi", "hello");

const myObject3 = {
    name : "Hemal", 
    greet : function(){
        console.log(`Hello ${this.name}`);
    }
}
const greetCall1 = myObject3.greet.bind(myObject3);
// greetCall1();