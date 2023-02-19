function insert (num) {

    let number = document.querySelector ("#result").innerHTML;
    document.querySelector ("#result").innerHTML = number + num;

}

function clean () {
    
    document.querySelector ("#result").innerHTML = "";

}

function erase () {

   let outcome = document.querySelector ("#result").innerHTML;
   document.querySelector ("#result").innerHTML = outcome.substring (0, outcome.length -1);

}

function calculate () {

    let outcome = document.querySelector ("#result").innerHTML;

    if (outcome) {
        document.querySelector ("#result").innerHTML = eval (outcome);
    }



}