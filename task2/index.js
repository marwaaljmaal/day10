Array.prototype.customFilter = function(callback) {
    var filteredArray = [];
    for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
        filteredArray.push(this[i]);
    }
    }
    return filteredArray;
};

var myArray = [1, 2, 3, 4, 5];
var filteredArray = myArray.customFilter(function(item) {
return item % 2 === 0;
});
console.log(filteredArray);