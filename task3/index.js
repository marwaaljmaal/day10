Array.prototype.customFill = function(value) {
    var filledArray = [];
    for (var i = 0; i < this.length; i++) {
    filledArray.push(value);
    }
    return filledArray;
};

var myArray = [1, 2, 3, 4, 5];
var filledArray = myArray.customFill(0);
console.log(filledArray);
