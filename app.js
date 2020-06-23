// Chapter 21-25

//Task 01
//var first = prompt("Enter you first name: ");
//var last = prompt("Enter your last name: ");
//fullName = [first, last];
//document.write("Welcome "+ fullName );

//task 2
//var mbl = prompt("Enter your favorite mobile name: ");
//mbl1 = mbl.length;
//document.write("My favorite phone is: "+mbl);
//document.write("<br> Length of string: "+mbl1);

//task 3
//name = "Pakistani";
//name1 = name.indexOf('n');
//document.write("String: "+name);
//document.write("<br> Index of 'n': "+name1);

//task 4
//name = "Hello World";
//name1 = name.lastIndexOf('l');
//document.write("String: "+name);
//document.write("<br> Last index of 'l': "+name1);

//task 5
//name = "Pakistani";
//document.write("String: "+name);
//document.write("<br> Character at index 3: "+ name.charAt(3));

//task 6
//var first = prompt("Enter your first name: ");
//var last = prompt("Enter last name: ");
//fullName = first.concat(last);
//alert("Welcome "+fullName);

//task 7
//var city = "Hyderabad";
//var city1 = city.replace("Hyder", "Islam");
//document.write(city1);

//task 8
//var name = "Ali and sammi are good friends. Ali and sami are playing cricket and football together";
//var name1 = name.replace(/and/g, "&");
//document.write(name1);

//task 9
//var name = prompt("Enter any fruit name in small: ");
//var name1 = name.toUpperCase(name);
//document.write(name1);

//task 10
// var name = prompt("Enter name: ");
// name = name.toLowerCase();
// var names = ["cake","apple pie","cookie","chips","patties"]
// if (names.indexOf("cake") !== -1 || 
//     names.indexOf("apple pie") !== -1 || 
//     names.indexOf("cookie") !== -1 || 
//     names.indexOf("chips") !== -1 || 
//     names.indexOf("patties") !== -1) {
//     alert("Available");
// }
// else
// {
//     alert("Not available");
// }

//task 11
//var name = "Pakistan";
//var name1 = name.length;
//document.write("User Input: "+name);
//document.write("<br> LAst character of input: " +name.charAt(name1 - 1));

//task 12
//var name = "the quick brown fox jumps over the lazy dog";
//var name1 = name.match(/the/g);
//document.write("Text: the quick brown fox jumps over the lazy dog");
//document.write("<br> There are two occurences of word: 'the'");

//Chapter 26 to 30

//TAsk 01
// var number = prompt("Enter any positive decimal value: ");
// document.write("Number: " +number);
// document.write("<br> Round off value of the number: " +Math.round(number));
// document.write("<br> Floor value of number: " +Math.floor(number));
// document.write("<br> Ceil value of number: " +Math.ceil(number));

//task 2
// var number = prompt("Enter any negative point value: ");
// document.write("Number: " +number);
// document.write("<br> Round off value of the number: " +Math.round(number));
// document.write("<br> Floor value of number: " +Math.floor(number));
// document.write("<br> Ceil value of number: " +Math.ceil(number));

//task 3
// var num = prompt("Enter any negative value: For e.g. -4 ");
// document.write("The absilute value of " +num+ " is: " +Math.abs(num));

//task 4
// document.write("Random dice value: " +Math.random());

//task 5
// var heads = 1;
// var tails = 2;
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("Heads: You win <br> Random Coin Value: 1")
// } else if(floor === 1)
// {
//     document.write("Tails: You loss <br> Random Coin Value: 0")
// }

//task 6
//document.write("random number b/w 1 to 100: " +Math.floor(Math.random() * 100));

//task 7
// var user = prompt("Enter your weight in Kgs: ");
// document.write("The weight of user in Kilograms is: " +user+ "kgs");

//task 08
// var secret = Math.floor(Math.random() * 10);
// var num = prompt("Enter a number b/w 1 to 10");
// if(num === secret){
//     alert("MAtched!");
// }
// else{
//     alert("Try Again");
// }

