function guess_the_number(secretNumber) {

    while (secretNumber !== user_choice) {
        user_choice = Number (prompt("What is the secret number")) ;
        if (user_choice === secretNumber) {
            break;
        }
        else {
            alert("You fail at life!");
        }
    }
}

guess_the_number(42);

.freeze() 