    function checkinputValue(event) {
        event.preventDefault();
        var input = document.getElementById("input");
        var inputValue = input.value;
        console.log(inputValue);

        var form = document.getElementById("form");
        var notification = ("Thank You for Subscribing!");


        if (inputValue === "") {
            input.style.border = "5px solid red";
        } else {
            input.style.border = "0px solid red";
            form.style.display = "none";
            alert(notification);
            console.log(notification);

        }

    }


    var button = document.getElementById("Send");
    button.addEventListener('click', checkinputValue);