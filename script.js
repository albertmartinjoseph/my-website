document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("clickBtn");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        message.innerText = "Thanks for visiting my cloud portfolio 🚀";
    });
});