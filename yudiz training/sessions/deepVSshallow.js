// Top level objects
function topLevelObjects() {
    const myObj = { name: "Hemal" };

    // const copy_myObj = myObj;
    // copy_myObj.name = "Great";
    // console.log(myObj, copy_myObj); // Getting "Great" in both - Shallow copy

    // Using spread operator
    const copy_myObj1 = { ...myObj };
    // copy_myObj1.name = "Great";
    myObj.name = "Great";
    console.log(copy_myObj1, myObj); // Getting different - Deep copy

    // Using object assign
    const copy_myObj2 = Object.assign({}, myObj);
    myObj.name = "Great";
    // copy_myObj2.name = "Great";
    // console.log(copy_myObj2, myObj); // Getting different - Deep copy
}
// topLevelObjects();

// Using Spread and Assign objects are getting disconnected after getting copy of each
//other. So after getting copy if i change the value then it will affect only targeted object.

// Nested objects
function nestedObjects(){
    const myObj = {
        name: "Hemal",
        hobbies: ["comedy", "cricket"]
    }

    // const copy_myObj = {...myObj};
    // copy_myObj.hobbies[0] = "dancing";
    // console.log(copy_myObj, myObj); // Getting both "dancing" - shallow copy
    
    // const copy_myObj1 = Object.assign({}, myObj);
    // copy_myObj1.hobbies[1] = "Music";
    // console.log(copy_myObj1, myObj); // Getting same "Music" - shallow copy

    // Spread and assign are doing deep copy on top level element of object but shallow on 
    // nested element.

    const copy_myObj2 = JSON.parse(JSON.stringify(myObj));
    // copy_myObj2.hobbies[0] = "Singing";
    myObj.hobbies[1] = "Mimicry";
    console.log(copy_myObj2, myObj); // getting different means exactly as we wanted - deep copy
}
// nestedObjects();

