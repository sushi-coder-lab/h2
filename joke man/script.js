const button = document.getElementById("btn");
const output = document.getElementById("output");
const input = document.getElementById("ask");

button.addEventListener("click", function(){
    let prompt = input.value;

    if(prompt === ""){
        alert("Write something here...")
    }
})