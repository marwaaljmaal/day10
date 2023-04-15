var myArray = [3, 7, 2, 9, 1, 4];
Array.prototype.min =function (){
    var min = this [0] ;
    this.filter((value) =>{
        if (min < value){
            return min = value 
        }
    })
    return min;
}
var minValue = myArray.min();

console.log(minValue);



