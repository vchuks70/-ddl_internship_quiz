// Complete the staircase function below.
function staircase(n) {

 let space = " ";
 for (let i = 1; i <= n; i++) {
     console.log(space.repeat(n-i) + "#".repeat(i));
 }
 
}
