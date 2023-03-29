class Arithmatics 
{
    Number1 : number = 0;
    Number2 : number = 0;
    constructor(Num1 : number, Num2 : number)
    {
        this.Number1 = Num1;
        this.Number2 = Num2;
    }

    Addition() : number
    {
        return this.Number1 + this. Number2;
    }

    Substraction() : number
    {
        return this.Number1 - this. Number2;
    }

    Multiplication() : number
    {
        return this.Number1 * this. Number2;
    }

    Division() : number
    {
        return parseInt((this.Number1 / this. Number2).toString());
    }
}

var Result : number = 0;
var ObjOne = new Arithmatics(50, 20);
Result = ObjOne.Addition();
console.log("Addition of numbers is " + Result);

Result = ObjOne.Substraction();
console.log("Substraction of numbers is " + Result);

Result = ObjOne.Multiplication();
console.log("Multiplication of numbers is " + Result);

Result = ObjOne.Division();
console.log("Division of numbers is " + Result);

console.log("----------------------------");

var ObjTwo = new Arithmatics(45, 15);
Result = ObjTwo.Addition();
console.log("Addition of numbers is " + Result);

Result = ObjTwo.Substraction();
console.log("Substraction of numbers is " + Result);

Result = ObjTwo.Multiplication();
console.log("Multiplication of numbers is " + Result);

Result = ObjTwo.Division();
console.log("Division of numbers is " + Result);
