/* Add your JavaScript to this file */
/* Add your JavaScript to this file */

window.onload = function(){
    var response = document.getElementById("email");
    var submit = document.querySelector(".newsletter .btn");
    displaymessage = document.getElementsByClassName("message")[0];
    submit.addEventListener('click', handlesubmission);

    function handlesubmission(clickEvent){
        if (response.value == ""){
            displaymessage.innerHTML = "Please enter a valid email address.";
        }
        else if (isValidEmail(response.value) == false){
            displaymessage.innerHTML = "Please enter a valid email address.";
        }
        else{
            displaymessage.innerHTML = "Thank you! Your email address " + response.value + " has been added to our mailing list!";
        }
        clickEvent.preventDefault();
    }

    function isValidEmail(emailValue){
       var emailformats = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailValue.match(emailformats)){
           return true 
        }   
        else {
           return false     
       }
    }
}