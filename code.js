function insertionSortReverse(array) {
    for (var i = array.length; i > -1; i--) {
        var val = array[i-1]
        var j;
        for (j = i; j > 0 && array[j + 1] < val; j++) {
            array[j] = array[j + 1];
        }
        array[j] = val
    }
    return array.slice(1, array.length);
}
