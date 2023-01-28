const incbutton = document.getElementById("incbutton")
const resbutton = document.getElementById("resbutton")
const text = document.getElementById("text")
let count = 0

incbutton.onclick = function(){
    count += 1
    text.innerText = `Current Number: ${count}`
};

resbutton.onclick = function(){
    count = 0
    text.innerText = `Current Number: ${count}`
}