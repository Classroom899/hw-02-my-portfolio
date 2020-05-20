var arguments = process.argv[2]
console.log(arguments);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function multiplyArray(array, multiplier) {
    var results = [];
    for (var i = 0; i < array.length; i++) {
        var placement = array[i];
        var create = placement * multiplier
        results.push(create);
    }
    return results;


}

console.log(multiplyArray(numbers, arguments))
