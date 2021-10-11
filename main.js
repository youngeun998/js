// comic 박스를 생성한 상태
// var comic;

// comic 박스 안에 원피스 데이터를 할당한 상태
// comic = "원피스";

// console.log(comic);

// var apple = "사과";

/*
var a;
var b;
var c;
*/

// 변수 동시 선언
// var a,b,c;


// 변수 동시 초기화
/*
var d = 10;
var e = 20; 
var f = 30; 
*/

// var d = 10, e= 20, f = 30;




// 모든 변수는 선언과 동시에 undefined 자동으로 할당된다.
// var computer;
// console.log(computer);

/*
var house;
house = "집";
console.log(house);

house = "아파트";
console.log(house);
*/


/*
var house;
console.log(house);

// undefined -> 집
house = "집"
console.log(house);
*/

// 캐멀 케이스
// var mathScoreStudent = 10;

// 스네이크 케이스
// var math_score_student = 10;


// 주의점
// - '-' 사용 금지
// var math-score-student = 100; (x)

// -특수문자를 앞에 사용해서는 안된다
// var _math; (x)
// var $math; (x)

// -변수명을 지을 때 숫자가 먼저 나와서는 안된다
// var apple10;
// var 10apple;

// -의미가 불분명한 단어를 사용하는 것은 기피를 해야한다. 
// var w;


// 데이터 타입

/*
데이터의 종류 = 데이터 타입

[원시타입]
문자열 (String)  숫자 (Number)  논리 (Boolean)
undefined    null


[참조 타입]
배열 (Array) 함수 (Function) 객체 (Object)
*/

// 데이터 타입
// 문자열 (String)
/*
var msg1 = "Hello World"
var msg2 = 'welcome'

console.log(msg1);
console.log(msg2);

var msg3 = "Nice to meet you";
// ',"을 섞어서 사용할 수 없다.

// She is girl 
// She's girl
var msg4 = "She's girl";
var msg5 = 'She\'s girl';

console.log(msg4);
console.log(msg5);
*/



// 숫자 (Number)
/*
var num1 = 10;
var num2 = -10;
var num3 = 3.14;
var num4 = -3.14;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

console.log(num1 + num2);
console.log(num1 + num3);
*/


// 연산자
// 숫자 사칙연산
/*
var a = 20;
var b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);



// 문자열
var str1 = "20";
var str2 = "10";

console.log(str1 + str2); 
// (글자를 이어붙인다 문자열이가지고 있는 덧셈원칙)
console.log(str1 - str2);
console.log(str1 * str2);
console.log(str1 / str2);
console.log(str1 % str2);

var firstName = "Inkweon";
var lastName = "kim";


console.log(firstName + "               " + lastName);


var str11 = "현재 시간은";
var time = 10;
var str12 = "시 입니다.";

console.log(str11 + time + str12);
*/



// ++, -- 연산자 
// var num10 = 10;

// num10 = num10 - 1;
// console.log(num10);
// console.log(--num10); //9
// console.log(--num10); //8  (9로 된 다음에 --한거기때문에 8)

// console.log(++num10);
// console.log(++num10);


// console.log(num10--); (한텀쉬고 출력해줌)
// console.log(num10);
// -> 연산자의 앞,뒤 위치에 따라 선출력을 할지 후출력을 할지 정하는 것.



// +=, -+. *=, /=, %= 연산자
/*
var num20 = 20;

// num20 = num20 + 10;
num20 += 10;

console.log(num20);
*/


// 비교 연산자 >, <, ==, ===,[!=, !==]서로 다른지 확인, <=, >=
/*
var a = 10;
var b = 20;
var c = 30;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


console.log(a == b);
console.log(a === b);

console.log(a != b);
console.log(a !== b);



var num10 = 10;
var num20 = 20;

var str10 = "10";
var str20 = "20";

console.log(num10 == str10); //true
console.log(num10 === str10); //더 엄격하게 심사함 (===) ,false, !!이 등호만 기억하면댐

console.log(num10 != str10); //false
console.log(num10 !== str10); //true , !!이 등호만 기억하면댐
*/


// 논리 연산자 : AND (&&), OR(||)
/*
var num30 = 30;
var num40 = 40;
var num50 = 30;

console.log(num30 === num40 && num30 === num50); //FALSE
console.log(num30 === num40 || num30 === num50); //TRUE

console.log(num30 === num40 || num30 === num50 || num40 > num50); 




// 불리언(boolean) : true, false 

console.log(true);
console.log(false);
console.log(1 === 2);
console.log(10 < 20);
console.log(10 === 10 || 20 === 30);

var bool = true;
bool = false;
*/


// null, undefined
// null : 변수 초기화로 명시적으로.... 빈 값을 변수 안에 할당한 상태 
var n = null;

// undefined 변수를 선언만 상테
// var u;

// console.log(n);
// console.log(u);

// null과 undefined 차이점
// console.log(typeof 10); //number
// console.log(typeof "Hello World"); //string

// console.log(typeof null); //obgect(버그정도로 생각해라)
// console.log(typeof undefined); //undefined

// console.log(null == undefined); //true
// console.log(null === undefined); //false

// !
// console.log(!true); //false
// console.log(!false); //true

// console.log(!null); //true
// console.log(!!null); //false=!true

// console.log(!undefined); //true
// console.log(!!undefined); //false

// console.log(10 + null); //null -> 0
// console.log(10 + undefined); //NaN (Not a Number)



// 참조타입
// 함수 (function) *중요
// console.log(10 + 10);
// console.log(20 + 30);
// console.log(5 + 10);

// 임의 숫자 두 개를 전달받아서 덧셈을 하는 기능을 만들고 싶다.

