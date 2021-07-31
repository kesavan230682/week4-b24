var fullname= "kesavan";
function sayHello(){
  // a local variable
  var myname = "kesavan";
  console.log("Hello " +myname);
  console.log("My full name is "+fullname );

}

sayHello();
console.log(fullname)


var a = "2";
var b = 1
var sum = a+b
//+in string is concatenation
//since my a is string so JS will concatenate with + instead of adding with +
console.log(sum)



function vowelCounter(sentences){
  var counter = 0;
  for (var i = 0; i < sentences.length; i++){
    if (sentences.charAt(i) =="a" || sentences.charAt(i)=="e" || sentences.charAt(i) =="o" || sentences.charAt(i)=="i" || sentences.charAt(i) == "u"){
      counter++
    }
  }
  
  return counter;
}
console.log (vowelCounter("Asia Developer Academy"));



function toLowercase(str){
  var sentences = str.toLowercase();
  var counter = 0;
  for (var i = 0; i < sentences.length; i++){
    if (sentences.charAt(i) =="a" || sentences.charAt(i)=="e" || sentences.charAt(i) =="o" || sentences.charAt(i)=="i" || sentences.charAt(i) == "u"){
      counter++
    }
  }
  
  return counter;
}
console.log (vowelCounter("Asia Developer Academy"));