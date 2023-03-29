class Circle
{
    Radius : number = 0;
    PI : number = 0;

    constructor(Rad : number)
    {
        this.Radius = Rad;
        this.PI = 3.14;
    }

    Area() : number
    {
        return this.PI * this.Radius * this.Radius;
    }
}

var Result : number = 0;
var ObjOne = new Circle(7.5);
Result = ObjOne.Area();
console.log("Area of circle is " + Result);

console.log("------------------------");

var ObjTwo = new Circle(10.5);
Result = ObjTwo.Area();
console.log("Area of circle is " + Result);