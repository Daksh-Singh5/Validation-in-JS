
function setScreenValue(value){
document.getElementById("result").value += value;
}
function clearScreen(){
    document.getElementById("result").value="";
    
    
}

function calculateResult(){
    const resultAnswer= document.getElementById("result")
    const question= resultAnswer.value.trim()
    
    if (question === ""){
        document.getElementById("result").value="enter a question";
         
        // alert("enter a question")
        return;
    }

try{
 resultAnswer.value=eval(question)
}
catch(e){
    document.getElementById("result").value="your question is invalid"
}


}
