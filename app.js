// console.log("Hello World");



let input = document.querySelector("#text");
let result = document.querySelector("#result");
// let caseSensitive = input.value.toLowerCase();
// console.log('sensitive case is ', caseSensitive);


function checkPalindrome(){
    // console.log('sensitive case is ', input.value.toLowerCase());
    let reversestr = input.value.replaceAll(" ", "").toLowerCase().split("").reverse().join("")
    
    if(input.value.replaceAll(" ", "").toLowerCase() === reversestr){
        result.innerHTML = 'Palindrome ha'
    } else{
        result.innerHTML = 'Palindrome Nahi ha'
    }

    if(input.value === ""){
        alert("Type Something");
        result.innerHTML = ""
    } else{
        
    }
}