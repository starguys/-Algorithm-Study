// JavaScript program to find if there is path
// from top left to right bottom

// To find the path from
// top left to bottom right
function isPath(arr) {
  var row = 5;
  var col = 5;
  // Directions
  var dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // Queue
  var q = [];

  // Insert the top right corner.
  q.push([0, 0]);

  // Until queue is empty
  while (q.length > 0) {
    var p = q[0];
    q.shift();

    // Mark as visited
    arr[p[0]][p[1]] = -1;

    // Destination is reached.
    if (p[0] == row - 1 && p[1] == col - 1) return true;

    // Check all four directions
    for (var i = 0; i < 4; i++) {
      // Using the direction array
      var a = p[0] + dir[i][0];
      var b = p[1] + dir[i][1];

      // Not blocked and valid
      if (a >= 0 && b >= 0 && a < row && b < col && arr[a][b] != -1) {
        if (a == row - 1 && b == col - 1) return true;
        q.push([a, b]);
      }
    }
  }
  return false;
}

// Driver Code
// Given array
var arr = [
  [0, 0, 0, -1, 0],
  [-1, 0, 0, -1, -1],
  [0, 0, 0, -1, 0],
  [-1, 0, 0, 0, 0],
  [0, 0, -1, 0, 0],
];

// Path from arr[0][0] to arr[row][col]
if (isPath(arr)) console.log("yes");
else console.log("no");