// 함수 선언
/*
function sum() {

    console.log("Hello")
    console.log(10 + 10);

}

// 함수 호출
sum(); 
sum(); 
sum(); 
sum(); 
sum(); 
sum(); 
sum(); 
sum(); 
sum(); 
*/


// Parameter (매개변수), Argument (인수) 
// 매개변수 : num1, num2
/*
function sum(num1, num2) {

    console.log(num1 + num2);

}

// 인수 : 호출시 전달되는 값
sum(10, 20);
sum(100, 50);
*/


/*
function fullname(firstName, lastName) {
    console.log(firstName + " " + lastName)
}

fullname("Inkweon", "kim");
*/

/*
function area(width, height) {
    var result = width * height;
    console.log(result);
}

area(10,20);
*/

/*
function test(a) {
    console.log(a);
}

test(10);
test("Hello");
test(true);
test(null);

test(function a() {});
test([10, 20, 30]);
test({name: "inkweon"});
*/


// return
/*
function sum(num1, num2) {
    // console.log(num1 + num2);
    return num1 + num2
}

var result = sum(10, 20); //함수 호출 = 30, result = 30
console.log(result);
*/

/*
function area(hor, ver) {
    return hor * ver;
}

var volume = area(10, 20) * 100;
console.log(volume);
*/



// 배열 (Array)
// var banana = "바나나";
// var apple = "사과";
// var melon = "멜론";


/*
var fruit = ["바나나", "사과", "멜론"]
console.log(fruit);

// 인덱스 (index)
console.log(fruit[0]) //바나나
console.log(fruit[2]) //멜론

fruit[2] = "수박"; //데이터 변경하기
console.log(fruit); 
*/

/*
var arr = [
    10, 
    "Hello", 
    true, 
    null, 
    undefined, 
    function a(), {}, 
    [10, 20, 30], 
    {name: "kim"}
];
*/

// 규칙
var num = [10, 20, 30, 3.14] //배열안에 있는 데이터는 가능한 동일한 데이터 타입을 가지고 있어야한다.
var fruit = ["사과", "배", "바나나", "양상추"]; //공통된 데이터 타입, 성격으로 배열을 만들어야 한다. 쌩뚱맞게 양상추가 들어가면 안된다. 


// 배열 안에 있는 배열 데이터에 접근하는 방법
/*
var score = [[10, 20, 30], [100, 200, 300]];

console.log(score);
console.log(score[1]); // [100, 200, 300]
console.log(score[1][2]); // 300
*/


// 객체 (Object)
// 이름, 나이, 스킬, 성별
// key - value = property
/*
var student = {
    name: "Inkweon",
    age: 21,
    skills: ["자바스크립트", "HTML", "CSS"]
};

console.log(student);
console.log(student.name); //Inkweon
console.log(student['name']); //Inkweon
console.log(student.skills[1]); //HTML

student.age = 100;
console.log(student); //데이터 수정


student.gender = "남자";

console.log(student);
*/

/*
var student = {
    name: "Inkweon",
    age: 21,
    skills: ["자바스크립트", "HTML", "CSS"],

    test1: true,
    test2: null,
    test3: undefined,
    test4: {color: "red"},

    // 객체 안에 만들어진 함수 : 메서드
    sum: function (num1, num2) {
        return num1 + num2;
    }

};


var result = student.sum(10, 20);
console.log(result);

// 이해가 안되는 부분,,,,, 1:12
student.sum(100, 200); //student라는 객체안에 있는 sum이라는 메서드를 사용
console.log("Hello world"); //콘솔이라는 객체안에 있는 log라는 메서드를 사용



// 원시 타입과 참조 타입 차이점 
// 원시타입
// 원시타입은 원본을 수정을 하든 복사본을 수정을 하든 서로의 데이터에는 영향을 주지 않는다.  
var str1 = "Hello World";
var str2 = str1;

str1 = "Nice";


console.log(str1);
console.log(str2);


// 참조 타입
var obj1 = {name: "Inkweon"};
var obj2 = obj1;

obj1.name = "Park";
obj2.name = "Park"; 

console.log(obj1);
console.log(obj2);
*/





// yellow, green, pink #dc143c, rgba(123, 123, 123, 0.5);

var colors = ['yellow', 'green', 'pink', '#dc143c', 'rgba(123, 123, 123, 0.5)'];

var bg = document.getElementById('color-bg');
var btn = document.getElementById('btn');


// btn.addEventListener

//콜백 함수 : 호출 기호 없이 특정 조건 하에 호출되는 함수
// btn.addEventListener('click', function() {

    // 0 ~ 4
    // var random = Math.floor(Math.random() * 5);
    // console.log(random);
    // console.log(colors[random]);

    // background-color, border-radius, margin-top 
    // bg.style.backgroundColor = colors[random];

// })









// 1 ~ 6 숫자를 랜덤하게 가져오는 게임
// Math.random()                         : 0 ~ 0.999999~
// Math.random() * 6                     : 0 ~ 0.999999~
// Math.floor(Math.random() * 6)         : 0 ~ 5
// Math.floor(Math.random() * 6) + 1);   : 1 ~ 6

// console.log(Math.random());
// console.log(Math.random() * 6);
// console.log(Math.floor(Math.random() * 6));
// console.log(Math.floor(Math.random() * 6) + 1);


// 예약어
// var, typeof, function, null, undefined, false, true, console 

// 두개 이상의 명사 조합으로 변수이름을 작성해야 한다.
// var var;
// var function;

console.log("Main");

var mainVar = "Main Var";

function mainFunc() {
    console.log("Main Func");
}

