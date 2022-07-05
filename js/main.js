
// B1
var money = 0;
var day = 0;
var total = 0;
function sumMoney(){
    money = document.getElementById("money").value;
    day = document.getElementById("day").value;
    total = Number(money) * Number(day);
    document.getElementById("text1").innerHTML = total;
}
document.getElementById("sum").onclick = sumMoney;


// B2
var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;
var number5 = 0;
var sumAverage = 0;

function average(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    number3 = document.getElementById("number3").value;
    number4 = document.getElementById("number4").value;
    number5 = document.getElementById("number5").value;

    sumAverage = (Number(number1)+ Number(number2)+Number(number3)+Number(number4)+Number(number5))/5;
    document.getElementById("text2").innerHTML = sumAverage;
}
document.getElementById("sumAverage").onclick = average;

// B3

var usd = 23500;
var vnd = 0;
var currencyExchange = 0;
var totalExchange = 0;

function exchange(){
    vnd = document.getElementById("vnd").value;
    currencyExchange = vnd * usd;
    totalExchange = new Intl.NumberFormat('vn-VN').format(currencyExchange);
    document.getElementById("text3").innerHTML = totalExchange;
}
document.getElementById("currencyExchange").onclick = exchange;

// B4

var width = 0;
var height = 0;
var area = 0;
var perimeter = 0;

function rectangle(){
    width = document.getElementById("widthRectangle").value;
    height = document.getElementById("heightRectangle").value;

    area = Number(width)* Number(height);
    perimeter = (Number(width)+ Number(height))*2;

    document.getElementById("text4").innerHTML = "Diện tích: "+ area + " ; "+ "Chu vi: " + perimeter;


}
document.getElementById("sumRectangle").onclick = rectangle;

// B5
var n =0;
var tens= 0;
var unit = 0;
var sum5 = 0

function sumTwoNumber(){
    n = document.getElementById("number").value;
    tens = Math.floor(Number(n)/10);
    unit =  Math.floor(Number(n)%10);
    sum5 = tens + unit;
    console.log("🚀 ~ file: main.js ~ line 82 ~ sumTwoNumber ~ sum5", sum5)
    document.getElementById("text5").innerHTML = sum5;
    
}

document.getElementById("sumTwo").onclick = sumTwoNumber;