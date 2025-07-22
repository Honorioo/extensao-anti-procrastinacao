const form = document.querySelector("form");


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const inputUrl = document.querySelector(".input").value;
    console.log(inputUrl);

    if (inputUrl) {
        chrome.storage.local.set({ blockedUrl: inputUrl }, () => {
        alert("URL bloqueada com sucesso!");
    });
    }
});

form.addEventListener("reset", async (event) => {
    event.preventDefault();
    const buttonDes = document.getElementById("buttonDes");

    if(buttonDes){
        chrome.storage.local.remove("blockedUrl", () => {
            alert("URL desbloqueada com sucesso!");
        });
    }
});