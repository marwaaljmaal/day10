class Square extends Rectangle {
    constructor(side) {
    super(side, side);
    }
}

var sq = new Square(4);
    console.log(sq.area());  
    console.log(sq.perimeter());  
sq.draw("0");