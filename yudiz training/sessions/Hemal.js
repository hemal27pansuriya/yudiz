/*

    Pushpa  is rearranging his library. he takes the innermost shelf and reverses the order of books.
    He breaks the walls of the shelf. In the end, there will be only books and no shelf walls.
    Print the order of books(only one string displaying Alice's library after rearrangement).

    Opening and closing walls of shelves are shown by '[' and ']' respectively whereas books are represented by lower case alphabets.

    example :

        [never[give]up]                         :>  pugivereven
        [keep[it]simple]                        :>  
        [flower[samjha[tha[kya]fire]hai]mein]   :>  

    explanation :
        [never[give]up] => [neverevigup] => pugivereven


*/
// this function should returns a string.
function rearrangeLib(library) {
    // ... WRITE YOUR CODE HERE ONLY
    let temp;
    const stack = Stack();
    for (const iterator of library) {
        if(iterator == ']'){    // [neverevigup]
            temp = "";
            while(true){
                const spop = stack.pop();   
                if(spop == '[') break;
                temp += spop;   // evig
            }
            for (const char of temp) {
                stack.push(char);
            }
            continue;
        }
        stack.push(iterator);
    }
    return temp;
}
console.log(rearrangeLib('[never[give]up]'));                       // pugivereven
console.log(rearrangeLib('[keep[it]simple]'));                      // elpmisitpeek
console.log(rearrangeLib('[flower[samjha[tha[kya]fire]hai]mein]')); // niemsamjhaerifkyaahthairewolf

// ------------------------------------------------------------------------------------------------------------------------------
// utility functions (dont modify)

function Stack() {
    return {
        val: [], // values stored in the stack
        push: function (v) {
            return this.val.push(v);
        }, // add one element to top of stack. and return newly added element.
        pop: function () {
            return this.val.length ? this.val.pop() : null;
        }, //  remove one element from top of stack, and returns last element
        get top() {
            return this.val[this.val.length - 1] ?? null;
        }, //  return topmost value of stack
        get size() {
            return this.val.length;
        }, // return count for values in stack
        get meta() {
            return { val: this.val, top: this.top, size: this.size };
        }, // return all properties along with its associated value of stack
    };
}

function Queue() {
    return {
        val: [], // values stored in the queue
        enqueue: function (v) {
            return this.val.push(v);
        }, // add one element to rear of queue. return newly added element.
        dequeue: function () {
            return this.val.length ? this.val.shift() : null;
        }, //  remove one element from front of queue, returns last element
        get front() {
            return this.val[0] ?? null;
        }, //  return front value of queue
        get rear() {
            return this.val[this.val.length - 1] ?? null;
        }, //  return rear value of queue
        get size() {
            return this.val.length;
        }, // return count for values in queue
        get meta() {
            return { val: this.val, front: this.front, rear: this.rear, size: this.size };
        }, // return all properties along with its associated value of queue
    };
}
// ------------------------------------------------------------------------------------------------------------------------------

// note : rename this file as <your first name>.js
// lets say my name is anuj jha , then i should rename it as anuj.js