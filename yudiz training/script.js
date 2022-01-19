// console.log('hii');

// callback fn
// function greetMorning() {
//     console.log('Good Morning');
// }
// function greetEvening() {
//     console.log('Good Evening');
// }

// function greet(name, clb) {
//     // clb();  // callback above
//     console.log(`Hello ${name}`);
//     clb();  // callback after
// }

// greet("john", greetMorning)
// greet("bob", greetEvening)


// // foreach on Array
// // does not return new array

// const arr = [
//     {name : "john", age : 20, field : "web"},
//     {name : "doe", age : 25, field : "mobile"},
//     {name : "bob", age : 29, field : "game"}
// ]

// // callback fn
// function clb(person) {
//     console.log(person.field.toUpperCase());
// }

// arr.forEach(clb)

// // anonymous callback fn
// arr.forEach(function(item) {
//     console.log(item.age);
// })

// // map - does return new array of same size using values of original
// const arr = [
//     {name : "john", age : 20, field : "web"},
//     {name : "doe", age : 25, field : "mobile"},
//     {name : "bob", age : 29, field : "game"},
//     {name : "roman", age : 35, field : "wrestler"}
// ]    

// const allNames = arr.map(function(item) {
//     return item.name;
// })

// console.log(allNames);

// const newNames = arr.map(function(item) {
//     return {
//         firstName : item.name.toUpperCase(),
//         age : item.age + 10
//     }
// })

// console.log(newNames);

// const names = arr.map(function (item) {
//     return `<h2><u>${item.age}</u></h2>`
// })
// document.body.innerHTML = names.join('')
// console.log(names);

// filter - does return a new array, can manipulate size based on condition

// const arr = [
//     {name : "john", age : 20, field : "web"},
//     {name : "doe", age : 25, field : "mobile"},
//     {name : "bob", age : 29, field : "game"},
//     {name : "roman", age : 35, field : "wrestler"}
// ]    

// const ages = arr.filter(function(item){
//     return item.field === "wrestler" || item.age <= 25
// })

// console.log(ages);

// find - return single instance, return first match else undefined, for getting unique values

// const arr = [
//     {name : "john", age : 20, field : "web", id : 1},
//     {name : "doe", age : 25, field : "mobile", id : 2},
//     {name : "bob", age : 29, field : "game", id : 3},
//     {name : "roman", age : 35, field : "wrestler", id : 4}
// ]    

// const names = arr.find(function (item) {
//     return item.id === 3;
// })

// console.log(names.age);

// //OR//
// console.log(arr.find(function(item) {
//     return item.id === 5;
// }).age);

// reduce - iterates, callback fn, reduces to a single value(number, array, object)
// para 1 ('acc') - total of all calculation
// para 2 ('curr') - current iteration values

// const arr = [
//     {name : "john", age : 20, field : "web", id : 1, salary : 500},
//     {name : "doe", age : 25, field : "mobile", id : 2, salary : 200},
//     {name : "bob", age : 29, field : "game", id : 3, salary : 400},
//     {name : "roman", age : 35, field : "wrestler", id : 4, salary : 600}
// ]    

// const total = arr.reduce(function(acc, currentItem){
//     console.log(`total : ${acc}`);
//     console.log(`current money : ${currentItem.salary}`);
//     acc += currentItem.salary;
//     return acc;
// },100)

// console.log(total);

// const date = new Date('01/03/2022 15:15:52');
// console.log(date);
// const month = date.getMonth();
// console.log(month);
// const day = date.getDay();
// console.log(day);
// const tarikh = date.getDate();
// console.log(tarikh);

//https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
// JS Exercise Solutions
// Exercise - 1 
// const days = ['sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

// const dateNow = new Date();
// const date = new Date("01/07/2022 23:45:25");
// const day = date.getDay();
// console.log('Today is : '+ days[day])
// let curHour = date.getHours();
// const curMin = date.getMinutes();
// const curSec = date.getSeconds();

// curHour >= 12 ? curHour = curHour-12+' PM' : curHour = curHour+' AM'; 

// const curTime = curHour+' : '+curMin+' : '+curSec; 
// console.log('Current time is : '+curTime);

//Exercise - 2
// window.print();

//Exercise - 3
// const date = new Date();
// let date1 = date.getDate();
// let month = date.getMonth()+1;
// const year = date.getFullYear();

// if(date1 < 10){
//     date1 = `0${date1}`;
// } 
// if(month < 10){
//     month = `0${month}`;
// }
// console.log(`${month}-${date1}-${year}`);
// console.log(`${month}/${date1}/${year}`);
// //OR//
// console.log(`${date1}-${month}-${year}`);
// console.log(`${date1}/${month}/${year}`);

