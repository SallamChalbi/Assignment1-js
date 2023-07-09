// // Q1
// var num = Number(window.prompt('Enter number'))

// console.log(num);


// // Q2
// var num = Number(window.prompt('Enter number'))

// if(num % 3 == 0 && num % 4 == 0)
//     console.log('Yes');
// else
//     console.log('No');


// // Q3
// var num1 = Number(window.prompt('Enter 1st number'))
// var num2 = Number(window.prompt('Enter 2nd number'))

// if(num1 > num2)
//     console.log(num1);
// else
//     console.log(num2);


// // Q4
// var num = Number(window.prompt('Enter number'))

// if(num < 0)
//     console.log('Negative');
// else
//     console.log('Positive');


// // Q5
// var num1 = Number(window.prompt('Enter 1st number'))
// var num2 = Number(window.prompt('Enter 2nd number'))
// var num3 = Number(window.prompt('Enter 3rd number'))

// if(num1 >= num2 && num1 >= num3)
//     console.log('max element = ' + num1);
// else if(num2 >= num1 && num2 >= num3)
//     console.log('max element = ' + num2);
// else
//     console.log('max element = ' + num3);

// if(num1 <= num2 && num1 <= num3)
//     console.log('min element = ' + num1);
// else if(num2 <= num1 && num2 <= num3)
//     console.log('min element = ' + num2);
// else
//     console.log('min element = ' + num3);


// // Q6
// var num = Number(window.prompt('Enter number'))

// if(num%2 == 0)
//     console.log('even');
// else
//     console.log('odd');


// // Q8
// var char = window.prompt('Enter character')

// if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//     if(char == 'a' || char == 'A' || char == 'e' || char == 'E' || char == 'i' || char == 'I' || char == 'o' || char == 'O' || char == 'u' || char == 'U')
//         console.log('vowel');
//     else
//         console.log('consonant')
// }
// else
//     console.log('not alphabet');


// // Q9
// var num = Number(window.prompt('Enter number'))

// for(var i = 1; i <= num; i++)
//     console.log(i);


// // Q10
// var num = Number(window.prompt('Enter number'))

// for(var i = 1; i <= 12; i++)
//     console.log(i * num);


// // Q11
// var num = Number(window.prompt('Enter number'))

// for(var i = 1; i <= num; i++)
//     if(i%2 == 0)
//         console.log(i);


// // Q12 - 1
// var num = Number(window.prompt('Enter the number'))
// var pow = Number(window.prompt('Enter the power of'))

// var total = 1

// for(var i = 1; i <= pow; i++)
//     total *= num

// console.log(total);


// // Q12 - 2
// var num1 = Number(window.prompt('Enter 1st marks'))
// var num2 = Number(window.prompt('Enter 2nd marks'))
// var num3 = Number(window.prompt('Enter 3rd marks'))
// var num4 = Number(window.prompt('Enter 4th marks'))
// var num5 = Number(window.prompt('Enter 5th marks'))

// var total = num1 + num2 + num3 + num4 + num5;
// var average = total / 5;
// var percentage = (total / 500) * 100;

// console.log('Total marks = ' + total)
// console.log('Average marks = ' + average)
// console.log('Percentage = ' + percentage)


// // Q13
// var month = Number(window.prompt('Enter month number'))

// if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month ==12)
//     console.log('Day in month : 31');
// else if(month == 4 || month == 6 || month == 9 || month == 11)
//     console.log('Day in month : 30');
// else if(month == 2){
//     var year = Number(window.prompt('Enter year number'))
//     if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
//         console.log('Day in month : 29') // ==> leap year
//     else
//         console.log('Day in month : 28') // ==> non-leap year
// }
// else
//     console.log('out of range!');


// // Q14
// var Physics = Number(window.prompt('Enter Physics mark'))
// var Chemistry = Number(window.prompt('Enter Chemistry mark'))
// var Biology = Number(window.prompt('Enter Biology mark'))
// var Mathematics = Number(window.prompt('Enter Mathematics mark'))
// var Computer = Number(window.prompt('Enter Computer mark'))

// var total = Physics + Chemistry + Biology + Mathematics + Computer;
// var percentage = (total / 500) * 100;

// if(percentage >= 90)
//     console.log('Grad A');
// else if(percentage < 90 && percentage >= 80)
//     console.log('Grad B');
// else if(percentage < 80 && percentage >= 70)
//     console.log('Grad C');
// else if(percentage < 70 && percentage >= 60)
//     console.log('Grad D');
// else if(percentage < 60 && percentage >= 40)
//     console.log('Grad E');
// else
//     console.log('Grad F');



/// Using switch case

// // Q15
// var month = Number(window.prompt('Enter month number'));

// switch(month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log('Day in month : 31');
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log('Day in month : 30');
//             break;
//         case 2:
//             var year = Number(window.prompt('Enter year number'))
//             if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
//                 console.log('Day in month : 29') // ==> leap year
//             else
//                 console.log('Day in month : 28') // ==> non-leap year
//             break;
//         default:
//             console.log('out of range!');
// }


// // Q16
// var char = window.prompt('Enter character')

// if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//     switch(char) {
//         case 'a':
//         case 'A':
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             console.log('vowel');
//             break;
//         default:
//             console.log('consonant')
//     }
// }
// else
//     console.log('not alphabet');


// // Q17
// var num1 = Number(window.prompt('Enter 1st number'))
// var num2 = Number(window.prompt('Enter 2nd number'))

// switch(num1 > num2) {
//     case true:
//         console.log('maximum number : ' + num1);
//         break;
//     case false:
//         console.log('maximum number : ' + num2);
//         break;
//     default:
//         console.log('Not a number');
// }


// // Q18
// var num = Number(window.prompt('Enter number'))

// switch(num % 2){
//     case 0:
//         console.log('even');
//         break;
//     case 1:
//         console.log('odd');
//         break;
//     default:
//         console.log('Not a number');
// }


// // Q19
// var num = Number(window.prompt('Enter number'))

// switch(num < 0){
//     case true:
//         console.log('Negative');
//         break;
//     case false:
//         if(num == 0)
//             console.log('zero');
//         else
//             console.log('Positive');
//         break;
//     default:
//         console.log('Not a number');
// }


// // Q20
// var num1 = Number(window.prompt('Enter 1st number'))
// var num2 = Number(window.prompt('Enter 2nd number'))

// var char;
// do{
//     char = window.prompt('Enter arithmetic operator(+,-,*,/,%)  number')
// }while(char != '+' && char != '-' && char != '*' && char != '/' && char != '%');

// switch(char){
//     case '+':
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//         break;
//     case '-':
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//         break;
//     case '*':
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//         break;
//     case '/':
//         console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         break;
//     case '%':
//         console.log(`${num1} % ${num2} = ${num1 % num2}`);
//         break;
//     default:
//         console.log('wrong arithmetic');
// }
