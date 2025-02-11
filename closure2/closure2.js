function countdown(startTime){
      let time = startTime;
      let intervalId = null;
      return {
            start : function(){
                  if (intervalId === null){
                  intervalId = setInterval(function(){
                        if(time > 0){
                              time --;
                              document.getElementById("text").innerHTML = time;
                        }
                        else{
                              clearInterval(intervalId);
                              intervalId = null;
                              time = startTime;
                        }
                  }, 1000);
            }
            },
            stop : function(){
                  clearInterval(intervalId);
                  intervalId = null;
            }
      }
}

let myTimer = countdown(30);

document.getElementById("start").addEventListener("click" , myTimer.start);
document.getElementById("stop").addEventListener("click" , myTimer.stop);