//Exercise - 4
// const x = 5;
// const y = 6;
// const z = 7;

// const s = (x+y+z)/2;
// const area = Math.sqrt(s*(s-x)*(s-y)*(s-z));
// console.log(area);

//Exercise - 6
// function isLeapYear(year){
//     if (year%100 == 0){
//         if (year%400 == 0){
//             return true
//         }else{
//             return false
//         }   
//     }
//     else if (year%4 == 0){
//         return true 
//     }
//     else {
//         return false;
//     }
// }

// console.log(isLeapYear(2016));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(1700));
// console.log(isLeapYear(1900));

//OR//
// function isLeapYear(year){
//    return year%100 == 0 ? year%400 == 0 : year%4 == 0;
// }

// console.log(isLeapYear(2016));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(1704));
// console.log(isLeapYear(2000));

//Exercise - 7

// for(var i = 2014; i <= 2050; i++){
//     var date = new Date(i, 0, 1);

//     if(date.getDay() === 0){
//         console.log(i);
//     }
// }

//Exercise - 8
// const random = Math.ceil(Math.random()*10);
// console.log(random);

// const userIn = prompt("Guess the number between 1 to 10 : ");
// if(random == userIn){
//     console.log("Hurray! Good Work");
// }else{
//     console.log("Oops! Not Matched");
// }

//Exercise - 9
// const date = new Date();
// // const year = date.getFullYear()
// const criDate = new Date(date.getFullYear(), 11, 25);
// const oneDay = 24 * 60 * 60 * 1000  // Milliseconds in one day
// const diffInms = -date.getTime() + criDate.getTime();
// const diff = Math.round(diffInms / oneDay);
// console.log(diff);

//Exercise - 10
// multiply.addEventListener("click", function(e){
//     e.preventDefault();
//     const first = document.getElementById("first").value;
//     const second = document.getElementById("second").value;
//     answer.innerHTML = first * second;
// })
// divide.addEventListener("click", function(e){
//     e.preventDefault();
//     const first = document.getElementById("first").value;
//     const second = document.getElementById("second").value;
//     answer.innerHTML = first / second;
// })

// Exercise - 11
// function f2c(temp){
//     const f = temp;
//     const c = (f-32)*(5/9);
//     console.log(c);
// }

// function c2f(temp){
//     const c = temp;
//     const f = (9/5)*c + 32;
//     console.log(f);
// }

// f2c(45);
// c2f(60);

// Exercise - 12
// console.log(document.URL);

// Exercise - 13
// const name = "Hemal";
// const age = 21;
// this[name] = age;
// console.log(this[name]);

// Exercise - 14
// const fileName = "script.js";
// const indOfDot = fileName.indexOf(".");
// const ext = fileName.slice(indOfDot+1);
// //other//
// const fileName1 = "index.html";
// const ans = fileName1.split('.').pop();

// console.log(ext);
// console.log(ans);

// Exercise - 15
// function fn(num){
//     if(num > 13){
//         console.log((num-13)*2);
//     }
//     else{
//         console.log(13-num);
//     }
// }

// fn(25);
// fn(8);

// Exercise - 16
// function sum(num1, num2){
//     if(num1 == num2){
//         console.log((num1 + num2)*3);
//     }else{
//         console.log(num1 + num2);
//     }
// }
// sum(5, 6);
// sum(45, 45);

// Exercise - 17
// function diff(num){
//     if(num > 19){
//         return (num - 19)*3;
//     }else{
//         return 19 - num;
//     }
// }

// console.log(diff(25));
// console.log(diff(12));

// Exercise - 18
// function check(num1, num2){
//     return ((num1 == 50 || num2 == 50) || num1 + num2 == 50)        
// }
// console.log(check(50,53));
// console.log(check(51,2));
// console.log(check(51,50));
// console.log(check(24,26));

// Exercise - 20
// function checkPosNeg(num1, num2){
//     return (num1 < 0 && num2 >= 0) || (num1 >= 0 && num2 < 0)
// }

// console.log(checkPosNeg(3,-14));
// console.log(checkPosNeg(-3,-14));
// console.log(checkPosNeg(3,-14));
// console.log(checkPosNeg(0 ,0));
// console.log(checkPosNeg(3,14));

// Exercise - 21
// function string(str){
//     if(str.slice(0,2) == "Py"){
//         return str;
//     }else{
//         return `Py${str}`;
//     }
// }
// console.log(string("charm"));
// console.log(string("Python"));

