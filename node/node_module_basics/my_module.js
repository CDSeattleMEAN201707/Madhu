module.exports = function(){
  return {
    add: function(num1, num2) { 
         
        console.log("sum is " , num1+num2)  ;
    },
    multiply: function(num1, num2) {
        
         
          console.log("prod is " , num1*+num2) ; 
        //  return prod
    },
    square: function(num) {
        //  squareval=Math.square(num)
         console.log("squareval is " , num*num)  ;
        //  return squareval 
    },
    random: function(num1, num2) {
         // add code here
         randomval=Math.random(num1,num2)
         console.log("randomval is " , randomval)  ;
        //  return randomval;
    }
  }
};