//Chapter 31 to 34

//TAsk 01
// var date = new Date();
// document.write(date);

//task 2
// var month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October",
//                 "November", "December"];
// var date = new Date();
// document.write("The current month is: " + month[date.getMonth()]);

//task 3
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date();
// var d1 = days[d.getDay()];
// var d2 = d1.substring(0,3);
// document.write("Today is " +d2);  

//tasl 4
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var date = new Date();
// var day1 = days[date.getDay()];
// if(day1 === 'Saturday' || day1 === 'Sunday'){
//     alert("It's fun day");
// }
// else{
//     alert("Working day");
// }

//task 5
// var d = new Date();
// var d1 = d.getHours();
// if(d1 >= '00'){
//     alert("It's AM");
// }
// else{
//     alert("It;s PM");
// }

//task 6
// var date = new Date(prompt("Enter your date of birth: e.g. Oct 12, 2000"));
// var date1 = date.getTime();
// var today = new Date();
// var today1 = today.getTime();
// var diff = today1 - date1;
// var acc = Math.floor(diff/(1000*60*60*24*30*12));
// document.write("Your age is: " +acc);

//task 7
// var name = "Ali";
// var month = "June";
// var unit = 300;
// var unitChrg = 18;
// var netAmo = 300*18;
// var late = 120;
// var lateAmo = netAmo + 120;
// document.write("<h3> K-Electric Bill </h3>");
// document.write("<br> Customer Name: " +name);
// document.write("<br> Month: " +month);
// document.write("<br> Number of Units: " +unit);
// document.write("<br> Charges per Unit: " +unitChrg);
// document.write("<br> Net Amount Payable (within due date): " +netAmo);
// document.write("<br> Late payment Surcharge: " +late);
// document.write("<br> Gross Amount Payable (after due date): " +lateAmo);

//Chapter 35 to 38

//Task 01
// function myFunc() {
//     var date = new Date();
//     document.write(date);
// }
// myFunc();

//task 2
// function myFunc() {
//     var name = prompt("Enter your name");
//     var name1 = prompt("Enter your last name");
//     document.write("Welcome " +name);
//     document.write(name1);
// }
// myFunc();

//task 3
// function myFunc() {
//     var a = prompt("Enter first no:");
//     var b = prompt("Enter second no:");
//     var c = a + b;
//     document.write("Addition of given numbers is: " +c);
// }
// myFunc();

//task 4
// function myFunc(a, b, c) {
//     a = prompt("Enter First number");
//     b = prompt("Enter Operator");
//     c = prompt("Enter second value");
    
//         if (b === '+') {
//             alert((+a)+(+c));
//         }
//         else if(b === '-'){
//             alert(a-c);
//         }
//         else if(b === '*'){
//             alert(a*c);
//         }
//         else if(b === "/"){
//             alert(a/c);
//         }
//         else{
//             alert((a/c)*100 +'%');
//         }

// }
// myFunc();

//task 5
// function myFunc(a) {
//     a = prompt("Enter a number");
//     document.write("The square of " +a+ " is: " +a*a);
// }
// myFunc();

//tsk 6
// function fact(n) {
//     var fact1 = 1;
//     if(n > 1) {
//         for(var i = 2; i <= n; i++) {
//             fact1 *= i;
//         }
//     }
//     return fact1;
// }
// document.write(fact(4));

//task 7
// function myFunc() {
//     var a = prompt("Enter first number");
//     var b = prompt("Enter second number");
//     for(num1 = a; num1 <= b; num1++){
//         console.log("Counting from " +a+ " to" +b+ " is: " +num1);
//     }
// }

//task 8
// function myFunc(width, height, area) {
//     width = prompt("Enter width");
//     height = prompt("Enter height");
//     area = (width * height);
//     alert("The area of rectangle is: " +area);
// }
// myFunc();

//task 9
// function myFunc(name)
// {
//  return name.replace(/\w*/g,
//     function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     }
// );
// }
// alert(myFunc('the brown fox'));
// myFunc();













































