// Exercise - 22
// function remove(str, pos){
//     const str1 = str.slice(0, pos);
//     const str2 = str.slice(pos+1, str.length);
//     console.log(str1 + str2);
// }

// remove("javanscript", 4);
// remove("javanscript", 3);
// remove("javanscript", 6);

// Exercise - 23
// function change(str){
//     if(str.length > 1){
//         const midPart = str.slice(1,str.length - 1);
//         // console.log(str[str.length-1])
//         console.log(str[str.length-1] + midPart + str[0]);
//     }else{
//         console.log(str);
//     }
// }

// change("javascript");
// change("reactjs");

// Exercise - 24
// function string(str){
//     return str[0]+str+str[0];
// }
// console.log(string("Angular"));
// console.log(string("Vue"));

// Exercise - 25
// function multiple(number){
//     if(number%3==0 || number%7==0){
//         console.log(true) 
//     }else{
//         console.log(false)
//     }
// }

// multiple(21);
// multiple(866);
// multiple(441);
// multiple(49);

// Exercise - 26
// function string(str){
//     const last3 = str.slice(-3);
//     if(str.length >= 3){
//         return last3+str+last3;
//     }else{
//         return str
//     }
// }
// console.log(string("HemalPansuriya"));
// console.log(string("vue"));
// console.log(string("Reactjs"));

// Exercise - 27
// function name(params) {
//     if(params.slice(0,4) == "java"){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// name("java")
// name("javascript")
// name("php")

// Exercise - 29
// function name(one, two, three) {
//     return (50 <= one && one <= 99) || (50 <= two && two <= 99) || (50 <= three && three <= 99);
// }
// console.log(name(45, 55, 52))
// console.log(name(45, 85, 02))
// console.log(name(55, 25, 23))

// Exercise - 28
// function fn(x,y){
//     return (x>=50 && x<=99) || (y>=50 && y<=99)
// }
// console.log(fn(45,50));
// console.log(fn(6,0));
// console.log(fn(45,10));

// Exercise - 30
// function script(str){
//     if(str.slice(4,10) == "script"){
//         return str.slice(0,4)+str.slice(10,str.length);
//     }else{
//         return str;
//     }
// }
// console.log(script("javascript"));
// console.log(script("python"));
// console.log(script("pythonscript"));

// Exercise - 31
// function name(a,b,c) {
//     const largest = Math.max(a,b,c);
//     console.log(largest)
// }
// name(1,12,185);

// Exercise - 33
// function range(a,b){
//     if(((a>=40 && a<=60) && (b>=40 && b<=60)) ||
//     ((a>=70 && a<=100) && (b>=70 && b<=100))){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(range(45,55))
// console.log(range(45,65))
// console.log(range(75,88))

// Exercise - 34
// function range(a,b){
//     if((a>=40 && a<=60) && (b>=40 && b<=60)){
//         if(a>b){
//             return a;
//         }else{
//             return b;
//         }
//     }else{
//         return "not in range 40to60";
//     }
// }

// console.log(range(45,55))
// console.log(range(45,50))
// console.log(range(12,25))

// Exercise - 35
// function character(str, char) {
//     let yes = false;
//     for(let i = 2; i < 5; i++){
//         if (str[i] == char){
//             yes = true;
//             break;
//         }
//     }
//     return yes;
// }

// console.log(character("javascript", 'a'));
// console.log(character("javascript", 's'));
// console.log(character("javascript", 'c'));
// console.log(character("javascript", 'v'));
// console.log(character("javascript", 't'));

// Exercise - 36
// function threeInt (int1, int2, int3){
//     const int1r = int1 % 10;
//     const int2r = int2 % 10;
//     const int3r = int3 % 10;
//     if (int1r == int2r && int2r == int3r && int1r == int3r){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(threeInt(125, 255, 365));
// console.log(threeInt(125, 254, 368));
// console.log(threeInt(120, 250, 360));
// console.log(threeInt(121, 258, 360));

// Exercise - 37
// function string(str){
//     if(str.length >= 3){
//         const str1 = str.slice(0,3).toLowerCase();
//         const str2 = str.slice(3).toUpperCase();
//         return str1 + str2;
//     }else{
//         return str.toUpperCase();
//     }
// }

// console.log(string("Javascript"));
// console.log(string("python"));
// console.log(string("Hi"));

// Exercise - 38
// function result(marks, exam) {
//     if(exam == "final exam"){
//         return (marks >= 90);
//     }else{
//         return (marks >= 89) && (marks <= 100)
//     }
// }

