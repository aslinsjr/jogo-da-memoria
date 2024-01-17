const emojis = [
"🏍",
"🏍",
"🚍",
"🚍",
"🚒",
"🚒",
"🚑",
"🚑",
"✈",
"✈",
"🛩",
"🛩",
"🚁",
"🚁",
"🚀",
"🚀"
];

let openCard = [];

let radomizeEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item"
    box.innerHTML = radomizeEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box)
}

function handleClick() {
    if(openCard.length < 2) {
        this.classList.add("box-open")
        openCard.push(this)
    }

    if(openCard.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(openCard[0].innerHTML === openCard[1].innerHTML) {

        openCard[0].classList.add("box-match");
        openCard[1].classList.add("box-match");

    } else {

        openCard[0].classList.remove("box-open");
        openCard[1].classList.remove("box-open");
    }

    openCard = [];

    if(document.querySelectorAll(".box-match").length === emojis.length) {
        alert("Venceu!!")
    }
}

let reloadBtn = document.querySelector("#reload-btn");

reloadBtn.addEventListener("click", () => {
    window.location.reload()
})