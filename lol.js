
var bias = 1;
var alpha = 1;

var W = [
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,
0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,

];
var Y = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var I = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


var total_data = 18;
var count = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var W_1 = [];
var W_2 = [];
var W_3 = [];
var TrainingData = 0;
var m = 0;
var N = 3;// this represents which output u want to see....for eg. if u want to see the output of the second training data then put value of it to 2

console.log(AI(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0));// the inputs u give

function AI(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a18,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b18,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c18,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30){

do{
  do{

var o = [];

  // this training data is not correct and is just an example
  if(TrainingData == 0 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 1 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 2 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 3 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 4 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 5 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 6 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 7 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 8 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 9 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 10 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 11 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 12 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 13 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 14 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 15 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 16 && m == 0){I = [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 17 && m == 0){I = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a18,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30];}

  // this training data is not correct and is just an example
  if(TrainingData == 0 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 1 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 2 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 3 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 4 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 5 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 6 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 7 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 8 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 9 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 10 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 11 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 12 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 13 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 14 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 15 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 16 && m == 1){I = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 17 && m == 1){I = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b18,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30];}

  // this training data is not borrect and is just an example
  if(TrainingData == 0 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 1 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 2 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 3 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 4 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 5 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 6 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 7 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 8 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 9 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 10 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 11 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 12 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 13 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 14 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 15 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 16 && m == 2){I = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Y =[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];}
  if(TrainingData == 17 && m == 2){I = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c18,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30];}

  var ha= HL(W,I);count++;
  var hb = HL(W,I);count++;
  var hc = HL(W,I);count++;
  var hd = HL(W,I);count++;
  var he = HL(W,I);count++;
  var hf = HL(W,I);count++;
  var hg = HL(W,I);count++;
  var hh = HL(W,I);count++;
  var hi = HL(W,I);count++;
  var hj = HL(W,I);count++;
  var hk = HL(W,I);count++;
  var hl = HL(W,I);count++;
  var hm = HL(W,I);count++;
  var hn = HL(W,I);count++;
  var ho = HL(W,I);count++;
  var hp = HL(W,I);count++;
  var hq = HL(W,I);count++;
  var hr = HL(W,I);count++;
  var hs = HL(W,I);count++;
  var ht = HL(W,I);count++;
  var hu = HL(W,I);count++;
  var hv = HL(W,I);count++;
  var hw = HL(W,I);count++;
  var hx = HL(W,I);count = 0;

var HLinputs = [ha,hb,hc,hd,he,hf,hg,hh,hi,hj,hk,hl,hm,hn,ho,hp,hq,hr,hs,ht,hu,hv,hw,hx];

var SigmoidHL = [];
for (let c = 0; c < 24 ; c++) {
SigmoidHL.push(S(HLinputs[c]));
}
//all outputs
var o1 = [];
for (let d = 0; d < 30; d++) {
  o1.push((W[d+720]*SigmoidHL[0]+W[d+720+30]*SigmoidHL[1]+W[d+720+30+30]*SigmoidHL[2]+W[d+810]*SigmoidHL[3]+W[d+840]*SigmoidHL[4]+W[d+870]*SigmoidHL[5]+W[d+900]*SigmoidHL[6] +W[d+930]*SigmoidHL[7] +W[d+960]*SigmoidHL[8] +W[d+990]*SigmoidHL[9] +W[d+1020]*SigmoidHL[10] +W[d+1050]*SigmoidHL[11] +W[d+1080]*SigmoidHL[12] +W[d+1110]*SigmoidHL[13] +W[d+1140]*SigmoidHL[14] +W[d+1170]*SigmoidHL[15] +W[d+1200]*SigmoidHL[16] +W[d+1230]*SigmoidHL[17] +W[d+1260]*SigmoidHL[18] +W[d+1290]*SigmoidHL[19] +W[d+1320]*SigmoidHL[20] +W[d+1350]*SigmoidHL[21] +W[d+1380]*SigmoidHL[22] +W[d+1410]*SigmoidHL[23])+bias);
}
// all outputs sigmoided

for(let e  = 0; e < 30; e++) {
  o.push(S(o1[e]));
}

//error at any one output
var E = [];
for(let f  = 0;f < 30; f++){
 E.push((o[f]-Y[f])**2);
}

//total error
var E_total = 0;
E_total = (0.5)*(E[0]+E[1]+E[2]+E[3]+E[4]+E[5]+E[6]+E[7]+E[8]+E[9]+E[10]+E[11]+E[12]+E[13]+E[14]+E[15]+E[16]+E[17]+E[18]+E[19]+E[20]+E[21]+E[22]+E[23]+E[24]+E[25]+E[26]+E[27]+E[28]+E[29]);
// output connections backpropergation

var OE1 = [];OutputError();count4++;var OE2= [];OutputError();count4++;
var OE3 = [];OutputError();count4++;var OE4 = [];OutputError();count4++;
var OE5 = [];OutputError();count4++;var OE6 = [];OutputError();count4++;
var OE7 = [];OutputError();count4++;var OE8 = [];OutputError();count4++;
var OE9 = [];OutputError();count4++;var OE10 = [];OutputError();count4++;
var OE11 = [];OutputError();count4++;var OE12 = [];OutputError();count4++;
var OE13 = [];OutputError();count4++;var OE14 = [];OutputError();count4++;
var OE15 = [];OutputError();count4++;var OE16 = [];OutputError();count4++;
var OE17 = [];OutputError();count4++;var OE18 = [];OutputError();count4++;
var OE19 = [];OutputError();count4++;var OE20 = [];OutputError();count4++;
var OE21 = [];OutputError();count4++;var OE22 = [];OutputError();count4++;
var OE23 = [];OutputError();count4++;var OE24 = [];OutputError();count4 = 0;

// input connections cackpropergation

var Ia = [];IE(Ia);count2 = count2 + 1;
var Ib = [];IE(Ib);count2 = count2 + 1;
var Ic = [];IE(Ic);count2 = count2 + 1;
var Id = [];IE(Id);count2 = count2 + 1;
var Ie = [];IE(Ie);count2 = count2 + 1;
var If = [];IE(If);count2 = count2 + 1;
var Ig = [];IE(Ig);count2 = count2 + 1;
var Ih = [];IE(Ih);count2 = count2 + 1;
var Ii = [];IE(Ii);count2 = count2 + 1;
var Ij = [];IE(Ij);count2 = count2 + 1;
var Ik = [];IE(Ik);count2 = count2 + 1;
var Il = [];IE(Il);count2 = count2 + 1;
var Im = [];IE(Im);count2 = count2 + 1;
var In = [];IE(In);count2 = count2 + 1;
var Io = [];IE(Io);count2 = count2 + 1;
var Ip = [];IE(Ip);count2 = count2 + 1;
var Iq = [];IE(Iq);count2 = count2 + 1;
var Ir = [];IE(Ir);count2 = count2 + 1;
var Is = [];IE(Is);count2 = count2 + 1;
var It = [];IE(It);count2 = count2 + 1;
var Iu = [];IE(Iu);count2 = count2 + 1;
var Iv = [];IE(Iv);count2 = count2 + 1;
var Iw = [];IE(Iw);count2 = count2 + 1;
var Ix = [];IE(Ix);count2 = 0;

var AH0 = Sum(Ia);var AH1 = Sum(Ib);
var AH2 = Sum(Ic);var AH3 = Sum(Id);
var AH4 = Sum(Ie);var AH5 = Sum(If);
var AH6 = Sum(Ig);var AH7 = Sum(Ih);
var AH8 = Sum(Ii);var AH9 = Sum(Ij);
var AH10 = Sum(Ik);var AH11 = Sum(Il);
var AH12 = Sum(Im);var AH13 = Sum(In);
var AH14 = Sum(Io);var AH15 = Sum(Ip);
var AH16 = Sum(Iq);var AH17 = Sum(Ir);
var AH18 = Sum(Is);var AH19 = Sum(It);
var AH20 = Sum(Iu);var AH21 = Sum(Iv);
var AH22 = Sum(Iw);var AH23 = Sum(Ix);

var Ahl =[AH0,AH1,AH2,AH3,AH4,AH5,AH6,AH7,AH8,AH9,AH10,AH11,AH12,AH13,AH14,AH15,AH16,AH17,AH18,AH19,AH20,AH21,AH22,AH23];

var Bhl = [];
for(let h = 0; h<24; h++){Bhl.push(SigmoidHL[h]*(1-SigmoidHL[h]));}

var InputErrorH0 = [];InputErrors(InputErrorH0);count3++;
var InputErrorH1 = [];InputErrors(InputErrorH1);count3++;
var InputErrorH2 = [];InputErrors(InputErrorH2);count3++;
var InputErrorH3 = [];InputErrors(InputErrorH3);count3++;
var InputErrorH4 = [];InputErrors(InputErrorH4);count3++;
var InputErrorH5 = [];InputErrors(InputErrorH5);count3++;
var InputErrorH6 = [];InputErrors(InputErrorH6);count3++;
var InputErrorH7 = [];InputErrors(InputErrorH7);count3++;
var InputErrorH8 = [];InputErrors(InputErrorH8);count3++;
var InputErrorH9 = [];InputErrors(InputErrorH9);count3++;
var InputErrorH10 = [];InputErrors(InputErrorH10);count3++;
var InputErrorH11 = [];InputErrors(InputErrorH11);count3++;
var InputErrorH12 = [];InputErrors(InputErrorH12);count3++;
var InputErrorH13 = [];InputErrors(InputErrorH13);count3++;
var InputErrorH14 = [];InputErrors(InputErrorH14);count3++;
var InputErrorH15 = [];InputErrors(InputErrorH15);count3++;
var InputErrorH16 = [];InputErrors(InputErrorH16);count3++;
var InputErrorH17 = [];InputErrors(InputErrorH17);count3++;
var InputErrorH18 = [];InputErrors(InputErrorH18);count3++;
var InputErrorH19 = [];InputErrors(InputErrorH19);count3++;
var InputErrorH20 = [];InputErrors(InputErrorH20);count3++;
var InputErrorH21 = [];InputErrors(InputErrorH21);count3++;
var InputErrorH22 = [];InputErrors(InputErrorH22);count3++;
var InputErrorH23 = [];InputErrors(InputErrorH23);count3 = 0;

var Wn0 = [];var Wn1 = [];
var Wn2 = [];var Wn25 = [];
var Wn3 = [];var Wn26 = [];
var Wn4 = [];var Wn27 = [];
var Wn5 = [];var Wn28 = [];
var Wn6 = [];var Wn29 = [];
var Wn7 = [];var Wn30 = [];
var Wn8 = [];var Wn31 = [];
var Wn9 = [];var Wn32 = [];
var Wn10 = [];var Wn33 = [];
var Wn11 = [];var Wn34 = [];
var Wn12 = [];var Wn35 = [];
var Wn13 = [];var Wn36 = [];
var Wn14 = [];var Wn37 = [];
var Wn15 = [];var Wn38 = [];
var Wn16 = [];var Wn39 = [];
var Wn17 = [];var Wn40 = [];
var Wn18 = [];var Wn41 = [];
var Wn19 = [];var Wn42 = [];
var Wn20 = [];var Wn43 = [];
var Wn21 = [];var Wn44 = [];
var Wn22 = [];var Wn45 = [];
var Wn23 = [];var Wn46 = [];
var Wn24 = [];var Wn47 = [];

for (let x = 0; x <30 ; x++) {

    Wn0.push(W[x+720]-(alpha*OE1[x]));
    Wn1.push(W[x+750]-(alpha*OE2[x]));
    Wn2.push(W[x+780]-(alpha*OE3[x]));
    Wn3.push(W[x+810]-(alpha*OE4[x]));
    Wn4.push(W[x+840]-(alpha*OE5[x]));
    Wn5.push(W[x+870]-(alpha*OE6[x]));
    Wn6.push(W[x+900]-(alpha*OE7[x]));
    Wn7.push(W[x+930]-(alpha*OE8[x]));
    Wn8.push(W[x+960]-(alpha*OE9[x]));
    Wn9.push(W[x+990]-(alpha*OE10[x]));
    Wn10.push(W[x+1020]-(alpha*OE11[x]));
    Wn11.push(W[x+1050]-(alpha*OE12[x]));
    Wn12.push(W[x+1080]-(alpha*OE13[x]));
    Wn13.push(W[x+1110]-(alpha*OE14[x]));
    Wn14.push(W[x+1140]-(alpha*OE15[x]));
    Wn15.push(W[x+1170]-(alpha*OE16[x]));
    Wn16.push(W[x+1200]-(alpha*OE17[x]));
    Wn17.push(W[x+1230]-(alpha*OE18[x]));
    Wn18.push(W[x+1260]-(alpha*OE19[x]));
    Wn19.push(W[x+1290]-(alpha*OE20[x]));
    Wn20.push(W[x+1320]-(alpha*OE21[x]));
    Wn21.push(W[x+1350]-(alpha*OE22[x]));
    Wn22.push(W[x+1380]-(alpha*OE23[x]));
    Wn23.push(W[x+1410]-(alpha*OE24[x]));

    Wn24.push(W[x+00]-(alpha*InputErrorH0[x]));
    Wn25.push(W[x+30]-(alpha*InputErrorH1[x]));
    Wn26.push(W[x+60]-(alpha*InputErrorH2[x]));
    Wn27.push(W[x+90]-(alpha*InputErrorH3[x]));
    Wn28.push(W[x+120]-(alpha*InputErrorH4[x]));
    Wn29.push(W[x+150]-(alpha*InputErrorH5[x]));
    Wn30.push(W[x+180]-(alpha*InputErrorH6[x]));
    Wn31.push(W[x+210]-(alpha*InputErrorH7[x]));
    Wn32.push(W[x+240]-(alpha*InputErrorH8[x]));
    Wn33.push(W[x+270]-(alpha*InputErrorH9[x]));
    Wn34.push(W[x+300]-(alpha*InputErrorH10[x]));
    Wn35.push(W[x+330]-(alpha*InputErrorH11[x]));
    Wn36.push(W[x+360]-(alpha*InputErrorH12[x]));
    Wn37.push(W[x+390]-(alpha*InputErrorH13[x]));
    Wn38.push(W[x+420]-(alpha*InputErrorH14[x]));
    Wn39.push(W[x+450]-(alpha*InputErrorH15[x]));
    Wn40.push(W[x+480]-(alpha*InputErrorH16[x]));
    Wn41.push(W[x+510]-(alpha*InputErrorH17[x]));
    Wn42.push(W[x+540]-(alpha*InputErrorH18[x]));
    Wn43.push(W[x+570]-(alpha*InputErrorH19[x]));
    Wn44.push(W[x+600]-(alpha*InputErrorH20[x]));
    Wn45.push(W[x+630]-(alpha*InputErrorH21[x]));
    Wn46.push(W[x+660]-(alpha*InputErrorH22[x]));
    Wn47.push(W[x+690]-(alpha*InputErrorH23[x]));
}

for(let y = 0; y < 30; y++){
//input weight correcting
W[y+00] = Wn24[y];
W[y+30] = Wn25[y];
W[y+60] = Wn26[y];
W[y+90] = Wn27[y];
W[y+120] = Wn28[y];
W[y+150] = Wn29[y];
W[y+180] = Wn30[y];
W[y+210] = Wn31[y];
W[y+240] = Wn32[y];
W[y+270] = Wn33[y];
W[y+300] = Wn34[y];
W[y+330] = Wn35[y];
W[y+360] = Wn36[y];
W[y+390] = Wn37[y];
W[y+420] = Wn38[y];
W[y+450] = Wn39[y];
W[y+480] = Wn40[y];
W[y+510] = Wn41[y];
W[y+540] = Wn42[y];
W[y+570] = Wn43[y];
W[y+600] = Wn44[y];
W[y+630] = Wn45[y];
W[y+660] = Wn46[y];
W[y+690] = Wn47[y];
// output weight correcting
W[y+720] = Wn0[y];
W[y+750] = Wn1[y];
W[y+780] = Wn2[y];
W[y+810] = Wn3[y];
W[y+840] = Wn4[y];
W[y+870] = Wn5[y];
W[y+900] = Wn6[y];
W[y+930] = Wn7[y];
W[y+960] = Wn8[y];
W[y+990] = Wn9[y];
W[y+1020] = Wn10[y];
W[y+1050] = Wn11[y];
W[y+1080] = Wn12[y];
W[y+1110] = Wn13[y];
W[y+1140] = Wn14[y];
W[y+1170] = Wn15[y];
W[y+1200] = Wn16[y];
W[y+1230] = Wn17[y];
W[y+1260] = Wn18[y];
W[y+1290] = Wn19[y];
W[y+1320] = Wn20[y];
W[y+1350] = Wn21[y];
W[y+1380] = Wn22[y];
W[y+1410] = Wn23[y];
}


TrainingData++;
console.log("Error total",E_total);

}while(TrainingData<total_data);

