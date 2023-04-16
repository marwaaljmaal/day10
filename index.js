class Rectangle {
    constructor(width, height) {
    this._width = null;
    this._height = null;
    this.width = width;
    this.height = height;
    }

    get width() {
    return this._width;
    }

    set width(value) {
    if (!Number.isInteger(value)) {
        throw new Error("width must be an integer value");
    }
    if (value <= 0) {
        throw new Error("width must be a positive value");
    }
    this._width = value;
    }

    get height() {
    return this._height;
    }

    set height(value) {
    if (!Number.isInteger(value)) {
        throw new Error("height must be an integer value");
    }
    if (value <= 0) {
        throw new Error("height must be a positive value");
    }
    this._height = value;
    }

    area() {
      return this.width * this.height;
    }

    perimeter() {
      return 2 * (this.width + this.height);
    }

    draw(symbol) {
    let row = "";
    for (let i = 0; i < this.width; i++) {
        row += symbol;
    }
    for (let i = 0; i < this.height; i++) {
        console.log(row);
    }
    }
}


let rec = new Rectangle(3, 5);
    console.log(rec.area());  
    console.log(rec.perimeter()); 
rec.draw("0");




// //////////////////////////////task2//////////////////////////////////

class Square extends Rectangle {
    constructor(side) {
    super(side, side);
    }
}

var sq = new Square(4);
    console.log(sq.area());  
    console.log(sq.perimeter());  
sq.draw("0");