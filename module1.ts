import shape = require("./module")
export class Circle implements shape.IShape {
    public draw() {
        console.log("Cirlce is drawn (external module)")
    }
}