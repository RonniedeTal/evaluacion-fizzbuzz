let result=document.getElementById("result")
let messageError=`no es un numero`

let arrayResponses=[]
console.log(arrayResponses);


const resultado=()=>{
    
    let number=parseFloat(document.getElementById("numero").value)
    if(isNaN(number)){
        return arrayResponses.push(result.innerHTML=`error ${messageError}`)
    }
    if(number%3===0&&number%5===0){
        return arrayResponses.push(result.innerHTML=`el numero ${number} fizzbbuzz`)
       
    }else if (number%3==0){
       return arrayResponses.push(result.innerHTML=`el numero ${number} fizz`)
    }else if(number%5==0){
        return arrayResponses.push(result.innerHTML=` el numero ${number} buzz`)
    }else{
        return arrayResponses.push(result.innerHTML=number)
    }

    }
  

