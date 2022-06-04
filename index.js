//1
const a = 10;

if ( a == 10 ){
    console.log('true')
}else{
    console.log('false')
}

//2
let b = 0;

if (b  <= 0 ){
    console.log('true')
}else{
    console.log('false')
}
let c = 1;

if (c <= 0 ){
    console.log('true')
}else{
    console.log('false')
}

let d = -3;

if (d  <= 0 ){
    console.log('true')
}else{
    console.log('false')
}

//3

let test = true;

if (test = true){
    console.log('true')
}else{
    console.log('false')
}

//4
let e = 5;
let f = 6;

if (2 < e && e  < 11 ||  6 <= f && f < 14){
    console.log('true')
}else{
    console.log('false')
}

let g = 0;
let h = 4;

if (2 < g && g  < 11 ||  6 <= h && h < 14 ){
    console.log('true')
}else{
    console.log('false')
}

//5
let num = 1;

switch (num) {
  case 1:
    alert( 'winter' );
    break;
  case 2:
    alert( 'spring' );
    break;
  case 3:
    alert( 'summer' );
    break;
  case 4:
    alert( 'autmn' )
    break;
  default:
    alert( "have'nt ant suitable match " );
}

//6
let x = 10;
let y = 7;

if (x > y) {
    console.log(" x больше, чем y");
} else if( x < y){
    console.log(" x не больше, чем y");
}

//7
// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 12;

if (month >= 3 && month < 6){
    console.log('Весна');
}
if (month >= 6 && month < 9){
    console.log('Лето');
}
if (month >= 9 && month < 12){
    console.log('Осень');
}
if (month == 1 || month == 2 || month == 12){
    console.log('Зима');
}else{
	console,log('Неправильно введено число');
}



//8
let red = "no";
let yellow = "wait";
let green = "allow";

if (red = "no"){
    console.log('not allowed')
}if ( yellow = "wait"){
    console.log('waiting')
}if ( green = "allow"){
    console.log('allowed')
}


