var a; //global scope
let z //Block Scope
const y=9;

var p=20;//Number
var q="Hello"//String
var bool=true;//Boolean
var r;//undefined
var s=null;//null,//bigint,//symbol

var arr=[1,2,3,4,5];
console.log(arr);

var object={//object
    name:"vikram",
    age:24

}
//arithmetic operator(+,-,*,/,%)
var a=10;
var b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(" ");

//relational operators(>,<,>=,<=,==,!=)

console.log(a>b);
console.timeLog(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log(a==b);
console.log(a!==b);
console.log(" ");


// assignment operator(=,+=,-=,*=,/=,%=)
a=10;
console.log(a);
a+=10;
console.log(a);
a-=10;
console.log(a);
a*=2;
console.log(a);
a%=2;
console.log(a);
console.log(" ");

//logical operator(&&, ||, !)
console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log(" ");   

//for loop
for(initialization;condition;increment/decrement){
    //code
}

for(let i=1;i<10;i++){
    console.log(i);
}

//while loop
while(condition){
    //code
}

var a=0;
while(a===5){
    a++;
    console.log(a);
}
console.log(a);

//conditional statements
if(a%2===0){
    console.log("even")
}

//if else
if(a%2===0) console.log("even");
else console.log("odd");


//else if
var mark=90;
if(mark>=90){
    console.log("o");
}
else if(mark>=70){
    console.log("A");
}
else{
    console.log("B");
}

//switch
day=1;
switch(day){
    case 1:
        {
            console.log("Monday");
        } 
    case 2:
    {
        console.log("Tuesday");
    }    
    case 3:
        {
            console.log("Wednesday");
        }
        case 4:
            {
                console.log("Thursday");
            }
            case 5:
                {
                console.log("Friday");
                }
                case 6:
                    {
                        console.log("Saturday");
                    }
                    case 7:
                        {
                            console.log("Sunday");
                        }
}




//terinery operator(?:)

mark=90
var result=(mark>90)?"O":(mark>=70)?"A":(mark>=50)?"B":"Fail";
console.log(result);

//function without parameter 

function add(){
    console.log(10+20)
}
add();

//function with parameter
 function add(a,b){
    console.log(a+b);
 }
 add(10,20);

var addParam=(a,b)=>{
    console.log(a+b);
} 
addParam(10,20);

console.log(typeof addParam);


const a=[10,20,30];
const b=[...a,40,50];
console.log(a);
console.log(b);

const [name,age,marks]=["vibbhu",10,100];
console.log(name);
console.log(age);
console.log(marks);
