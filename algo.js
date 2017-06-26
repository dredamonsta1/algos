
// print 1-255 ********

for (var x = 1; x <= 255; x++){
console.log (x);
}

// odd numbers ********
for (var x = 1; x <= 1000; x= x+2){
  console.log(x);
}
        // or
for (var x = 0; x<= 1000; x++){
  if(x%2==1){
    console.log(x);
  }
}

// sum of all odd 1 - 5000**********

var sum =0;
for(var i=1; i<5000; i=i+2){
  sum = sum + i;
}
console.log(sum);

// iterate array***********

var x = [1,21,3,4,5];
for (var i = 0; i<x.length; i++){
console.log(x);
}
