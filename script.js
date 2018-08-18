    function checkNameValue(event) {
        event.preventDefault();
        var name = document.getElementById("Name");
        var nameValue = name.value;
        console.log(nameValue);


        if (nameValue === "") {
            name.style.border = "5px solid red";
        } else {
            name.style.border = "0px solid red";

        }

    }



    function checkEmailValue(event) {
        event.preventDefault();
        var email = document.getElementById("Email");
        var emailValue = email.value;
        console.log(emailValue);

        if (emailValue === "") {
            email.style.border = "5px solid red";
        } else {
            email.style.border = "0px solid red";

        }
    }





        var button = document.getElementById("Send");
        button.addEventListener('click', checkNameValue);
        button.addEventListener('click', checkEmailValue);




    