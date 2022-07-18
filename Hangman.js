var a;
var word;
var hidden;
var hiddenword;
var maxGuesses = 6;
var attempts = maxGuesses - guesses;
var input =  document.getElementById("word");
var input2 = document.getElementById("letter");
var g = document.getElementById("guesses");
var p = document.getElementById("guess");
var invis = document.getElementsById("gess");
function getWord(){
    //this method gets the word to be guessed
    word = input.value;
    console.log(word);
}

function clearInput(){
    //this method clears the input field
    input.value = "";
}
  
function guess(){
    //this method display the word to be guessed
    //as a series of hashes
    a = word.length
    hidden = [];
    for(var i = 0; i < a; i++){
        //converts each letter to a hash
        hidden[i]= "_";
    }
    hiddenword = hidden.join(" ");// concatenates the array hidden letters to make a hidden word
    p.innerHTML = "<br><br><br>" +  hiddenword;//displays the hidden word
    console.log(hiddenword);
}

function attempt(){
    var b = input2.value;
    input2.value = "";
    for(var i = 0; i < a; i++){
        //if a letter is found the letter is reveals
       if(b==word[i]){
        hidden[i]=b;
       }
       //if the letter has not been found before
       //it wont be revealed
       else if(hidden[i]=="_"){
        hidden[i]="_";
       }
    }
    hiddenword = hidden.join(" ");// concatenates the array hidden letters to make a hidden word
    p.innerHTML = "<br><br><br>" +  hiddenword;//displays the hidden word
    maxGuesses--;
}

function NumberOfAttempts(){
    
    g.innerText = "You have "+ maxGuesses + " attempts remaining";

    if(maxGuesses == 0 ){
        g.innerText = "GAME OVER";
        document.getElementById("button2").style.visibility="hidden";
    }
}