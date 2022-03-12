
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof(matrix) == 'undefined') {
    return [];
  }

  let direct = true;
  let simple_matrix = [];
  for (const row of matrix) {
    if (direct) {
      simple_matrix = simple_matrix.concat(row);
      direct = false;
    } else {
      simple_matrix = simple_matrix.concat(row.reverse());
      direct = true;
    }
  }
  return simple_matrix;
}