// console.log(result(85, "final exam"));
// console.log(result(85, ""));
// console.log(result(92, "final exam"));
// console.log(result(95, ""));

// Exercise - 39
// function sum(a, b) {
//     if(a+b >= 50 && a+b <= 80){
//         return 65;
//     }else{
//         return 80;
//     }
// }
// console.log(sum(15, 52))
// console.log(sum(25, 36))
// console.log(sum(15, 25))
// console.log(sum(15, 20))

// Exercise - 40
// function check(a, b){
//     if(a == 8 || b == 8 || a+b == 8 || Math.abs(a-b) == 8){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(check(14, 22))
// console.log(check(10, 8))
// console.log(check(14, 20))
// console.log(check(6, 2))

// Exercise - 41
// function check(x, y, z){
//     if(x==y && y==z && x==z){
//         return 30
//     }else if(x==y || y==z || x==z){
//         return 40
//     }else{
//         return 20
//     }
// }

// console.log(check(2,2,2))
// console.log(check(21,12,82))
// console.log(check(22,22,22))
// console.log(check(2,2,21))

// Exercise - 42
// function checkMode(x,y,z){
//     if(x<y && y<z){
//         return "Strict Mode";
//     }else if(x>=y && y<z){
//         return "Soft Mode";
//     }
// }

// console.log(checkMode(10,20,22))
// console.log(checkMode(21,20,22))
// console.log(checkMode(20,20,22))
// console.log(checkMode(11,20,22))

// Exercise - 43
// function digit(a, b, c) {
//     if (a > 0 && b > 0 && c > 0) {
//         if(a % 10 == b % 10 || a % 10 == c % 10 || b % 10 == c % 10){
//             return true
//         }else{
//             return false
//         }
//     }else{
//         return "negative number"
//     }
// }

// console.log(digit(10, 20, 30))
// console.log(digit(10, 20, 31))
// console.log(digit(10, 24, 35))
// console.log(digit(14, 24, -34))

// Exercise - 44
// function condition(a,b,c){
//     return (a>=20 && (a<b || a<c))||(b>=20 && (b<a || b<c))||(c>=20 && (c<a || b>c))  
// }

// console.log(condition(25,45,20));
// console.log(condition(15,15,20));
// console.log(condition(25,15,20));
// console.log(condition(20,45,20));

// Exercise - 45
// function check(a, b){
//     if(a == 15 || b == 15 || a+b == 15 || Math.abs(a-b) == 15){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(check(14, 29))
// console.log(check(10, 15))
// console.log(check(15, 20))
// console.log(check(6, 9))
// console.log(check(6, 5))

// Exercise - 46
// function multiple(a,b){
//     return ((a%7==0 && b%7!=0) || (a%7!=0 && b%7==0)) || ((a%11==0 && b%11!=0)||(a%11!=0&&b%11==0))
// }

// console.log(multiple(49,52))
// console.log(multiple(35,56))
// console.log(multiple(44,52))
// console.log(multiple(55,88))

// Exercise - 47
// function range(a,b,number){
//     if(number>=40 && number<=10000){
//         if(a<=number && number<=b){
//             return true
//         }else{
//             return false
//         }
//     }
//     else{
//         return false
//     }
// }
// console.log(range(40, 4000, 52));
// console.log(range(50, 5000, 45));
// console.log(range(60, 400, 80));

// Exercise - 48
// function reverse(str){
//     return str.split("").reverse().join('');
// }

// console.log(reverse("javascript"));
// console.log(reverse("python"));
// console.log(reverse("hemal"));

// Exercise - 49

// Exercise - 50
// function capitalize(str){
//     let string = str.split(" ");
//     for (let i = 0; i < string.length; i++){
//         string[i] = string[i][0].toUpperCase() + string[i].slice(1);
//     }
//     return string.join(" ")
// }

// console.log(capitalize("this is best"));
// console.log(capitalize("i am twenty one years old"));
// console.log(capitalize("i am from nava vaghaniya"));

// Exercise - 51
// function toHoursMins(num){
//     const hours = Math.floor(num/60);
//     const mins = num%60;
//     return `Hours : ${hours}, Minutes : ${mins}`;
// }
// console.log(toHoursMins(200))
// console.log(toHoursMins(368))
// console.log(toHoursMins(450))

// Exercise - 52
// function sorting(str){
//     str = str.split("");
//     str.sort();
//     return str.join("");
// }

// console.log(sorting("Javascript"))
// console.log(sorting("vaghaniya"))
// console.log(sorting("react"))

