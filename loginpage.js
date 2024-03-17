window.onload = function() {
    console.log("online")

    let loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function() {
        console.log("clicked")

        let username = document.getElementById("username").value
        let password = document.getElementById("password").value

        if (username == "babylein" && password == "baby") {
            console.log("right credentials")
            window.location.replace("https://devsillyr.github.io/DinoGame");
        }
    });
}