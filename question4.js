//Q4.Develop a set of classes in JavaScript for calculating the area and perimeter of various shapes. Begin with a
//base class Shape that provides default methods for area and perimeter calculation and includes
//subclasses like Circle, Rectangle, and Triangle. Each subclass should inherit from Shape and override the
//area and perimeter calculation methods to provide accurate results for their respective shapes.


class Shape{
     constructor(){
          this.type="Shape";
     }

     calculateArea(){
          console.log('Area Calculation Not implemented for this shape');
     }

     calculatePerimeter(){
          console.log('Perimeter calculation Not implemented for this shape');
     }
}

class Circle extends Shape{
     constructor(radius){
          super();
        this.type="Circle";
        this.radius=radius;
     }

     calculateArea(){
          return Math.PI * this.radius * this.radius;
     }

     calculatePerimeter(){
          return 2 * Math.PI * this.radius;
     }
}


class Rectangle extends Shape{
     constructor(width,height){
          super();
          this.type="Rectangle";
          this.width=width;
          this.height=height;
     }

     calculateArea(){
          return this.width * this.height;
     }

     calculatePerimeter(){
          return 2 *(this.width + this.height);
     }

}


class Triangle extends Shape{
     constructor(base,height,side1,side2,side3){
          super();
          this.type="Triangle";
          this.base=base;
          this.height=height;
          this.side1=side1;
          this.side2=side2;
          this.side3=side3;
     }

     calculateArea(){
          return 1/2 * (this.base * this.height);
     }

     calculatePerimeter(){
          return this.side1 + this.side2 + this.side3;
     }
}

const circle=new Circle(15);
console.log(`Circle - Area: ${circle.calculateArea()} Perimeter: ${circle.calculatePerimeter()}`);
//Circle - Area:706.8583470 Perimeter: 94.24779670

const rectangle=new Rectangle(30,40);
console.log(`Rectangle- Area: ${rectangle.calculateArea()} Perimeter: ${rectangle.calculatePerimeter()}`);
//Rectangle - Area: 1200 Perimeter: 140

const triangle=new Triangle(30,20,100,200,300);
console.log(`Triangle - Area: ${triangle.calculateArea()} Perimeter: ${triangle.calculatePerimeter()}`);
//Triangle - Area: 300 Perimeter: 600