// Exercise - 53
// function ac_check(str, a, b){
//     const x = str.indexOf(a);
//     const y = str.indexOf(b);
//     return Math.abs(y-x) == 4;
// }

// console.log(ac_check("Javascipt", "J", "s"));
// console.log(ac_check("bharat", "h", "t"));
// console.log(ac_check("Javascipt", "v", "i"));

// Exercise - 54
// function vowels(str){
//     let count = 0
//     for(let i=0; i<str.length; i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//             count += 1
//         }
//     }
//     return count
// }

// console.log(vowels("javascript"))
// console.log(vowels("react"))
// console.log(vowels("node"))

// Exercise - 55
// function pnt(str){
//     let p_count = 0;
//     let t_count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str[i]=="p"){
//             p_count += 1
//         }
//     }
//     for(let i=0; i<str.length; i++){
//         if(str[i]=="t"){
//             t_count += 1
//         }
//     }
//     return p_count == t_count;
// }

// console.log(pnt("patpsd"))
// console.log(pnt("patptsd"))
// console.log(pnt("patpsptd"))

// Exercise - 57
// const repeat = (str, num) => {
//     let string = "";
//     for(let i = 0; i < num; i++){
//         string += str;
//     }
//     return string;
// }

// console.log(repeat("js", 5));
// console.log(repeat("heaven", 3));
// console.log(repeat("yudiz", 4));

// function repeat(str, num){
//     return str.repeat(num);
// }
// console.log(repeat("js", 5));
// console.log(repeat("heaven", 3));
// console.log(repeat("yudiz", 4));

// Exercise - 58
// function string(str){
//     const last3OfStr = str.slice(-3, );
//     if(str.length >= 3){
//         return last3OfStr.repeat(4);
//     }else{
//         return str;
//     }
// }

// console.log(string("javascript"));
// console.log(string("laptop"));
// console.log(string("angular"));
// console.log(string("hi"));

// Exercise - 59
// function firstHalf(str){
//     if(str.length % 2 == 0){
//         return str.slice(0, str.length/2);
//     }else{
//         return str;
//     }
// }

// console.log(firstHalf("javascript"));
// console.log(firstHalf("hemalp"));
// console.log(firstHalf("vue"));

// Exercise - 60
// function string(str){
//     const newStr = str.slice(1, -1);
//     return newStr;
// }

// console.log(string("javascript"))
// console.log(string("yudiz"))
// console.log(string("hemal"))

// Exercise - 61
// function conc(str1, str2){
//     return str1.slice(1) + str2.slice(1)
// }

// console.log(conc("java", "script"))
// console.log(conc("nava", "vaghaniya"))
// console.log(conc("hello", "javascript"))

// Exercise - 62
// function transfer(str){
//     if(str.length >= 3){
//         return str.slice(-3) + str.slice(0, -3);
//     }else{
//         return str;
//     }
// }

// console.log(transfer("javascript"));
// console.log(transfer("iskcon"));
// console.log(transfer("hemal_pansuriya"));

// Exercise - 63
// function middle(str){
//     let newStr;
//     let temp = (str.length - 3)/2;
//     if(str.length >= 3 && str.length % 2 == 1){
//         newStr = str.slice(temp, str.length-temp);
//         return newStr;
//     }else{
//         return str;
//     }
// }

// console.log(middle("Hemal"));
// console.log(middle("angular"));
// console.log(middle("react"));
// console.log(middle("javascript"));
// console.log(middle("abcdefghijklmno"));

// Exercise - 64
// function conc(str1, str2){
//     const diff = str1.length - str2.length;
//     if(str1.length == str2.length){
//         return str1 + str2;
//     }else{
//         if(diff > 0){
//             return str1.slice(0, str1.length-diff) + str2;
//         }else{
//             return str1 + str2.slice(0, str2.length+diff);
//         }
//     }
// }

// console.log(conc("java", "plus"));
// console.log(conc("java", "script"));
// console.log(conc("react", "js"));

///////or//////////or////////////or///////////or////////or//////////

// function conc(str1, str2){
//     const min = Math.min(str1.length, str2.length);
//     return str1.slice(str1.length - min) + str2.slice(str2.length - min) 
// }

// console.log(conc("java", "plus"));
// console.log(conc("java", "script"));
// console.log(conc("react", "js"));

// Exercise - 65
// function checkScript(str){
//     if(str.length >= 6 && str.slice(-6) == "Script"){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(checkScript("JavaScript"))
// console.log(checkScript("reactjs"))
// console.log(checkScript("TypeScript"))