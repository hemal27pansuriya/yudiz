function queue(){
    return {
        val: [],
        rear: function(){
            if(this.val.length == 0){
                return -1;
            }else{
                return this.val[this.val.length-1];
            }
        },
        front: 0,
        enqueue: function(value){
            return this.val.push(value);
        },
        dequeue: function(){
            if(this.val.length == 0){
                return "Underflow";
            }else{
                this.front++;
                return this.val.shift(this.front);
            }
        }
    };
}

const s1 = queue();

// s1.enqueue(1);
// s1.enqueue(2);
// s1.enqueue(3);
// s1.enqueue(4);

// console.log(s1.rear())
console.log(s1.dequeue());
// console.log(s1.dequeue());
console.log(s1);

//// STACK//////////////////STACK/////////////////
// function stack(){
//     return {
//         val: [],
//         top: function(){
//             if(this.val.length == 0){
//                 return -1;
//             }else{
//                 return this.val[this.val.length-1];
//             }
//         },
//         push: function(value){
//             return this.val.push(value);
//         },
//         pop: function(){
//             if(this.val.length == 0){
//                 return "Underflow";
//             }else{
//             return this.val.pop();
//             }
//         }
//     };
// }

// const s1 = stack();

// s1.push(1);
// s1.push(2);
// s1.push(3);
// s1.push(4);

// console.log(s1.top())
// console.log(s1.pop());
// console.log(s1);
