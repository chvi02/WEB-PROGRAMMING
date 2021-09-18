// 1
let myname = "Виктория";
function names(name) {
alert("Имя: " + myname);
}
// 2
let myyear = 2002;
function years(year){
    alert ("Год рождения: "+myyear);
}
// 3
function hello(name) {
    alert('Привет, ' + myname + '!');
}

//4
function range(start, end) {
    let arr = [];
    for (let number = start, i = 0; number <= end; number++, i++)
        arr[i] = number;
    alert('4 ' + arr);
}
//5
function rangeOdd(start, end) {
    let arr = [];
    for (let number = start, i = 0; number <= end; number++, i++) {
        if (number % 2 !== 0) {
            arr[i] = number;
        } else {
            i--;
        }
    }
    alert('5 ' + arr);
}


// 6
function average(a, b) {
    return (a + b) / 2;
}

// 7
function square(x) {
    return x * x;
}

// 8
function cube(x) {
    return x * x * x;
}

// 9
function calculate(numbers = 9) {
    let result = [];
    for (let i = 0; i < numbers; i++)
        result[i] = average(square(i), cube(i));
    return result;
}


function writing(str) {
    document.writeln('<p>' + str + '</p>');
}
function form() {

    writing('6 (числа 4, 6): ' + average(4, 6));
    writing('7 (число 6): ' + square(6));
    writing('8 (число 2): ' + cube(2));
    writing('9: ' + calculate());
}

form()