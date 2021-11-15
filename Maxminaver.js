function maxMinAvg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = 0 ;
 arr.forEach(function(value){
     if(value > max)
       max = value;
     if(value < min)
       min = value;
     sum +=value;
 })
 var avg = sum/arr.length;
return [max,min,avg];
}