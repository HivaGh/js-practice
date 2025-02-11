function counting(){
      let counter = 0;
      return { 
            increment : function (){
                  counter++;
                  updateDisplay();
            },

            decrement : function (){
                  counter--;
                  updateDisplay();
            },

            reset : function (){
                  counter = 0;
                  updateDisplay();
            }
      }
      function updateDisplay() {
            document.getElementById("text").innerHTML = counter;
      };
      }

      const counterObj = counting();

      document.getElementById("increase").addEventListener("click" , counterObj.increment);
      document.getElementById("decrease").addEventListener("click" , counterObj.decrement);
      document.getElementById("reset").addEventListener("click" , counterObj.reset);