// Declare a fuction

function sayHello(){
  console.log("Hello");
}

// Call or invoke a fuction

sayHello();
sayHello();
sayHello();

//Declaring a function with variable

function sayGoodbye(name){
  console.log(sayGoodbye +"name");
}
sayGoodbye("Ash");
sayGoodbye("Raj");
sayGoodbye("Syamil");


// fuction with 2 parameters with results
function sum(a,b){
  return a+b;
  
}
console.log(sum(2,3));
console.log(sum(4,8));



// function with result...( example of abstration if you need to use later )
function checkEven (number){
  if (number %2 == 0){
    return true;
  } else {
    return false;
  }
}
console.log(checkEven(4));

//function with multiple results

function areaVolume(width,length,height){
  return [ width * length, width*length*height];
}
console.log (areaVolume(3,4,5));





//Arrays
// A collection of items..
// I create an array of numbers, which is called scores..
var scores = [50,80,90,60,70];

//how many items are there in your array
console.log(scores.length);

//retrieving item number x....

// an array start with an idex 0... to retrieve the item, you will do scores(index)


console.log(scores[0]);

//go thru the array, retrieve the value from the array
//show it in the console...
for (var i=0; i< scores.length; i++){
  console.log(scores[i]);
}

//add an item at the end of the array
scores.push(50);
console.log(scores);

//remove the last item from an array
scores.pop();
console.log(scores);

scores.splice(1,1);
console.log(scores);






// exercise 1
var numberArray = [3,5,1,9,6,4,2];

function minMaxAvg(arr){
  var average = 0;
  var sum =0 ;
  // assume the first one is the smallest one
  var min = arr[0];
  var max = arr[0];
   for ( var i=0; i<arr.length; i++){
  sum+=arr[i];
  
  
}
 
  
average= sum/arr.length;
  
  for (var i =0 ; i < arr.length; i++){
    
    if (arr[i]<min){
      min=arr[i];
    }
  }
return [min , max, average]
}


document.write (minMaxAvg(numberArray));



// some importnt methods
//String

var newString ="Asia developer Academy";
console.log(newString.length);
console.log(newString.toUpperCase());
console.log(newString.toLowerCase());
console.log(newString.charAt(6));
console.log(newString.indexOf('ev'));
console.log(newString.lastIndexOf('e'));
document.write(newString.substring(5,14));
// transform a string into an array (aplit word by word)
console.log(newString.split(''));


// some important number methods

var number =1.234
document.write("<br/>");
document.write(number.toPrecision(2));
document.write("<br/>");
document.write(number.toFixed(2));



console.log(Math.round(number)); // 13 (nearest integer)
console.log(Math.ceil(number)); // 13
console.log(Math.floor(number)); // 12
document.write("<br/>");
document.write(number.toFixed(2));
document.write(Math.random());
document.write("<br/>");
document.write(Math.ceil(Math.random()*100));