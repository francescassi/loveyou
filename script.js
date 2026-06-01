const pages = document.querySelectorAll(".page");
function hideAllPages() {
    pages.forEach(page => {
        page.classList.remove("active");
    });
}
function showPage(id) {
    hideAllPages();
    document
        .getElementById(id)
        .classList
        .add("active");
}
/* ==========================
   LOADING
========================== */
function showLoading() {
    showPage("loadingPage");
    let progress = 0;
    const progressBar =
        document.getElementById("progressBar");
    const loadingText =
        document.getElementById("loadingText");
    const interval = setInterval(() => {
        progress++;
        progressBar.style.width =
            progress + "%";
        loadingText.innerText =
            progress + "%";
        if(progress >= 100){
            clearInterval(interval);
            setTimeout(() => {
                showPage("aboutMePage");
            }, 500);
        }
    }, 25);
}
/* ==========================
   ENVELOPE
========================== */
function showEnvelope() {
    showPage("envelopePage");
}
function openLetter(){
    const letter =
        document.querySelector(
            ".letter-image"
        );
    letter.style.transform =
        "scale(1.15)";
    letter.style.opacity =
        "0";
    setTimeout(() => {
        showPage("letterPage");
    }, 500);
}
/* ==========================
   LETTER
========================== */
function showKnowYou() {
    showPage("knowYouPage");
}
/* ==========================
   RELATIONSHIP PAGE
========================== */
function showRelationship() {
    showPage("relationshipPage");
}
/* ==========================
   PROPOSAL PAGE
========================== */
function showProposal() {
    showPage("proposalPage");
}
/* ==========================
   YES
========================== */
function accepted() {
    document
        .getElementById("endingTitle")
        .innerText =
        "Thank You 💗";
    document
        .getElementById("endingText")
        .innerText =
        "You just made me the happiest person today.";
    showPage("endingPage");
    document.getElementById(
    "flowerBonus"
).style.display =
"block";
    startSakura();
}
/* ==========================
   NO
========================== */
function rejected() {

    document
        .getElementById("endingTitle")
        .innerText =
        "Thank You 🌸";

    document
        .getElementById("endingText")
        .innerText =
        "Thank you for being honest. I appreciate you reading all of this.";

    document
        .getElementById("retryBtn")
        .style.display =
        "inline-block";

    showPage("endingPage");

    startSakura();
}
/* ==========================
   SAKURA EFFECT
========================== */
function startSakura(){
    const container =
        document.getElementById(
            "sakura-container"
        );
    setInterval(() => {
        const sakura =
            document.createElement("div");
        sakura.classList.add(
            "sakura"
        );
        sakura.innerHTML = "🌸";
        sakura.style.left =
            Math.random() * 100 + "vw";
        sakura.style.animationDuration =
            (Math.random() * 4 + 4)
            + "s";
        sakura.style.fontSize =
            (Math.random() * 15 + 15)
            + "px";
        container.appendChild(
            sakura
        );
        setTimeout(() => {
            sakura.remove();
        }, 9000);
    }, 300);
}

function backToProposal(){

    document
        .getElementById("retryBtn")
        .style.display =
        "none";

    showPage("proposalPage");

}
function openFlowerProject(){

    window.open(
        "https://francescassi.github.io/Flowers",
        "_blank"
    );

}
/* ==========================
   SAVE ANSWERS
========================== */
const scriptURL = "https://script.google.com/macros/s/AKfycbzkwLgaddOj11_6cMoThsSAkOiKALaJJCON1TxmiffMmRljKFh2-sLKUaPqe9lLvlg/exec";

function kirimKeSheet(data) {
    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
    });
}

function submitAll() {
    const data = {
        mbti: document.getElementById("mbti").value,
        food: document.getElementById("food").value,
        color: document.getElementById("color").value,
        music: document.getElementById("music").value,
        place: document.getElementById("place").value,
        hobby: document.getElementById("hobby").value,
        dream: document.getElementById("dream").value,
        flower: document.getElementById("flower").value,
        animal: document.getElementById("animal").value,
        loveLanguage: document.getElementById("loveLanguage").value
    };

    kirimKeSheet(data);
    showRelationship();
}

function submitRelationship() {
    const data = {
        commitment: document.querySelector('input[name="commitment"]:checked')?.value,
        commitment_other: document.getElementById("com0")?.value,

        penting: document.getElementById("penting0")?.value,
        mau: document.getElementById("mau0")?.value,

        effort: document.querySelector('input[name="effort"]:checked')?.value,
        effort_other: document.getElementById("effort0")?.value,

        need: document.getElementById("need0")?.value,
        reason: document.getElementById("reason0")?.value,
        eval: document.getElementById("eval0")?.value,
        ex: document.getElementById("ex0")?.value,

        understand: document.querySelector('input[name="understand"]:checked')?.value,
        understand_other: document.getElementById("janji0")?.value,

        jujur: document.querySelector('input[name="jujur"]:checked')?.value,
        jujur_other: document.getElementById("jujur0")?.value
    };

    kirimKeSheet(data);
    showProposal();
}