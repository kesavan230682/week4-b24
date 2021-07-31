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
  for (var i=0; i<arr.length; i++){
    
    if (arr[i] > max){
      max = arr[i];
    }
  }
return [min , max, average]
}


document.write (minMaxAvg(numberArray));