function greetFunc(){
      alert("Hello");
}

function validCheck(){
      const inpObj = document.getElementById("in1");
      if(inpObj.checkValidity()){
            document.getElementById("p1").innerHTML = "Valid Input";
      }
      else{
            document.getElementById("p1").innerHTML = inpObj.validationMessage;
      }
}

function rangeCheck(){
      let text;
      const inpObj2 = document.getElementById("in2");
      if(inpObj2.validity.rangeOverflow){
            text = "Not Valid";
      }
      else{
            text = "Valid Range";
      }
      document.getElementById("p2").innerHTML = text;
}

let w;
function startWorker(){
      if( typeof(w) == "undefined"){
            w = new Worker("demo_worker.js");
      }
      w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
          };
}
function stopWorker(){
      w.terminate();
      w = undefined;
}