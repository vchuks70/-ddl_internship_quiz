/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let maxValue = -1;
    
     keyboards.forEach(baseElement => {
      drives.forEach(element => {
         if(baseElement + element <= b){
             var temporaryPlaceholder = baseElement + element;
             if(temporaryPlaceholder > maxValue){
                 maxValue = temporaryPlaceholder;
                 }
             }
          });
  });
  
  return maxValue;

}
