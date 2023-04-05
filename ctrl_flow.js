// Arrays3
// Write a function that accepts an array of strings and console.log each element using a for loop.
function acceptString(str){
    for(let s= 0; s < str.length; s++){
        console.log(str[s]);
    }

}
let anthArray = ["Buggatti","Tesla","Wrangler","Subaru"];
acceptString(anthArray)


// Write a function that accepts an array of numbers and uses the 
// forEach() method to console.log each number multiplied by 2.
function numArray(num){
    num.forEach(function(one){
        console.log(one  * 2);
    });
}
let oneArray = [2,4,6,8,10,12,14,16];
numArray(oneArray);


// Write a function that takes in an array of numbers and consoles the first four 
// items multiplied by 8 and the last two added by 5. Console the array with the new values

function firstArray(arr){
    for(let f = 0; f< 4 && f< arr.length; f++){
        arr[f] *= 8;
    }
    
    if(arr.length >= 2){
        arr[arr.length -2] += 5;
        arr[arr.length -1] += 5;

    }
    console.log(arr)
}
let manyArray = [3,5,7,9,11,13,17];
firstArray(manyArray);


// Write a function that takes in the following array and use a while loop to iterate
//  and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
function forthIndex(f4th){
    let fth = 0;
    while(fth < f4th.length){
        if(fth === 4){
            break;
        }
        console.log(f4th[fth]);
        fth ++;
    }
}
let arrNum = [1,2,3,4,5,6,7,8,9];
forthIndex(arrNum);


// Write a function that takes in a an array of strings and use a 
// continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruitArray(fru){
    for(let q = 0; q< fru.length; q++){
        if(q == 2){
            continue;
        }
        console.log(fru[q]);
    }

}
let fruits= ['apple','plum','banana','strawberries','kiwi'];
fruitArray(fruits);


