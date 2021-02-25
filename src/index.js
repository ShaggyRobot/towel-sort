module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    sorted = [];
    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        i % 2 != 0 ? element.reverse() : element;
        sorted = sorted.concat(element);
    }
    return sorted;
};
