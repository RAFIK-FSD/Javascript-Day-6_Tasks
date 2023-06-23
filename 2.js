// Circle - Class
// Convert the UML diagram to Typescript class. - use number for double

class Circle {

    constructor (radius = 1.0, color = 'red') {
               this.radius = radius;
               this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    toString () {
        return `Circle - radius: ${this.radius}, color: ${this.color}`
    }
    getArea() {
        return 3.1415 * this.radius * this.radius;
    }
    getCircumference () {
        return 2 * 3.1415 * this.radius
    }
}


let circle1 = new Circle ();
let circle2 = new Circle (2.2, 'blue');

console.log(circle2.getRadius());
circle2.setRadius(3.4)
console.log(circle2.getColor());
circle2.setColor('green')
console.log(circle2.toString());
console.log(circle2.getArea());
console.log(circle2.getCircumference());
