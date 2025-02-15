function createFilter(){ 

      return function(){
            
            let minNumber = parseFloat(document.getElementById("input").value);
            let myArr = [5, 1, 12, 20, 8, 3, 32, 25, 46];
            let newArr = [];

            for( let i = 0; i < myArr.length; i++){
                  if( minNumber < myArr[i] ){
                        newArr.push(myArr[i]);                       
                  }
            }
            document.getElementById("text").innerHTML = newArr;
      }
}

let clickFunc = createFilter();

document.getElementById("btn").addEventListener("click" , clickFunc);

