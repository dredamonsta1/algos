
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

var sum =0;
for(var i=0; i<5000; i++){
  if (i%2==1);
  sum = sum + i;
}
console.log(sum);


// iterate array***********

var x = [1,21,3,4,5];
for (var i = 0; i<x.length; i++){
console.log(x);
}

// max***************
var arr=[-3, 3, 5, 70, 10];
var max= arr[0];
for (var x=1; x<arr.length; x++){
    if(arr[x] > max){                    //if(3 > -3)    => if(arr[0] > max)
        max = arr[x];                    // max = arr[1] => max = 3
    }
}
console.log (max)

// Assignment: Find Average***************
// Find average
var arr = [1,3,5,7,20];
var sum = 0;                                        // sum = 36
for (var x=0;x<arr.length;x++){
    sum = sum + arr[x]        //sum += arr[x]    => sum = 16 + arr[4] => sum = 16 + 20 => sum = 36
}
console.log(sum/arr.length);    // 36/5

// array odd numbers****************
var y =[];
for(var i=1; i<=255; i= i+2)
{
  y.push(i);
}
console.log(y);



// var y = [];
// for (var x=1;x<=256;x++){
//   if(x%2==1){
//     y.push(x);
//     console.log(x);
//   }
// }


function greaterThanY(y){
    var arr = [1,3,5,7];

    var count = 0;
    for(var x=0;x<arr.length;x++){
        if(arr[x] > y){
          count++;
        }
    }
    console.log(count);
}
greaterThanY(1);

// square the values

var arr = [1, 5, 10, 3];
for (var i = 0; i<arr.length; i++){
  arr[i] = arr[i] * arr[i];
}
console.log (arr);
