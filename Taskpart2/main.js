//task 1

// Correct the syntax error
//  [ 1,7, 9 , 45];

//  ["Str" , "alex","moh"]

//  ['the','fox' , 'over' , 'lazy', 'dog'  ]

//task 2

// 2
// What the index of "Banana","Tomato"
//  var fruits=["Tomato","Banana","Watermelon"]
// let tomatoIndex=fruits.indexOf("Tomato");
// let bananaIndex=fruits.indexOf("Banana");

// console.log(tomatoIndex+" "+bananaIndex);

//task 3

// let array=["Cheese","Yoghurt","Sandwich","Pancake","Butter","Cheese","Yoghurt","Sandwich","Fast & Furious","Lethal Weapon 4","Die Hard","Die Hard"];

//task4

// function firstOfArray(arr) {
//     return arr[0];
// }
// let arr=[12,3,45,6,7];
// let firstE=firstOfArray(arr);
// console.log(firstE);

//task5
// let arr=[12,3,45,6,7];

// function lastOfArray(arr) {
//     return arr[arr.length-1];
// }

// let firstE=lastOfArray(arr);
//  console.log(firstE);

//task6

// var array = [0,5,7,9]
// array.push(10);
// array.shift();
// array.shift();
// array.shift();
// array.unshift(8);
// array.unshift(6);
// array.unshift(4);
// array.unshift(3);
// array.unshift(1);

// console.log(array);

//task7
// var array2 = [5,9,-7,3.5]
// array2.push(10);
// array2.unshift(2);
// array2.shift();
// array2.pop();
// console.log(array2); // [5, 9, -7, 3.5]

//task 8

// let arr =[1,2,3,4,5,6,7,8,9,10];

// function middleOfArray(arr) {
//   if (arr.length % 2 == 0) {

//     return `${arr[Math.floor(arr.length / 2)]}  ${arr[Math.floor((arr.length / 2) - 1)]}`;
//   } else {
//     return `${arr[Math.floor(arr.length / 2)]}`;
//   }
// }
// console.log(middleOfArray(arr));

//task 9

// let animals;
// animals[0]="cat";
// animals[1]="ele";
// animals[2]="bird";
// animals[3]="zebra";
// animals[4]="zebra";

//task10

// var nums= [1,2,3,8,9];
// function indexOfArray(nums,index)
// {
//     return nums[index];
// }

// console.log(indexOfArray(nums,3));

// task 11

// var nums= [1,2,3,8,9]

// function arrayExceptLast(arr)
// {
//     arr.pop();
//     return nums;
// }

//task 12
// var nums= [1,2,3,8,9];
// function addToEnd(arr)
// {
//     arr.pop();
//     arr.push(55);
//     return arr;
// }

// console.log(addToEnd(nums));

//task 13

// function sumArray(array)
// {
//     let sum;
//     for (let index = 0; index < array.length; index++) {
//         sum+=array[index];
//     }
//     return sum;
// }

//task14

// function minInArray(array) {
//     let min=array[0];
//     for (let index = 0; index < array.length; index++) {
//         if(min>array[index]){
//             min=array[index];
//         }

//     }
//    return min;
// }

// var nums= [1,2,3,8,9];
// console.log(minInArray(nums));

// task 15

// let nums= [1,2,3,8,9];
// let count=0;
// function removeFromArray(array,el){
//     let newArray=[];
//     for (let index = 0; index < array.length; index++) {
//         if(array[index] !== el){
//             newArray[count]=array[index];
//             count++;
//         }

//     }
//     return newArray;
// }

//  console.log(removeFromArray(nums,9));

//task 16
// var nums= [1,2,3,8,9];
// var oddElements=[];
// let count=0;
// function oddArray(array) {
//     for (let index = 0; index < array.length; index++) {
//         if(array[index] %2 !==0){
//         oddElements[count]=array[index];
//         count++;
//         }
//     }
//     return oddElements;
// }
// console.log(oddArray(nums));

// task17

// var nums= [1,2,3,8,9];
// let sum=0;
// function aveArray(array) {
//     for (let index = 0; index < array.length; index++) {
//        sum+=array[index];
//     }
//     return sum/array.length;
// }
// console.log(aveArray(nums));

//task 18
// var strings= ["alex","mercer","as","rashed2","al","hala"];
// function shorterInArray(array)
// {
//     let str=strings[0];
//     for (let index = 0; index < array.length; index++) {
//         if(str.length>array[index].length)
//             {
//                 str=array[index];
//             }
//     }
//     return str;
// }
// console.log(shorterInArray(strings));

//task 19
// var string= "alex mercer madrasa rashed2 emad hala"
// let count=0;
// function repeatChar(str,ch) {

//     for (let index = 0; index < str.length; index++) {
//         if(str[index]==ch){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(repeatChar(string,'m'));

//task 20
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
// let evenIndexOddLengthh="";
// function evenIndexOddLength(array) {

//     for (let i = 0; i < array.length; i++) {

//             if(i %2 ==0){
//                 if(array[i].length %2 !==0){
//                     evenIndexOddLengthh+=array[i];
//                 }

//         }

//     }
//     return evenIndexOddLengthh;
// }
// console.log(evenIndexOddLength(strings));

// task 21

// var nums= [44, 5, 4, 3, 2, 10];

// function powerElementIndex(array) {
//     let newArray=[];
//     for (let index = 0; index < array.length; index++) {
//             newArray[index]=Math.pow(array[index],index);
//     }
//     return newArray;
// }

// console.log(powerElementIndex(nums));

// task 22

// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// let newNums=[];
// let count=0
// function evenNumberEvenIndex(array) {
//     for (let index = 0; index < array.length; index++) {
//             if (index%2==0) {
//                 if (array[index]%2==0) {
//                     newNums[count]=nums[index];
//                     count++;
//                 }
//             }

//     }
//     return newNums;
// }

// console.log(evenNumberEvenIndex(nums));
