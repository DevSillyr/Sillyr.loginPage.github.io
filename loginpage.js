window.onload = function() {
    console.log("online")

    let loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function() {
        console.log("clicked")

        let username = document.getElementById("username").value
        let password = document.getElementById("password").value

        if (username == "babylein" && password == "baby") {
            window.location.href("https://devsillyr.github.io/DinoGame/");
            console.log("right credentials");
        }
    });
}