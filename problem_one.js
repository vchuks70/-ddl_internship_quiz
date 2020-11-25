/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    var response = ar.reduce((total,nextValue)=> total + nextValue);
    return response;

}
