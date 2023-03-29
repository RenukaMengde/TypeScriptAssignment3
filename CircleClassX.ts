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

class CircleX extends Circle
{
    constructor(Rad : number)
    {
        super(Rad);     
    }

    Circumference()
    {
        return 2 * this.PI * this.Radius;
    }
}

var Result : number = 0;
var ObjC1 = new CircleX(7.5);
Result = ObjC1.Area();
console.log("Area of circle is " + Result);
Result = ObjC1.Circumference();
console.log("Circumference of circle is " + Result);

console.log("------------------------");

var ObjC2 = new CircleX(10.5);
Result = ObjC2.Area();
console.log("Area of circle is " + Result);
Result = ObjC2.Circumference();
console.log("Circumference of circle is " + Result);