function counting(){
let counter = 0;

      return function(td){
            if(td.style.background === "red"){
            td.style.background = "";
                  counter--;
            }
            else{
                  td.style.background = "red";
                  counter++;
            }
            document.getElementById("txt").innerHTML = "تعداد مربع های قرمز: " + counter;
      }
}

const clickFunc = counting();

      document.querySelectorAll("td").forEach(function(td){
            td.addEventListener("click" , function(){
                  clickFunc(td);
            })
      })
