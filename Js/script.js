let internetStatus = document.querySelector(".internet-status");
let ul = document.querySelector("ul");
let reloadBtn = document.querySelector(".reload-btn");

function online() {
    internetStatus.textContent = "You are online now";
    internetStatus.style.color = "green";
    ul.classList.add("hide");
    reloadBtn.classList.add("hide");
}

function offline() {
    internetStatus.textContent = "You are offline now";
    internetStatus.style.color = "#666";
    ul.classList.remove("hide");
    reloadBtn.classList.remove("hide");
}

window.onload = function () {
    if (window.navigator.onLine) {
        online();
    } else {
        offline();
    }
};

window.addEventListener("online", () => online());
window.addEventListener("offline", () => offline());

reloadBtn.addEventListener("click", () => {
    window.location.reload();
});
