// Callbacks
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

function makeOrder(fruitIndex, callProcessFunction){
    setTimeout(() => {
        console.log(`Fruit ${stocks.Fruits[fruitIndex]} is selected`);
        callProcessFunction();
    }, 2000);
}

function makingProcess(){
    console.log("Process is Started");
    setTimeout(() => {
        console.log("Fruits cutting is done.")
        setTimeout(() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`)
            setTimeout(() => {
                console.log("Machine has been started");
                setTimeout(() => {
                    console.log(`container ${stocks.holder[1]} is selected`);
                    setTimeout(() => {
                        console.log(`Topping ${stocks.toppings[1]} is added.`);
                        setTimeout(() => {
                            console.log("Ice cream is served.")
                        }, 2000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 1000);
    }, 2000);
}

// makeOrder(1, makingProcess);

// Promises
const isShopOpen = false;
function makeOrder1(time, work){
    return new Promise(function(resolve, reject){
        if(isShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time);
        }
        else reject("Shop is closed");
    });
}
/*
makeOrder1(2000, ()=>console.log("Order is Placed."))
.then(()=>{
    return makeOrder1(0000, ()=>console.log("Production has started"));
})
.then(()=>{
    return makeOrder1(2000, ()=>console.log("Fruits cutting is done"));
})
.then(()=>{
    return makeOrder1(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`));
})
.then(()=>{
    return makeOrder1(1000, ()=>console.log("Machine has started"));
})
.then(()=>{
    return makeOrder1(2000, ()=>console.log(`container ${stocks.holder[0]} is selected`));
})
.then(()=>{
    return makeOrder1(3000, ()=>console.log(`${stocks.toppings[0]} is selected and decorated on ice-cream`));
})
.then(()=>{
    return makeOrder1(2000, ()=>console.log("Serving the ice-cream"));
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>console.log("Enjoy the Ice-Cream"));
*/

// Async-Await
const is_shop_open = false;

function time(time){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(() => {
                resolve();
            }, time);
        }
        else{
            reject(console.log("Shop is closed"));
        }
    })
}

async function makeOrder2(){
    try{
        await time(2000);
        console.log(`Order is placed, you have choosed ${stocks.Fruits[3]} flavour.`);
        await time(0000);
        console.log("Production has started");
        await time(2000);
        console.log("Fruits cutting is done");
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added.`);
        await time(1000);
        console.log("Machine has been started");
        await time(2000);
        console.log(`Ice-cream is placing on ${stocks.holder[2]}`);
        await time(3000);
        console.log(`${stocks.toppings[0]} are decorated on the Ice-cream`);
        await time(2000);
        console.log("Order is served");
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("Have a Good Night!")
    }
}

makeOrder2();