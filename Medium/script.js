var userInput = prompt("Type here")

if(userInput === userInput.toUpperCase()){
    console.log("Why are you yelling")
}
else if (userInput === userInput.toLowerCase()){
    console.log("Quit whispering")
}
else{
    console.log("Speaking to who?")
}