/*
PROBLEM - 1
Create a function that takes height as a param and prints tree like shape with given height as illustrated below

 EXAMPLES ::
    
    height = 6

                        A
                       ABC
                      ABCDE
                     ABCDEFG
                    ABCDEFGHI
                   ABCDEFGHIJK

        
    height = 3

                        A
                       ABC
                      ABCDE

    height = 4

                        A
                       ABC
                      ABCDE
                     ABCDEFG
                   
*/
const pattern = document.getElementById("pattern");
let a = "";
function drawTree(height) {
    // ... your code here
    for(let i = 1; i <= height; i++){
        for(let j = i; j <= height-1; j++){
            a += "&nbsp";
        }
        for(let k = 1; k <= i*2-1; k++){
            a += String.fromCharCode(k+64);
        }
        a += `<br>`;
    }
    pattern.innerHTML = a;
}
drawTree(4)
drawTree(3)
drawTree(5)

/*
PROBLEM - 2
Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.

EXAMPLES ::
diamondArrays(1) ➞ [[1]]
diamondArrays(2) ➞ [[1], [2, 2], [1]]
diamondArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]
*/
function diamondArrays(num) {
    // ... your code here
    let arr = []
    for(let i = 1; i <= num; i++){
        arr.push([i]);
    }
    console.log(arr);
    // let arr = [];
    // for(let i = 0; i < num; i++){
    //     for(let j = 0; j < num; j++){
            
    //     }
    // }
}
diamondArrays(1)
diamondArrays(2)
diamondArrays(3)
diamondArrays(4)
diamondArrays(5)

/*
PROBLEM - 3
find positive Cumulative Sum of Array.
The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

NOTE: if possible try to use map and reduce

EXAMPLES ::
Initial Array: [1, 3, 5, 7]           => Cumulative Sum: [1, 4, 9, 16]       => Positive Cumulative Sum: [1, 4, 9, 16]
Initial Array: [1, -2, 3, 4, -6]      => Cumulative Sum: [1, -1, 2, 6, 0]    => Positive Cumulative Sum: [1, 2, 6]
Initial Array: [1, -1, -1, -1, 1]     => Cumulative Sum: [1, 0, -1, -2, -1]  => Positive Cumulative Sum: [1]
*/

function getPositiveCumulativeSum(arr) {
    // ... your code here
    let cumpos = [];
    const positiveCumulativeSum = function(cumulativeSum){
        // console.log(cumulativeSum);
        const cumLength = cumulativeSum.length;
        console.log(cumLength)
        for(let i = 0; i < cumLength; i++){
            if(cumulativeSum[i] <= 0){
                continue;
            }
            cumpos.push(cumulativeSum[i]);
        }    
    }
    console.log("positive is :"+cumpos);

    const cumulativeSum = arr.reduce(function(acc, curr){
        let {sum, arr1} = acc;
        sum += curr;
        arr1.push(sum);
        return {sum, arr1}
    },{
        sum : 0,
        arr1 : []
    });
    console.log(cumulativeSum.arr1);
    positiveCumulativeSum(cumulativeSum.arr1);

    
}


getPositiveCumulativeSum([1, 3, 5, 7]);
getPositiveCumulativeSum([1, -2, 3, 4, -6]);
getPositiveCumulativeSum([1, -1, -1, -1, 1]);

