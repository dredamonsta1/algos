
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


// Eliminate Negative Numbers
var arr = [1,5, -10, -2];
for (var x = 0; x<arr.length; x++){
  if (arr[x] < 0 ){
      arr[x] = arr[x] - arr[x];
  }

}
console.log(arr);


// max min avg**************


var x = [1, 5, 10, -2];
var max = x[0];
var min = x[0];
var sum = 0;
sum = sum + x[0];
for(var i=0; i<x.length; i++)
{
  if(x[i] > max)
  {
    max =x[i];
  }
  if(x[i] < min)
  {
    min = x[i];
  }
  sum = sum + x[i];
}
console.log('max is', max);
console.log('min is', min);
console.log('average is', sum/x.length);


// Shifting the values in the array**************

var a = [1,5, 10, 7, -2];
var b = a.shift();
var b = a.push(0);

console.log(a); // [2, 3]
console.log(b); // 1

// *******************************better
x = [1, 5, 10, 7, -2];
for(var i = 0; i<x.length-1; i++)
{
    x[i] = x[i+1];
}
x[x.length-1] = 0;
console.log (x);


// number to string*******************

var n = [-1, -3, 2]
for ( i = 0; i<n.length-1; i++)
{
  if (n[i] < 0);{
    n[i] = "dojo";
  }

}
console.log (n);


// random array*******************

var arr=[];
for (var i=0; i<10; i++)
{
  var random_int = Math.floor(Math.random()*101);
  arr.push(random_int);
}
console.log(arr);

// swapping two values***************************
var x = [2, 3, 5, 7, 6];
var first = x[0];
var last = arr.length - 1;
var temp = x[0];{
x[0] = x[x.length -1];
x[x.length-1] = temp;

}
console.log(x);




// Reversing***********************
var x = [-3,5,1,3,2,10];
x = [3,5,1,3,2,10];
var temp = x[0];
var temp1 = x[1];
var temp2 = x[2];
x[0] = x[x.length-1];
x[x.length-1] = temp;

x[1] = x[4];            // x[1] = 2
x[4] =temp1;            // x[4] = 5
x[2] = x[3];            // x[2] = 3
x[3] = temp2;           // x[3] =
console.log(x);


// ****************************************better
var x = [-3, 5, 1, 7, 3, 2, 10];
for(var i = 0; i<Math.floor(x.length/2); i++){
var temp = x[i];
x[i] = x[x.length - 1 - i];
x[x.length - 1 - i] = temp;
}
console.log(x);