TrainingData = 0;
console.log(m);

if(m == 0){
  for(let x= 0; x < 1440; x++){
 W_1[x] = W[x]
}}// saves the first TrainingData weights

if(m == 1){
  for(let x= 0; x < 1440; x++){
 W_2[x] = W[x]
}}// saves the first TrainingData weights

m++;

if(m<3){
  for(let x= 0; x < 1440; x++){
W[x] = 0.05;
}}//resets the TrainingData weights

}while(m < N)

for(let x= 0; x < 1440; x++){
  W_3[x]=W[x]
}// saves the 2 TrainingData weights

m = 0;

// these functions will ce outside do-while loop.

function HL(W,I){
  let Zero = 0;
  for (let a = 0; a < 30 ; a++) {
    if(count == 0){Zero = Zero + W[a*24+0]*I[a];}
    if(count == 1){Zero = Zero + W[a*24+1]*I[a];}
    if(count == 2){Zero = Zero + W[a*24+2]*I[a];}
    if(count == 3){Zero = Zero + W[a*24+3]*I[a];}
    if(count == 4){Zero = Zero + W[a*24+4]*I[a];}
    if(count == 5){Zero = Zero + W[a*24+5]*I[a];}
    if(count == 6){Zero = Zero + W[a*24+6]*I[a];}
    if(count == 7){Zero = Zero + W[a*24+7]*I[a];}
    if(count == 8){Zero = Zero + W[a*24+8]*I[a];}
    if(count == 9){Zero = Zero + W[a*24+9]*I[a];}
    if(count == 10){Zero = Zero + W[a*24+10]*I[a];}
    if(count == 11){Zero = Zero + W[a*24+11]*I[a];}
    if(count == 12){Zero = Zero + W[a*24+12]*I[a];}
    if(count == 13){Zero = Zero + W[a*24+13]*I[a];}
    if(count == 14){Zero = Zero + W[a*24+14]*I[a];}
    if(count == 15){Zero = Zero + W[a*24+15]*I[a];}
    if(count == 16){Zero = Zero + W[a*24+16]*I[a];}
    if(count == 17){Zero = Zero + W[a*24+17]*I[a];}
    if(count == 18){Zero = Zero + W[a*24+18]*I[a];}
    if(count == 19){Zero = Zero + W[a*24+19]*I[a];}
    if(count == 20){Zero = Zero + W[a*24+20]*I[a];}
    if(count == 21){Zero = Zero + W[a*24+21]*I[a];}
    if(count == 22){Zero = Zero + W[a*24+22]*I[a];}
    if(count == 23){Zero = Zero + W[a*24+23]*I[a];}
}
  return Zero + bias;
}
function S(x){
let a = 1/(1+(Math.pow(Math.E,-x)));
return a;
}
function IE(x){
  for (let a = 0; a < 30 ; a++) {
    if(count2 == 0){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+720]);}
    if(count2 == 1){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+750]);}
    if(count2 == 2){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+780]);}
    if(count2 == 3){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+810]);}
    if(count2 == 4){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+840]);}
    if(count2 == 5){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+870]);}
    if(count2 == 6){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+900]);}
    if(count2 == 7){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+930]);}
    if(count2 == 8){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+960]);}
    if(count2 == 9){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+990]);}
    if(count2 == 10){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1020]);}
    if(count2 == 11){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1050]);}
    if(count2 == 12){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1080]);}
    if(count2 == 13){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1110]);}
    if(count2 == 14){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1140]);}
    if(count2 == 15){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1170]);}
    if(count2 == 16){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1200]);}
    if(count2 == 17){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1230]);}
    if(count2 == 18){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1260]);}
    if(count2 == 19){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1290]);}
    if(count2 == 20){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1320]);}
    if(count2 == 21){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1350]);}
    if(count2 == 22){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1380]);}
    if(count2 == 23){x.push((o[a]-Y[a])*(o[a]*(1-o[a]))*W[a+1410]);}
}
}
function Sum(x){
  let Zero = 0;
  for(let a = 0; a < 24; a++ ){
    Zero = Zero + x[a];
  }
  return Zero;
}
function InputErrors(){
  if(count3 == 0){for(let a = 0; a < 30; a++){InputErrorH0.push(Ahl[0]*Bhl[0]*I[a]);}}
  if(count3 == 1){for(let a = 0; a < 30; a++){InputErrorH1.push(Ahl[1]*Bhl[1]*I[a]);}}
  if(count3 == 2){for(let a = 0; a < 30; a++){InputErrorH2.push(Ahl[2]*Bhl[2]*I[a]);}}
  if(count3 == 3){for(let a = 0; a < 30; a++){InputErrorH3.push(Ahl[3]*Bhl[3]*I[a]);}}
  if(count3 == 4){for(let a = 0; a < 30; a++){InputErrorH4.push(Ahl[4]*Bhl[4]*I[a]);}}
  if(count3 == 5){for(let a = 0; a < 30; a++){InputErrorH5.push(Ahl[5]*Bhl[5]*I[a]);}}
  if(count3 == 6){for(let a = 0; a < 30; a++){InputErrorH6.push(Ahl[6]*Bhl[6]*I[a]);}}
  if(count3 == 7){for(let a = 0; a < 30; a++){InputErrorH7.push(Ahl[7]*Bhl[7]*I[a]);}}
  if(count3 == 8){for(let a = 0; a < 30; a++){InputErrorH8.push(Ahl[8]*Bhl[8]*I[a]);}}
  if(count3 == 9){for(let a = 0; a < 30; a++){InputErrorH9.push(Ahl[9]*Bhl[9]*I[a]);}}
  if(count3 == 10){for(let a = 0; a < 30; a++){InputErrorH10.push(Ahl[10]*Bhl[10]*I[a]);}}
  if(count3 == 11){for(let a = 0; a < 30; a++){InputErrorH11.push(Ahl[11]*Bhl[11]*I[a]);}}
  if(count3 == 12){for(let a = 0; a < 30; a++){InputErrorH12.push(Ahl[12]*Bhl[12]*I[a]);}}
  if(count3 == 13){for(let a = 0; a < 30; a++){InputErrorH13.push(Ahl[13]*Bhl[13]*I[a]);}}
  if(count3 == 14){for(let a = 0; a < 30; a++){InputErrorH14.push(Ahl[14]*Bhl[14]*I[a]);}}
  if(count3 == 15){for(let a = 0; a < 30; a++){InputErrorH15.push(Ahl[15]*Bhl[15]*I[a]);}}
  if(count3 == 16){for(let a = 0; a < 30; a++){InputErrorH16.push(Ahl[16]*Bhl[16]*I[a]);}}
  if(count3 == 17){for(let a = 0; a < 30; a++){InputErrorH17.push(Ahl[17]*Bhl[17]*I[a]);}}
  if(count3 == 18){for(let a = 0; a < 30; a++){InputErrorH18.push(Ahl[18]*Bhl[18]*I[a]);}}
  if(count3 == 19){for(let a = 0; a < 30; a++){InputErrorH19.push(Ahl[19]*Bhl[19]*I[a]);}}
  if(count3 == 20){for(let a = 0; a < 30; a++){InputErrorH20.push(Ahl[20]*Bhl[20]*I[a]);}}
  if(count3 == 21){for(let a = 0; a < 30; a++){InputErrorH21.push(Ahl[21]*Bhl[21]*I[a]);}}
  if(count3 == 22){for(let a = 0; a < 30; a++){InputErrorH22.push(Ahl[22]*Bhl[22]*I[a]);}}
  if(count3 == 23){for(let a = 0; a < 30; a++){InputErrorH23.push(Ahl[23]*Bhl[23]*I[a]);}}
}
function OutputError(y){
  for (let c = 0 ; c < 30 ; c++) {
  if(count4 == 0){OE1.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[0];}
  if(count4 == 1){OE2.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[1];}
  if(count4 == 2){OE3.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[2];}
  if(count4 == 3){OE4.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[3];}
  if(count4 == 4){OE5.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[4];}
  if(count4 == 5){OE6.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[5];}
  if(count4 == 6){OE7.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[6];}
  if(count4 == 7){OE8.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[7];}
  if(count4 == 8){OE9.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[8];}
  if(count4 == 9){OE10.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[9];}
  if(count4 == 10){OE11.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[10];}
  if(count4 == 11){OE12.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[11];}
  if(count4 == 12){OE13.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[12];}
  if(count4 == 13){OE14.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[13];}
  if(count4 == 14){OE15.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[14];}
  if(count4 == 15){OE16.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[15];}
  if(count4 == 16){OE17.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[16];}
  if(count4 == 17){OE18.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[17];}
  if(count4 == 18){OE19.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[18];}
  if(count4 == 19){OE20.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[19];}
  if(count4 == 20){OE21.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[20];}
  if(count4 == 21){OE22.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[21];}
  if(count4 == 22){OE23.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[22];}
  if(count4 == 23){OE24.push(o[c]-Y[c])*(o[c]*(1-o[c]))*SigmoidHL[23];}
}
}

return o;
}
